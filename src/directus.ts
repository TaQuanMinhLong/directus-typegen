import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { DatabaseSchema } from "../types.generated";

if (!process.env.DIRECTUS_URL || !process.env.DIRECTUS_TOKEN) {
  throw new Error("DIRECTUS_URL and DIRECTUS_TOKEN must be set");
}

const directus = createDirectus<DatabaseSchema>(process.env.DIRECTUS_URL)
  .with(staticToken(process.env.DIRECTUS_TOKEN))
  .with(rest());

export type Directus = typeof directus;
export default directus;
