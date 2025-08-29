import type { DirectusCollection, DirectusField } from "@directus/sdk";
import { readCollections, readFieldsByCollection } from "@directus/sdk";
import directus from "./directus";
import { Relations } from "./relations";
import { Schema, toTypescriptType } from "./schema";
import { toInterfaceName } from "./utils";

// const collections = new Set<string>();
// const schema = new Schema();
const relations = await Relations.init(directus);
relations.parse();

// const collectionResponse = await directus.request(readCollections());
// const promises = [] as Promise<any>[];

// for (const collection of collectionResponse as DirectusCollection[]) {
//   if (collection.collection.startsWith("directus_")) continue;
//   if (!collection.schema?.name) continue;
//   collections.add(collection.collection);
//   promises.push(
//     (async () => {
//       const collectionSchema = schema.getOrInitCollection(
//         collection.collection,
//       );
//       const fields = await directus.request(
//         readFieldsByCollection(collection.collection),
//       );

//       for (const field of fields as DirectusField[]) {
//         const schemaField = collectionSchema.getOrInitField(field.field);
//         field.schema?.is_nullable && schemaField.setType("null");
//         field.schema?.is_primary_key &&
//           collectionSchema.setPrimaryKey(field.field);

//         if (!field.schema?.data_type) {
//           const types = relations.resolveFieldTypes(
//             collection.collection,
//             field.field,
//           );
//           // if (types.length) {
//           //   const schemaField = collectionSchema.getOrInitField(field.field);
//           //   for (const t of types) schemaField.setType(t as any);
//           // }
//           console.log({
//             collection: collection.collection,
//             field: field.field,
//             types,
//           });
//         } else {
//           schemaField.setType(toTypescriptType(field.schema.data_type));
//         }
//       }
//     })(),
//   );
// }

// await Promise.all(promises);

// function generateTypesFromSchema(rel: Relations) {
//   for (const j of rel.m2a)
//     for (const c of j.allowedCollections) collections.add(c);

//   const lines: string[] = [];
//   lines.push("// Auto-generated. Do not edit manually.\n");
//   lines.push(`import type { DirectusUser } from "@directus/sdk"`);
//   lines.push("interface MySchema {");
//   for (const c of Array.from(collections).sort()) {
//     lines.push(`  ${c}: ${toInterfaceName(c)}[];`);
//   }
//   lines.push("}\n");
//   lines.push("type CustomUser = any;\n");

//   for (const j of rel.m2m) {
//     const iface = toInterfaceName(j.junction);
//     lines.push(`interface ${iface} {`);
//     lines.push("  id: number;");
//     lines.push(
//       `  ${j.aColumnInJunction}: string | ${toInterfaceName(j.aCollection)};`,
//     );
//     lines.push(
//       `  ${j.bColumnInJunction}: string | ${toInterfaceName(j.bCollection)};`,
//     );
//     lines.push("}\n");
//   }
//   for (const j of rel.m2a) {
//     const iface = toInterfaceName(j.junction);
//     lines.push(`interface ${iface} {`);
//     lines.push("  id: number;");
//     lines.push(
//       `  ${j.ownerColumnInJunction}: string | ${toInterfaceName(j.ownerCollection)};`,
//     );
//     lines.push(
//       `  ${j.discriminatorField}: ${j.allowedCollections.map((c) => `'${c}'`).join(" | ")};`,
//     );
//     lines.push(
//       `  ${j.polymorphicColumn}: string | ${j.allowedCollections
//         .map((c) => toInterfaceName(c))
//         .join(" | ")};`,
//     );
//     lines.push("}\n");
//   }

//   const junctionNames = new Set<string>([
//     ...rel.m2m.map((x) => x.junction),
//     ...rel.m2a.map((x) => x.junction),
//   ]);
//   for (const c of Array.from(collections).sort()) {
//     if (junctionNames.has(c)) continue; // skip junctions, already emitted
//     const iface = toInterfaceName(c);
//     lines.push(`interface ${iface} {`);
//     lines.push("  id: string;");
//     for (const r of rel.m2o.filter((x) => x.manyCollection === c)) {
//       lines.push(
//         `  ${r.manyField}: string | ${toInterfaceName(r.oneCollection)};`,
//       );
//     }
//     for (const r of rel.m2o.filter(
//       (x) => x.oneCollection === c && x.oneField,
//     )) {
//       lines.push(
//         `  ${r.oneField as string}: string[] | ${toInterfaceName(r.manyCollection)}[];`,
//       );
//     }
//     for (const j of rel.m2m) {
//       if (j.aCollection === c)
//         lines.push(
//           `  ${j.aField}: number[] | ${toInterfaceName(j.junction)}[];`,
//         );
//       if (j.bCollection === c)
//         lines.push(
//           `  ${j.bField}: number[] | ${toInterfaceName(j.junction)}[];`,
//         );
//     }
//     for (const j of rel.m2a) {
//       if (j.ownerCollection === c)
//         lines.push(
//           `  ${j.ownerField}: number[] | ${toInterfaceName(j.junction)}[];`,
//         );
//     }
//     lines.push("}\n");
//   }

//   return lines.join("\n");
// }

// apply relational fields with resolved types into schema, then generate
// relations.applyToSchema(schema);
// const ts = generateTypesFromSchema(relations);
// await Bun.write("types.generated.ts", ts);
