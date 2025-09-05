import type { DirectusCollection, DirectusField } from "@directus/sdk";
import { readCollections, readFieldsByCollection } from "@directus/sdk";
import type { Directus } from "../directus";
import type { TypescriptFieldType } from "./utils";
import { DEFAULT_TYPES, toInterfaceName, toTypescriptType } from "./utils";

export class Field {
  name: string;
  types = new Set<string>();

  constructor(name: string) {
    this.name = name;
  }

  addTypes(...types: TypescriptFieldType[]) {
    for (const type of types) this.types.add(type);
    return this;
  }

  removeTypes(...types: TypescriptFieldType[]) {
    for (const type of types) this.types.delete(type);
    return this;
  }
}

export class Collection {
  name: string;
  primaryKey: string | undefined;
  singleton = false;
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

  /**
   * The type of the primary key.
   */
  get pkType() {
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
    return special.includes("m2a") || special.includes("m2m") || special.includes("o2m");
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
    // const debugFields = [] as any[];

    for (const collection of collectionResponse as DirectusCollection[]) {
      if (collection.collection.startsWith("directus_")) continue;
      if (!collection.schema?.name) continue;
      schema.collections.set(collection.collection, toInterfaceName(collection.collection));
      promises.push(
        (async () => {
          const collectionSchema = schema.getOrInitCollection(collection.collection);
          if (collection.meta.singleton) collectionSchema.singleton = true;
          const fields = await directus.request(readFieldsByCollection(collection.collection));
          // debugFields.push(...fields);
          for (const field of fields as DirectusField[]) {
            const schemaField = collectionSchema.getOrInitField(field.field);
            field.schema?.is_primary_key && collectionSchema.setPrimaryKey(field.field);

            if (!field.schema?.data_type) {
              if (Schema.isRelationalAlias(field.meta.special)) {
                schema.getOrInitCollection(collection.collection).getOrInitField(field.field);
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
    // await Bun.write("fields.json", JSON.stringify(debugFields, null, 2));
    // await Bun.write("debugAlias.json", JSON.stringify(debugAlias, null, 2));
    // const possibleSpecials = Array.from(debugSpecial).map((s) => s.split("|"));
    // console.log(possibleSpecials);
    // console.log(schema.aliases);
    return schema;
  }

  generate(options: Omit<SchemaGenerateOptions, "outFile" | "enableTimer">) {
    const {
      schemaName = "DatabaseSchema",
      export: _export = true,
      directusSdkImports = [],
    } = options;
    const lines: string[] = [];
    lines.push("// Auto-generated. Do not edit manually.\n");

    directusSdkImports.length > 0 &&
      lines.push(`import type { ${directusSdkImports.join(", ")} } from "@directus/sdk";\n`);

    for (const { name, type } of DEFAULT_TYPES) {
      lines.push(`${_export ? "export " : ""}type ${name} = ${type};\n`);
    }

    // DatabaseSchema interface
    lines.push(`${_export ? "export " : ""}interface ${schemaName} {`);
    for (const [collectionName, typeName] of this.collections) {
      lines.push(
        `  ${collectionName}: ${typeName}${this.schema[collectionName]?.singleton ? "" : "[]"};`,
      );
    }
    lines.push("}\n");

    // Generate interfaces for each collection in the schema
    for (const [collectionName, typeName] of this.collections) {
      const collection = this.schema[collectionName];
      if (!collection) continue;

      lines.push(`${_export ? "export " : ""}interface ${typeName} {`);

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

export type SchemaGenerateOptions = {
  /**
   * The name of the schema interface.
   *
   * @default "DatabaseSchema"
   */
  schemaName?: string;
  /**
   * Whether to export the schema interface.
   *
   * @default true
   */
  export?: boolean;
  /**
   * The Directus SDK imports to include in the generated types.
   *
   * @default []
   */
  directusSdkImports?: string[];
  /**
   * The file to write the generated types to.
   *
   * @default "${process.cwd()}/types.generated.ts"
   */
  outFile?: string;
  /**
   * Whether to enable the timer.
   *
   * @default true
   */
  enableTimer?: boolean;
};
