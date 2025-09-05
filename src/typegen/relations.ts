import type { DirectusRelation } from "@directus/sdk";
import { readRelations } from "@directus/sdk";
import type { Directus } from "../directus";
import type { Schema } from "./schema";
import { quoted, toInterfaceName, toTypescriptType } from "./utils";

/**
 * Lazy field that will apply the field type to the schema when the schema is built and the relation is resolved.
 */
interface RelationalField {
  applyToSchema(schema: Schema): void;
}

/**
 * `collection`.`field` -> `target_collection`.`id`
 */
class M20Field implements RelationalField {
  constructor(
    /**
     * The collection of the relation.
     */
    public collection: string,
    /**
     * The field of the collection that linked to the target collection.
     */
    public field: string,
    /**
     * The target collection of the relation.
     */
    public targetCollection: string,
    /**
     * The alias field of the target collection that linked to this collection (often is `o2m`)
     */
    public linkedField?: string | null,
  ) {}

  applyToSchema(schema: Schema) {
    const collection = schema.getOrInitCollection(this.collection);
    const field = collection.getOrInitField(this.field);

    const targetCollection = schema.getOrInitCollection(this.targetCollection);
    if (targetCollection.pkType) {
      field.addTypes(targetCollection.pkType, toInterfaceName(this.targetCollection));
    }
    this.linkedField &&
      targetCollection
        .getOrInitField(this.linkedField)
        .addTypes(`${toInterfaceName(this.collection)}[]`);
  }
}

class M2MField implements RelationalField {
  constructor(
    public leftCollection: string,
    public leftField: string,
    public junctionLeftField: string,
    public rightCollection: string,
    public rightField: string,
    public junctionRightField: string,
    public junctionCollection: string,
  ) {}

  applyToSchema(schema: Schema) {
    const leftCollection = schema.getOrInitCollection(this.leftCollection);
    if (!leftCollection.pkType) {
      throw new Error(`${this.leftCollection} has no primary key`);
    }
    const rightCollection = schema.getOrInitCollection(this.rightCollection);
    if (!rightCollection.pkType) {
      throw new Error(`${this.rightCollection} has no primary key`);
    }

    const junctionCollection = schema.getOrInitCollection(this.junctionCollection);
    const JunctionCollectionType = toInterfaceName(this.junctionCollection);
    const JunctionCollectionPKType = junctionCollection.pkType;

    junctionCollection
      .getOrInitField(this.junctionLeftField)
      .addTypes(leftCollection.pkType, toInterfaceName(this.leftCollection));
    junctionCollection
      .getOrInitField(this.junctionRightField)
      .addTypes(rightCollection.pkType, toInterfaceName(this.rightCollection));

    leftCollection
      .getField(this.leftField)
      ?.addTypes(`${JunctionCollectionPKType}[]`, `${JunctionCollectionType}[]`);

    rightCollection
      .getField(this.rightField)
      ?.addTypes(`${JunctionCollectionPKType}[]`, `${JunctionCollectionType}[]`);
  }
}

class M2AField implements RelationalField {
  constructor(
    /**
     * The collection that contains the junction table.
     */
    public junctionCollection: string,
    /**
     * The collection that owns the polymorphic side.
     */
    public ownerCollection: string,
    /**
     * The m2a alias field of the owner collection
     */
    public ownerField: string,
    /**
     * This field ties the junction back to the parent record.
     */
    public junctionOwnerField: string,
    /**
     * Field that contains the actual primary key of the target
     *
     * Often named `item`
     */
    public polymorphicField: string,
    /**
     * Field that describes which collection the target belongs to.
     *
     * Often named `collection`
     */
    public discriminatorField: string,
    /**
     * The whitelist of collections that can appear in the polymorphic side
     */
    public allowedCollections: string[],
  ) {}
  applyToSchema(schema: Schema): void {
    const ownerCollection = schema.getOrInitCollection(this.ownerCollection);
    if (!ownerCollection.pkType) {
      throw new Error(`${this.ownerCollection} has no primary key`);
    }
    const junctionCollection = schema.getOrInitCollection(this.junctionCollection);
    junctionCollection
      .getOrInitField(this.discriminatorField)
      .removeTypes("string")
      .addTypes(...this.allowedCollections.map(quoted), "(string & {})");
    junctionCollection
      .getOrInitField(this.polymorphicField)
      .addTypes("string", ...this.allowedCollections.map(toInterfaceName));
    junctionCollection
      .getOrInitField(this.junctionOwnerField)
      .addTypes(ownerCollection.pkType, toTypescriptType(toInterfaceName(this.ownerCollection)));
    ownerCollection
      .getField(this.ownerField)
      ?.addTypes(`${junctionCollection.pkType}[]`, `${toInterfaceName(this.junctionCollection)}[]`);
  }
}

type JunctionCollection = string;

const debugM2M = [] as any[];
// const debugM2A = [] as any[];

export class Relations {
  m2o = [] as M20Field[];
  m2m = [] as M2MField[];
  m2a = [] as M2AField[];
  rawM2M = {} as Record<JunctionCollection, DirectusRelation[]>;
  rawM2A = {} as Record<JunctionCollection, DirectusRelation>;
  constructor(private relations: DirectusRelation[]) {}

  static async init(directus: Directus) {
    const response = await directus.request<DirectusRelation[]>(readRelations());
    // await Bun.write("relations.json", JSON.stringify(response, null, 2));
    return new Relations(response);
  }

  isM2O(rel: DirectusRelation) {
    return (
      !!rel.meta.many_collection &&
      !!rel.meta.many_field &&
      !!rel.meta.one_collection &&
      !rel.meta.junction_field
    );
  }

  isM2M(rel: DirectusRelation) {
    return (
      !!rel.meta.many_collection &&
      !!rel.meta.many_field &&
      !!rel.meta.one_collection &&
      !!rel.meta.junction_field
    );
  }

  isM2A(rel: DirectusRelation) {
    return (
      !rel.related_collection &&
      !rel.schema &&
      !!rel.meta.one_collection_field &&
      Array.isArray(rel.meta.one_allowed_collections)
    );
  }

  parse() {
    for (const rel of this.relations) {
      if (this.isM2O(rel)) {
        this.m2o.push(
          new M20Field(rel.collection, rel.field, rel.related_collection, rel.meta.one_field),
        );
        continue;
      }
      if (this.isM2M(rel)) {
        this.rawM2M[rel.collection] ??= [];
        this.rawM2M[rel.collection]?.push(rel);
        continue;
      }
      if (this.isM2A(rel)) {
        // debugM2A.push(rel)
        if (this.rawM2A[rel.collection]) throw new Error("M2A exists");
        this.rawM2A[rel.collection] = rel;
        continue;
      }
      console.warn("Unknown relation", rel);
    }
    // await Promise.all([
    //   Bun.write("debugM2M.json", JSON.stringify(debugM2M, null, 2)),
    //   Bun.write("debugM2A.json", JSON.stringify(debugM2A, null, 2)),
    // ]);
    for (const junction in this.rawM2M) {
      const rel = this.rawM2M[junction];
      if (!Array.isArray(rel) || rel?.length !== 2) {
        // these might be m2a half
        const _left = rel?.[0];
        const _right = _left ? this.rawM2A[_left.collection] : undefined;
        if (!_right || !_left) {
          // If one of the sides is missing, it's a m2o
          const rel = _left || _right;
          if (rel) {
            this.m2o.push(
              new M20Field(rel.collection, rel.field, rel.related_collection, rel.meta.one_field),
            );
          }
          continue;
        }

        const left = structuredClone(_left);
        const right = structuredClone(_right);
        delete this.rawM2M[junction];
        delete this.rawM2A[left.collection];

        this.m2a.push(
          new M2AField(
            junction,
            left.related_collection,
            left.meta.one_field!,
            left.field,
            right.field,
            right.meta.one_collection_field!,
            right.meta.one_allowed_collections as unknown as string[],
          ),
        );
        continue;
      }

      const [left, right] = rel;
      debugM2M.push([left, right]);

      this.m2m.push(
        new M2MField(
          left!.related_collection,
          left!.meta.one_field!,
          left!.field,
          right!.related_collection,
          right!.meta.one_field!,
          right!.field,
          junction,
        ),
      );
    }
    return this;
  }

  applyToSchema(schema: Schema) {
    for (const m2a of this.m2a) {
      m2a.applyToSchema(schema);
    }
    for (const m2m of this.m2m) {
      m2m.applyToSchema(schema);
    }
    for (const m2o of this.m2o) {
      m2o.applyToSchema(schema);
    }
  }
}

// type CollectionName = string;
// type FieldName = string;

// export interface M2O {
//   kind: "m2o";
// }

// export interface M2M {
//   kind: "m2m";
//   junction: CollectionName;
//   aCollection: CollectionName;
//   aField: FieldName;
//   bCollection: CollectionName;
//   bField: FieldName;
//   aColumnInJunction: FieldName;
//   bColumnInJunction: FieldName;
// }

// export interface M2A {
//   kind: "m2a";
//   junction: CollectionName;
//   ownerCollection: CollectionName;
//   ownerField: FieldName;
//   ownerColumnInJunction: FieldName;
//   polymorphicColumn: FieldName;
//   discriminatorField: FieldName;
//   allowedCollections: CollectionName[];
// }
