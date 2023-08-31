import { writeFile } from "fs/promises";
import { applyPatch, fetchSwagger } from "./lib";
import { glob } from "glob";
import { Command } from "commander";
import * as path from "path";

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
    const patches = await glob(`${options.patches}/*.js`);
    const swagger = await fetchSwagger();

    const final = patches.reduce((current, patch) => {
      const file = require("../" + patch);
      return applyPatch(
        current,
        file.default,
        patch.split("/").at(-1).split(".")[0]
      );
    }, swagger);

    await writeFile(options.output, JSON.stringify(final));

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
    var dateDisplay = new Date(
      Date.now() - new Date().getTimezoneOffset() * 1000 * 60
    )
      .toJSON()
      .slice(0, 10)
      .replaceAll("-", "");
    const filename = `${dateDisplay}-${name}.js`;
    const content = `export default function ${name}(swagger) {
  // apply your changes
  return swagger;  
}`;

    await writeFile(path.join(options.patches, filename), content);

    console.log(`new patch written to ${filename}`);
  });

program.parse();
