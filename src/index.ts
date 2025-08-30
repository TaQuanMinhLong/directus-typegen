import directus from "./directus";
import { Relations } from "./relations";
import { Schema } from "./schema";
import { Timer } from "./utils";

async function main() {
  const timer = new Timer();
  timer.start();

  const [schema, relations] = await Promise.all([
    Schema.init(directus),
    Relations.init(directus),
  ]);
  relations.parse();
  relations.applyToSchema(schema);
  const ts = schema.generate();
  await Bun.write("types.generated.ts", ts);
  timer.end();
}

await main();
