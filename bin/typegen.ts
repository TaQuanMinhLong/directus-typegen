import generate from "~/typegen";

await generate({
  directusSdkImports: ["DirectusFile", "DirectusRole", "DirectusUser"],
});
