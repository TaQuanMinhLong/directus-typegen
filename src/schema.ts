import type { DirectusCollection, DirectusField } from "@directus/sdk";
import { readCollections, readFieldsByCollection } from "@directus/sdk";
import type { Directus } from "./directus";
import type { TypescriptFieldType } from "./utils";
import { toInterfaceName, toTypescriptType } from "./utils";

export class Field {
  name: string;
  types = new Set<string>();

  constructor(name: string) {
    this.name = name;
  }

  addTypes(...types: TypescriptFieldType[]) {
    for (const type of types) this.types.add(type);
  }
}

export class Collection {
  name: string;
  primaryKey: string | undefined;
  fields = new Map<string, Field>();

  _primaryKeyType: TypescriptFieldType | null = null;

  constructor(name: string) {
    this.name = name;
  }

  setPrimaryKey(field: string) {
    this.primaryKey = field;
  }

  getOrInitField(name: string) {
    this.fields.set(name, this.fields.get(name) ?? new Field(name));
    return this.fields.get(name)!;
  }

  getField(name: string) {
    return this.fields.get(name);
  }

  get primaryKeyType() {
    if (this.name.startsWith("directus_")) {
      this._primaryKeyType = "string";
      return this._primaryKeyType;
    }
    if (this._primaryKeyType) return this._primaryKeyType;
    if (!this.primaryKey) return null;
    const field = this.getOrInitField(this.primaryKey);
    this._primaryKeyType = field.types.values().next().value ?? null;
    return this._primaryKeyType;
  }
}

export class Schema {
  collections = new Map<CollectionName, CollectionTypeName>();
  schema = {} as Record<CollectionName, Collection>;

  static isRelationalAlias(
    special: string[] | null | undefined,
  ): special is ["m2a" | "m2m" | "o2m"] {
    if (!special) return false;
    return (
      special.includes("m2a") ||
      special.includes("m2m") ||
      special.includes("o2m")
    );
  }

  getOrInitCollection(name: string) {
    this.schema[name] ??= new Collection(name);
    return this.schema[name];
  }

  static async init(directus: Directus) {
    // const debugSpecial = new Set<string>();
    // const debugAlias = [] as any[];
    const schema = new Schema();
    const collectionResponse = await directus.request(readCollections());
    const promises = [] as Promise<any>[];

    for (const collection of collectionResponse as DirectusCollection[]) {
      if (collection.collection.startsWith("directus_")) continue;
      if (!collection.schema?.name) continue;
      schema.collections.set(
        collection.collection,
        toInterfaceName(collection.collection),
      );
      promises.push(
        (async () => {
          const collectionSchema = schema.getOrInitCollection(
            collection.collection,
          );
          const fields = await directus.request(
            readFieldsByCollection(collection.collection),
          );

          for (const field of fields as DirectusField[]) {
            const schemaField = collectionSchema.getOrInitField(field.field);
            field.schema?.is_primary_key &&
              collectionSchema.setPrimaryKey(field.field);

            if (!field.schema?.data_type) {
              if (Schema.isRelationalAlias(field.meta.special)) {
                schema
                  .getOrInitCollection(collection.collection)
                  .getOrInitField(field.field);
              }
            } else {
              schemaField.addTypes(toTypescriptType(field.schema.data_type));
            }
            field.schema?.is_nullable && schemaField.addTypes("null");
          }
        })(),
      );
    }
    await Promise.all(promises);
    // await Bun.write("debugAlias.json", JSON.stringify(debugAlias, null, 2));
    // const possibleSpecials = Array.from(debugSpecial).map((s) => s.split("|"));
    // console.log(possibleSpecials);
    // console.log(schema.aliases);
    return schema;
  }

  generate(name = "DatabaseSchema", _export = true) {
    const lines: string[] = [];
    lines.push("// Auto-generated. Do not edit manually.\n");
    // TODO: Make option to config directus sdk import
    lines.push(
      `import type { DirectusFile, DirectusRole, DirectusUser } from "@directus/sdk";\n`,
    );

    // DatabaseSchema interface
    lines.push(`${_export ? "export " : ""}interface ${name} {`);
    for (const [collectionName, typeName] of this.collections) {
      lines.push(`  ${collectionName}: ${typeName}[];`);
    }
    lines.push("}\n");

    // Generate interfaces for each collection in the schema
    for (const [collectionName, typeName] of this.collections) {
      const collection = this.schema[collectionName];
      if (!collection) continue;

      lines.push(`interface ${typeName} {`);

      // Primary key field
      if (collection.primaryKey) {
        const pkField = collection.getField(collection.primaryKey);
        if (pkField) {
          const pkTypes = Array.from(pkField.types);
          lines.push(`  ${collection.primaryKey}: ${pkTypes.join(" | ")};`);
        }
      }

      // All other fields
      for (const [fieldName, field] of collection.fields) {
        if (fieldName === collection.primaryKey) continue; // already handled above

        const types = Array.from(field.types);
        if (types.length > 0) {
          lines.push(`  ${fieldName}: ${types.join(" | ")};`);
        }
      }

      lines.push("}\n");
    }

    return lines.join("\n");
  }
}

type CollectionName = string;
type CollectionTypeName = string;
