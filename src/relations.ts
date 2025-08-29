import type { DirectusRelation } from "@directus/sdk";
import { readRelations } from "@directus/sdk";
import type { Directus } from "./directus";
import type { Schema } from "./schema";
import { toInterfaceName } from "./utils";

/**
 * Lazy field that will apply the field type to the schema when the schema is built and the relation is resolved.
 */
interface LazyField {
  applyToSchema(schema: Schema): void;
}

/**
 * `collection`.`field` -> `target_collection`.`id`
 */
class M20Field implements LazyField {
  constructor(
    public collection: string,
    public field: string,
    public target: string,
  ) {}

  applyToSchema(schema: Schema) {
    const collection = schema.getOrInitCollection(this.collection);
    const field = collection.getOrInitField(this.field);

    const targetCollection = schema.getOrInitCollection(this.target);
    if (targetCollection.primaryKeyType) {
      field.setType(targetCollection.primaryKeyType);
    }

    if (targetCollection.hasField(this.field)) {
      const o2mField = targetCollection.getOrInitField(this.field);
      o2mField.setType(`${toInterfaceName(this.collection)}[]`);
    }
  }
}

class M2MField implements LazyField {
  constructor(
    public leftCollection: string,
    public leftField: string,
    public rightCollection: string,
    public rightField: string,
    public junctionCollection: string,
  ) {}

  applyToSchema(schema: Schema) {
    const leftCollection = schema.getOrInitCollection(this.leftCollection);
  }
}

class M2AField implements LazyField {
  constructor(
    public leftCollection: string,
    public leftField: string,
    public rightCollection: string,
    public rightField: string,
    public junctionCollection: string,
    public polymorphicField: string, // field that contains possible collections
    public allowedCollections: string[],
  ) {}
  applyToSchema(schema: Schema): void {}
}

type JunctionCollection = string;

// const debugM2M = [] as any[];
// const debugM2A = [] as any[];

export class Relations {
  m2o = [] as M20Field[];
  m2m = [] as M2MField[];
  m2a = [] as M2AField[];
  rawM2M = {} as Record<JunctionCollection, DirectusRelation[]>;
  rawM2A = {} as Record<JunctionCollection, DirectusRelation>;
  constructor(private relations: DirectusRelation[]) {}

  static async init(directus: Directus) {
    const response = await directus.request<DirectusRelation[]>(
      readRelations(),
    );
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

  async parse() {
    for (const rel of this.relations) {
      if (this.isM2O(rel)) {
        if (rel.collection === "tai_san" && rel.field === "no") {
          console.log("M2O", rel);
        }
        this.m2o.push(
          new M20Field(rel.collection, rel.field, rel.related_collection),
        );
        continue;
      }
      if (this.isM2M(rel)) {
        // debugM2M.push(rel);
        this.rawM2M[rel.collection] ??= [];
        this.rawM2M[rel.collection]?.push(rel);
        continue;
      }
      if (this.isM2A(rel)) {
        // debugM2A.push(rel)
        if (this.rawM2A[rel.collection]) throw new Error("M2A xists");
        this.rawM2A[rel.collection] = rel;
        continue;
      }
      console.log("Unknown relation", rel);
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
        const right = _left ? this.rawM2A[_left.collection] : undefined;
        if (!right || !_left) {
          const rel = _left || right;
          if (rel) {
            this.m2o.push(
              new M20Field(rel.collection, rel.field, rel.related_collection),
            );
          }
          continue;
        }
        const left = structuredClone(_left);
        delete this.rawM2M[junction]; // Remove this so the below m2m can be processed
        this.m2a.push(
          new M2AField(
            left.related_collection,
            left.field,
            right.related_collection,
            right.field,
            junction,
            right.meta.one_collection_field!,
            right.meta.one_allowed_collections as unknown as string[],
          ),
        );
        continue;
      }

      const [left, right] = rel;
      // this.m2m.push(
      //   new M2MField(
      //     left!.collection,
      //     left!.field,
      //     right!.collection,
      //     right!.field,
      //     junction,
      //   ),
      // );
    }
    // for (const collectionName in this.relations) {
    //   const fields = this.relations[collectionName]!;
    //   const concreteSides = [] as DirectusRelation[];
    //   const polymorphics = [] as DirectusRelation[];

    //   // m2o: per-field within this collection
    //   for (const field in fields) {
    //     const rel = fields[field]!;
    //     if (this.isM2O(rel)) {
    //       this.m2o.push({
    //         kind: "m2o",
    //         manyCollection: collectionName,
    //         manyField:
    //           (rel.meta?.many_field as string) ?? rel.meta!.many_field!,
    //         oneCollection: rel.related_collection,
    //         oneField: rel.meta?.one_field ?? null,
    //       });
    //     } else if (this.isM2M(rel)) {
    //       concreteSides.push(rel);
    //     } else if (this.isM2A(rel)) {
    //       polymorphics.push(rel);
    //     }
    //   }

    //   if (concreteSides.length === 2) {
    //     const a = concreteSides[0]!;
    //     const b = concreteSides[1]!;
    //     if (a.meta && b.meta && a.related_collection && b.related_collection) {
    //       if (a.meta.one_field && b.meta.one_field) {
    //         this.m2m.push({
    //           kind: "m2m",
    //           junction: collectionName,
    //           aCollection: a.related_collection,
    //           aField: a.meta.one_field as string,
    //           bCollection: b.related_collection,
    //           bField: b.meta.one_field as string,
    //           aColumnInJunction: a.meta.many_field as string,
    //           bColumnInJunction: b.meta.many_field as string,
    //         });
    //       }
    //     }
    //   }

    //   for (const polymorphic of polymorphics) {
    //     if (polymorphic?.meta) {
    //       const polyMeta = polymorphic.meta;
    //       const concrete = Object.values(fields).find(
    //         (x) =>
    //           x.related_collection &&
    //           x.meta?.one_field &&
    //           (x.meta?.junction_field as string | null) === polyMeta.many_field,
    //       );
    //       if (
    //         concrete?.meta &&
    //         Boolean(polyMeta.one_collection_field) &&
    //         Boolean(polyMeta.one_allowed_collections) &&
    //         concrete.related_collection &&
    //         concrete.meta.one_field
    //       ) {
    //         this.m2a.push({
    //           kind: "m2a",
    //           junction: collectionName,
    //           ownerCollection: concrete.related_collection,
    //           ownerField: concrete.meta.one_field,
    //           ownerColumnInJunction: concrete.meta.many_field as string,
    //           polymorphicColumn: polyMeta.many_field as string,
    //           discriminatorField: polyMeta.one_collection_field as string,
    //           allowedCollections: (polyMeta.one_allowed_collections ??
    //             []) as string[],
    //         });
    //       }
    //     }
    //   }
    // }
  }

  // applyToSchema(schema: Schema) {
  //   // m2o and o2m
  //   for (const r of this.m2o) {
  //     const many = schema.getOrInitCollection(r.manyCollection);
  //     const manyField = many.getOrInitField(r.manyField);
  //     many.primaryKeyType && manyField.setType(many.primaryKeyType);
  //     manyField.setType(toInterfaceName(r.oneCollection));

  //     if (r.oneField) {
  //       const one = schema.getOrInitCollection(r.oneCollection);
  //       const oneField = one.getOrInitField(r.oneField);
  //       one.primaryKeyType && oneField.setType(`${one.primaryKeyType}[]`);
  //       oneField.setType(`${toInterfaceName(r.manyCollection)}[]`);
  //     }
  //   }

  //   // m2m
  //   for (const j of this.m2m) {
  //     const a = schema.getOrInitCollection(j.aCollection);
  //     const aField = a.getOrInitField(j.aField);
  //     a.primaryKeyType && aField.setType(`${a.primaryKeyType}[]`);
  //     aField.setType(`${toInterfaceName(j.junction)}[]`);

  //     const b = schema.getOrInitCollection(j.bCollection);
  //     const bField = b.getOrInitField(j.bField);
  //     b.primaryKeyType && bField.setType(`${b.primaryKeyType}[]`);
  //     bField.setType(`${toInterfaceName(j.junction)}[]`);
  //   }

  //   // m2a
  //   for (const j of this.m2a) {
  //     const owner = schema.getOrInitCollection(j.ownerCollection);
  //     const ownerField = owner.getOrInitField(j.ownerField);
  //     owner.primaryKeyType && ownerField.setType(`${owner.primaryKeyType}[]`);
  //     ownerField.setType(`${toInterfaceName(j.junction)}[]`);
  //   }
  // }

  // resolveFieldTypes(collection: string, field: string): string[] {
  //   const out: string[] = [];
  //   const rel = this.relations[collection]?.[field];
  //   // Direct relation entries present for this field
  //   if (rel) {
  //     // many-to-one on many side or junction foreign key
  //     if (
  //       rel.related_collection &&
  //       (rel.meta?.junction_field === null ||
  //         rel.meta?.junction_field === undefined)
  //     ) {
  //       out.push("string");
  //       out.push(toInterfaceName(rel.related_collection));
  //     } else if (rel.related_collection && rel.meta?.junction_field) {
  //       out.push("string");
  //       out.push(toInterfaceName(rel.related_collection));
  //     } else if (rel.related_collection === null) {
  //       // Polymorphic side in m2a junction
  //       const discriminator = rel.meta?.one_collection_field;
  //       if (discriminator === field && rel.meta?.one_allowed_collections) {
  //         // discriminator field: literal union
  //         out.push(
  //           (rel.meta.one_allowed_collections as unknown as string[])
  //             .map((c) => `'${c}'`)
  //             .join(" | "),
  //         );
  //       }
  //       const polyItemField = rel.meta?.many_field;
  //       if (polyItemField === field && rel.meta?.one_allowed_collections) {
  //         out.push("string");
  //         for (const c of rel.meta.one_allowed_collections)
  //           out.push(toInterfaceName(c));
  //       }
  //     }
  //   }

  //   // Computed reverse fields
  //   for (const r of this.m2o) {
  //     if (r.oneCollection === collection && r.oneField === field) {
  //       out.push("string[]");
  //       out.push(`${toInterfaceName(r.manyCollection)}[]`);
  //     }
  //   }
  //   for (const j of this.m2m) {
  //     if (j.aCollection === collection && j.aField === field) {
  //       out.push("number[]");
  //       out.push(`${toInterfaceName(j.junction)}[]`);
  //     }
  //     if (j.bCollection === collection && j.bField === field) {
  //       out.push("number[]");
  //       out.push(`${toInterfaceName(j.junction)}[]`);
  //     }
  //   }
  //   for (const j of this.m2a) {
  //     if (j.ownerCollection === collection && j.ownerField === field) {
  //       out.push("number[]");
  //       out.push(`${toInterfaceName(j.junction)}[]`);
  //     }
  //   }

  //   return out;
  // }
}

type CollectionName = string;
type FieldName = string;

export interface M2O {
  kind: "m2o";
}

export interface M2M {
  kind: "m2m";
  junction: CollectionName;
  aCollection: CollectionName;
  aField: FieldName;
  bCollection: CollectionName;
  bField: FieldName;
  aColumnInJunction: FieldName;
  bColumnInJunction: FieldName;
}

export interface M2A {
  kind: "m2a";
  junction: CollectionName;
  ownerCollection: CollectionName;
  ownerField: FieldName;
  ownerColumnInJunction: FieldName;
  polymorphicColumn: FieldName;
  discriminatorField: FieldName;
  allowedCollections: CollectionName[];
}
