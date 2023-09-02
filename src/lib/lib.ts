import axios from "axios";
import chalk from "chalk";
import { apply_patch } from "jsonpatch";
import * as babel from "@babel/core";
import { readFile } from "fs/promises";
import { PatchOperation } from "./jsonpatch.js";
import { OpenAPISchema } from "./openapi.js";

export const fetchSwagger = async (url: string): Promise<OpenAPISchema> => {
  if (url.startsWith("file://")) {
    const content = await readFile(url.substring(7));
    return JSON.parse(content.toString());
  }

  const response = await axios.get(
    "https://api.dyce.cloud/swagger/v1/swagger.json"
  );

  return response.data;
};

export const applyPatch = (
  input: OpenAPISchema,
  fn: (input: OpenAPISchema) => PatchOperation[],
  filename = ""
) => {
  console.log(chalk.bgBlue.white("", "applying", filename, "\n"));
  try {
    let diff = fn(input);

    if (!Array.isArray(diff)) {
      diff = [diff];
    }

    calculateDiffChanges(diff);

    const result = apply_patch(input, diff);
    console.log(chalk.green(" ✅ applied patch\n"));
    return result;
  } catch (error) {
    console.error(chalk.bgRed.white("unable to apply patch", error));
    process.exit(1);
  }
};

const calculateDiffChanges = (diff: PatchOperation[]) => {
  const add = diff.filter((d) => d.op.toLowerCase() == "add").length;
  const remove = diff.filter((d) => d.op.toLowerCase() == "remove").length;
  const replace = diff.filter((d) => d.op.toLowerCase() == "replace").length;

  console.log(chalk.green(" ", "++"), add, "to add");
  console.log(chalk.red(" ", "--"), remove, "to remove");
  console.log(chalk.yellow(" ", "~~"), replace, "to replace");
  console.log("");
};

export const loadPatch = async (filename: string) => {
  const content = await readFile(filename);
  var { code } = await babel.transformAsync(content.toString(), {
    presets: ["@babel/preset-typescript"],
    filename: "patch.ts",
    comments: false,
  });

  return await import(`data:text/javascript,${code}`);
};
