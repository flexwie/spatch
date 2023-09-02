import { writeFile } from "fs/promises";
import { applyPatch, fetchSwagger, loadPatch } from "./lib.js";
import { glob } from "glob";
import { Command } from "commander";
import * as path from "path";
import { DateTime } from "luxon";
import { spawn } from "child_process";

export const program = new Command();
program
  .name("spatch")
  .description("patch swagger files with migration like patches")
  .version("1.0.7");

program
  .command("patch")
  .description("apply the patch files to an api")
  .option(
    "-i, --input <string>",
    "where to fetch the swagger file from",
    "file://" + path.join(process.env.PWD, "swagger.json")
  )
  .option(
    "-p, --patches <string>",
    "where to store/read the patch files from",
    path.join(process.env.PWD, "patches")
  )
  .option(
    "-o, --output <string>",
    "where to write the output to",
    "swagger.json"
  )
  .action(async (options) => {
    const patches = (await glob(`${options.patches}/*.ts`)).reverse();
    const swagger = await fetchSwagger(options.input);

    let modResult = swagger;

    for (var patch of patches) {
      const file = await loadPatch(patch);
      modResult = applyPatch(
        modResult,
        file.default,
        patch.split("/").at(-1).split(".")[0]
      );
    }

    await writeFile(options.output, JSON.stringify(modResult));

    console.log("new swagger file written to", options.output);
  });

program
  .command("add")
  .description("add a new patch")
  .argument("<name>", "name of the patch")
  .option(
    "-p, --patches <string>",
    "where to store/read the patch files from",
    path.join(process.env.PWD, "patches")
  )
  .action(async (name, options) => {
    var dateDisplay = DateTime.now().toFormat("yyyyLLddHHmm");
    const filename = `${dateDisplay}-${name}.ts`;
    const content = `import { PatchOperation, OpenAPISchema } from "@flexwie/spatch";

export default function ${name}(swagger: OpenAPISchema): PatchOperation[] {
  // apply your changes
  return [];  
}`;

    const filepath = path.join(options.patches, filename);
    await writeFile(filepath, content);

    const editor = await spawn(process.env.EDITOR, [filepath], {
      stdio: "inherit",
    });
    editor.on("exit", () => {
      console.log(`new patch written to ${filepath}`);
    });
  });
