import { readFileSync, writeFileSync } from "node:fs";

type RelationsJson = Record<
  string,
  Record<
    string,
    {
      related_collection: string | null;
      schema: any;
      meta: {
        id: number;
        many_collection: string;
        many_field: string;
        one_collection: string | null;
        one_field: string | null;
        one_collection_field: string | null;
        one_allowed_collections: string[] | null;
        junction_field: string | null;
        sort_field: string | null;
        one_deselect_action: string | null;
      };
    }
  >
>;

type CollectionName = string;

interface M2O {
  kind: "m2o";
  manyCollection: CollectionName;
  manyField: string;
  oneCollection: CollectionName;
  oneField: string | null; // o2m field name if exists
}

interface M2M {
  kind: "m2m";
  junction: CollectionName;
  aCollection: CollectionName;
  aField: string; // field name on A (exposed on A via one_field)
  bCollection: CollectionName;
  bField: string; // field name on B (exposed on B via one_field)
  aColumnInJunction: string;
  bColumnInJunction: string;
}

interface M2A {
  kind: "m2a";
  junction: CollectionName;
  ownerCollection: CollectionName; // the concrete side (exposed via one_field)
  ownerField: string; // field name on owner
  ownerColumnInJunction: string; // FK column in junction pointing to owner
  polymorphicColumn: string; // usually "item"
  discriminatorField: string; // usually "collection"
  allowedCollections: string[];
}

function loadRelations(path = "relations.json"): RelationsJson {
  return JSON.parse(readFileSync(path, "utf8"));
}

function detectM2O(relations: RelationsJson): M2O[] {
  const out: M2O[] = [];
  for (const [manyCollection, fields] of Object.entries(relations)) {
    for (const rel of Object.values(fields)) {
      if (rel.related_collection && rel.meta.junction_field === null) {
        out.push({
          kind: "m2o",
          manyCollection,
          manyField: rel.meta.many_field,
          oneCollection: rel.related_collection,
          oneField: rel.meta.one_field,
        });
      }
    }
  }
  return out;
}

function detectM2M(relations: RelationsJson): M2M[] {
  const out: M2M[] = [];
  for (const [junction, fields] of Object.entries(relations)) {
    // A junction has exactly two concrete sides with junction_field set on both
    const concreteSides = Object.values(fields).filter(
      (r) => r.related_collection && r.meta.junction_field,
    );
    if (concreteSides.length === 2) {
      const a = concreteSides[0];
      const b = concreteSides[1];
      if (!a || !b) continue;
      if (!a.meta || !b.meta) continue;
      if (!a.related_collection || !b.related_collection) continue;
      if (!a.meta.one_field || !b.meta.one_field) continue;
      out.push({
        kind: "m2m",
        junction,
        aCollection: a.related_collection,
        aField: a.meta.one_field,
        bCollection: b.related_collection,
        bField: b.meta.one_field,
        aColumnInJunction: a.meta.many_field,
        bColumnInJunction: b.meta.many_field,
      });
    }
  }
  return out;
}

function detectM2A(relations: RelationsJson): M2A[] {
  const out: M2A[] = [];
  for (const [junction, fields] of Object.entries(relations)) {
    const polymorphic = Object.values(fields).find(
      (r) => r.related_collection === null && r.meta.one_collection_field,
    );
    if (!polymorphic) continue;
    const concrete = Object.values(fields).find(
      (r) =>
        r.related_collection &&
        r.meta.one_field &&
        r.meta.junction_field === polymorphic.meta.many_field,
    );
    if (
      concrete &&
      polymorphic.meta.one_collection_field &&
      polymorphic.meta.one_allowed_collections &&
      concrete.related_collection &&
      concrete.meta.one_field
    ) {
      out.push({
        kind: "m2a",
        junction,
        ownerCollection: concrete.related_collection,
        ownerField: concrete.meta.one_field,
        ownerColumnInJunction: concrete.meta.many_field,
        polymorphicColumn: polymorphic.meta.many_field,
        discriminatorField: polymorphic.meta.one_collection_field,
        allowedCollections: polymorphic.meta.one_allowed_collections,
      });
    }
  }
  return out;
}

function generateTypes(relations: RelationsJson) {
  const collections = new Set(Object.keys(relations));
  // Collect names referenced as concrete one_collection targets as well
  for (const fields of Object.values(relations)) {
    for (const r of Object.values(fields)) {
      if (r.related_collection) collections.add(r.related_collection);
    }
  }

  const m2o = detectM2O(relations);
  const m2m = detectM2M(relations);
  const m2a = detectM2A(relations);

  const lines: string[] = [];
  lines.push("// Auto-generated. Do not edit manually.\n");

  // MySchema header
  lines.push("interface MySchema {");
  for (const c of Array.from(collections).sort()) {
    // heuristic: treat as array (regular); singleton detection is not available here
    lines.push(`  ${c}: ${toInterfaceName(c)}[];`);
  }
  // add junction collections for m2m and m2a explicitly (already included above, but keep examples clear)
  for (const j of m2m) {
    lines.push(
      `  ${j.junction}: ${toInterfaceName(j.junction)}[]; // m2m junction`,
    );
  }
  for (const j of m2a) {
    lines.push(
      `  ${j.junction}: ${toInterfaceName(j.junction)}[]; // m2a junction`,
    );
  }
  lines.push("}\n");

  // Emit placeholder custom user to match user's example
  lines.push("type CustomUser = any;\n");

  // Emit junction interfaces for m2m
  for (const j of m2m) {
    const iface = toInterfaceName(j.junction);
    lines.push(`interface ${iface} {`);
    lines.push("  id: number;");
    lines.push(
      `  ${j.aColumnInJunction}: string | ${toInterfaceName(j.aCollection)};`,
    );
    lines.push(
      `  ${j.bColumnInJunction}: string | ${toInterfaceName(j.bCollection)};`,
    );
    lines.push("}\n");
  }

  // Emit junction interfaces for m2a
  for (const j of m2a) {
    const iface = toInterfaceName(j.junction);
    lines.push(`interface ${iface} {`);
    lines.push("  id: number;");
    lines.push(
      `  ${j.ownerColumnInJunction}: string | ${toInterfaceName(j.ownerCollection)};`,
    );
    lines.push(
      `  ${j.discriminatorField}: ${j.allowedCollections.map((c) => `'${c}'`).join(" | ")};`,
    );
    lines.push(
      `  ${j.polymorphicColumn}: string | ${j.allowedCollections
        .map((c) => toInterfaceName(c))
        .join(" | ")};`,
    );
    lines.push("}\n");
  }

  // Emit collection interfaces with relation fields
  for (const c of Array.from(collections).sort()) {
    const iface = toInterfaceName(c);
    lines.push(`interface ${iface} {`);
    lines.push("  id: string;");
    // m2o fields where this collection is the many side
    for (const rel of m2o.filter((r) => r.manyCollection === c)) {
      lines.push(
        `  ${rel.manyField}: string | ${toInterfaceName(rel.oneCollection)};`,
      );
    }
    // o2m fields where this collection is the one side
    for (const rel of m2o.filter((r) => r.oneCollection === c && r.oneField)) {
      lines.push(
        `  ${rel.oneField!}: string[] | ${toInterfaceName(rel.manyCollection)}[];`,
      );
    }
    // m2m: arrays of junction on both concrete collections
    for (const j of m2m) {
      if (j.aCollection === c) {
        lines.push(
          `  ${j.aField}: number[] | ${toInterfaceName(j.junction)}[];`,
        );
      }
      if (j.bCollection === c) {
        lines.push(
          `  ${j.bField}: number[] | ${toInterfaceName(j.junction)}[];`,
        );
      }
    }
    // m2a: arrays of junction on owner collection
    for (const j of m2a) {
      if (j.ownerCollection === c) {
        lines.push(
          `  ${j.ownerField}: number[] | ${toInterfaceName(j.junction)}[];`,
        );
      }
    }
    lines.push("}\n");
  }

  writeFileSync("types.generated.ts", lines.join("\n"));
}

function toInterfaceName(collection: string) {
  return collection
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

const relations = loadRelations();
generateTypes(relations);
