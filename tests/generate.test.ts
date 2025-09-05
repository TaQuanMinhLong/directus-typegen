import { expect, test } from "bun:test";
import typescript from "typescript";
import generate from "~/typegen";

test("generate", async () => {
  const outFile = await generate({
    directusSdkImports: ["DirectusFile", "DirectusRole", "DirectusUser"],
  });
  expect(outFile).toBe(`${process.cwd()}/types.generated.ts`);
  const program = typescript.createProgram([outFile], {
    noEmit: true,
    strict: true,
  });
  const diagnostics = typescript.getPreEmitDiagnostics(program);
  expect(diagnostics.length).toBe(0);
  await Bun.file(outFile).unlink();
});
