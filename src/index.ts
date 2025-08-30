import directus from "./directus";
import { Relations } from "./relations";
import type { SchemaGenerateOptions } from "./schema";
import { Schema } from "./schema";
import { Timer } from "./utils";

/**
 * Generate types from Directus schema.
 *
 * @param options - The options for generating types.
 * @returns The path to the generated types file.
 */
export default async function generateTypes({
  outFile,
  ...options
}: SchemaGenerateOptions) {
  const timer = new Timer();
  timer.start();
  const [schema, relations] = await Promise.all([
    Schema.init(directus),
    Relations.init(directus),
  ]);
  relations.parse().applyToSchema(schema);
  const ts = schema.generate(options);
  const outPath = outFile ?? `${process.cwd()}/types.generated.ts`;
  await Bun.write(outPath, ts);
  timer.end();
  return outPath;
}
