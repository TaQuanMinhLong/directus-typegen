import { createDirectus, rest, staticToken } from "@directus/sdk";

if (!process.env.DIRECTUS_URL || !process.env.DIRECTUS_TOKEN) {
  throw new Error("DIRECTUS_URL and DIRECTUS_TOKEN must be set");
}

const directus = createDirectus(process.env.DIRECTUS_URL)
  .with(staticToken(process.env.DIRECTUS_TOKEN))
  .with(rest());

export type Directus = typeof directus;
export default directus;
