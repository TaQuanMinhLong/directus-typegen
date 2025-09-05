import { test } from "bun:test";
import { createItems, deleteItems } from "@directus/sdk";
import directus from "~/directus";
import permissions from "../tmp/permissions.json";

test("main", async () => {
  // const oldResult = await directus.request(
  //   readItems("permission", {
  //     fields: ["name", { resource: ["name"] }, "action", "description"],
  //   }),
  // );
  // const oldPermissions = oldResult.map((r) => ({
  //   name: r.name,
  //   resource: r.resource?.name,
  //   action: r.action,
  //   description: r.description,
  // }));
  // await Bun.write(
  //   "oldPermissions.json",
  //   JSON.stringify(oldPermissions, null, 2),
  // );
  await directus.request(deleteItems("permissions", { filter: {} }));
  const result = await directus.request(
    createItems("permissions", permissions),
  );
  console.log(result);
});
