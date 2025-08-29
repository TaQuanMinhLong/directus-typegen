export class Field {
  name: string;
  types = new Set<string>();

  constructor(name: string) {
    this.name = name;
  }

  setType(type: TypescriptFieldType) {
    this.types.add(type);
  }
}

export class Collection {
  name: string;
  primaryKey: string | undefined;
  _primaryKeyType: TypescriptFieldType | null = null;
  fields = new Map<string, Field>();

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

  hasField(name: string) {
    return this.fields.has(name);
  }

  get primaryKeyType() {
    if (this._primaryKeyType) return this._primaryKeyType;
    if (!this.primaryKey) return null;
    const field = this.getOrInitField(this.primaryKey);
    this._primaryKeyType = field.types.values().next().value ?? null;
    return this._primaryKeyType;
  }
}

export class Schema {
  schema = {} as Record<string, Collection>;

  getOrInitCollection(name: string) {
    this.schema[name] ??= new Collection(name);
    return this.schema[name];
  }
}

export type DatabaseFieldType =
  | "integer"
  | "json"
  | "uuid"
  | "timestamp with time zone"
  | "character varying"
  | "bigint"
  | "text"
  | "date"
  | "real"
  | "boolean"
  | "numeric"
  | "timestamp without time zone";

export function toTypescriptType(fieldType: DatabaseFieldType | (string & {})) {
  switch (fieldType) {
    case "uuid":
    case "character varying":
    case "text":
    case "numeric":
      return "string";
    case "integer":
    case "bigint":
    case "real":
      return "number";
    case "json":
      return "Record<string, any>";
    case "timestamp with time zone":
    case "timestamp without time zone":
      return "'datetime'";
    case "boolean":
      return "boolean";
    case "date":
      return "Date";
    default:
      console.warn(`Unknown field type: ${fieldType}`);
      return "any";
  }
}

export type TypescriptFieldType =
  | ReturnType<typeof toTypescriptType>
  | "null"
  | (string & {});
