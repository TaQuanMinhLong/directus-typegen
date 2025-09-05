const DIRECTUS_COLLECTIONS = {
  directus_files: "DirectusFile",
  directus_users: "DirectusUser",
  directus_roles: "DirectusRole",
} as Record<string, string>;

export const DEFAULT_TYPES = [
  {
    name: "DateString",
    type: "Date | string",
  },
] as const;

const InterfaceCache = new Map<string, string>();

export function toInterfaceName(collection: string) {
  if (InterfaceCache.has(collection)) return InterfaceCache.get(collection)!;
  const name =
    DIRECTUS_COLLECTIONS[collection] ??
    collection
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean)
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("");
  InterfaceCache.set(collection, name);
  return name;
}

export const quoted = (v: string) => `"${v}"`;

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

export function toTypescriptType(fieldType: DatabaseFieldType | (string & {}), defaultAny = false) {
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
    case "jsonb":
      return "Record<string, any>";
    case "timestamp with time zone":
    case "timestamp without time zone":
      return "'datetime'";
    case "boolean":
      return "boolean";
    case "date":
      return "DateString";
    default:
      if (defaultAny) {
        console.warn(`Unknown field type: ${fieldType}`);
        return "any";
      }
      return fieldType;
  }
}

type DefinedTypescriptFieldType = ReturnType<typeof toTypescriptType> | "null";

type ArrayTypescriptFieldType = `${DefinedTypescriptFieldType}[]`;

export type TypescriptFieldType =
  | DefinedTypescriptFieldType
  | ArrayTypescriptFieldType
  | (string & {});

export class Timer {
  enabled: boolean;
  private startTime: [number, number] | null = null;

  constructor(enabled?: boolean) {
    this.enabled = enabled ?? process.env.NODE_ENV !== "test";
  }

  start(): void {
    if (!this.enabled) return;
    this.startTime = process.hrtime();
  }

  end(): void {
    if (!this.enabled) return;
    if (!this.startTime) {
      throw new Error("Timer was not started. Call start() before end().");
    }

    const end = process.hrtime(this.startTime);
    const totalMs = end[0] * 1000 + end[1] / 1000000;

    // Display in milliseconds if less than 1 second, otherwise in seconds
    // We don't need to log in test environment
    // as test already log the time
    if (totalMs < 1000) {
      console.log(`✅️ Generated types in ${totalMs.toFixed(2)}ms`);
    } else {
      console.log(`✅️ Generated types in ${(totalMs / 1000).toFixed(2)}s`);
    }
    this.startTime = null;
  }
}
