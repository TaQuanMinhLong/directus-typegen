import generateTypes from "~/typegen";

await generateTypes({
  directusSdkImports: ["DirectusFile", "DirectusRole", "DirectusUser"],
});
