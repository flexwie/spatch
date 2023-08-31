import { writeFile } from "fs/promises";
import { applyPatch, fetchSwagger, loadPatch } from "./lib.js";
import { glob } from "glob";
import { Command } from "commander";
import * as path from "path";
import { createRequire } from "module";
import { DateTime } from "luxon";

const req = createRequire(import.meta.url);

const program = new Command();
program
  .name("spatch")
  .description("patch swagger files with migration like patches")
  .version("0.1.0");

program
  .command("patch")
  .description("apply the patch files to an api")
  .option(
    "-i, --input <string>",
    "where to fetch the swagger file from",
    "https://api.dyce.cloud/swagger/v1/swagger.json"
  )
  .option(
    "-p, --patches <string>",
    "where to store/read the patch files from",
    "patches"
  )
  .option(
    "-o, --output <string>",
    "where to write the output to",
    "swagger.json"
  )
  .action(async (options) => {
    const patches = (await glob(`${options.patches}/*.ts`)).reverse();
    const swagger = await fetchSwagger();

    let modResult = swagger;

    for (var patch of patches) {
      // const file = await import("../" + patch);
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
    "patches"
  )
  .action(async (name, options) => {
    var dateDisplay = DateTime.now().toFormat("yyyyLLddHHmm");
    const filename = `${dateDisplay}-${name}.js`;
    const content = `export default function ${name}(swagger) {
  // apply your changes
  return swagger;  
}`;

    await writeFile(path.join(options.patches, filename), content);

    console.log(`new patch written to ${filename}`);
  });

program.parse();
