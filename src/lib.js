import axios from "axios";
import chalk from "chalk";
import { apply_patch } from "jsonpatch";

export const fetchSwagger = async () => {
  const response = await axios.get(
    "https://api.dyce.cloud/swagger/v1/swagger.json"
  );

  return response.data;
};

export const applyPatch = (input, fn, filename = "") => {
  console.log(chalk.bgBlue.white("", "applying", filename, "\n"));
  try {
    const diff = fn(input);
    calculateDiffChanges(diff);
    const result = apply_patch(input, diff);
    console.log(chalk.green(" ✅ applied patch\n"));
    return result;
  } catch (error) {
    console.error(chalk.bgRed.white("unable to apply patch", error));
    process.exit(1);
  }
};

const calculateDiffChanges = (diff) => {
  const add = diff.filter((d) => d.op.toLowerCase() == "add").length;
  const remove = diff.filter((d) => d.op.toLowerCase() == "remove").length;
  const replace = diff.filter((d) => d.op.toLowerCase() == "replace").length;

  console.log(chalk.green(" ", "++"), add, "to add");
  console.log(chalk.red(" ", "--"), remove, "to remove");
  console.log(chalk.yellow(" ", "~~"), replace, "to replace");
  console.log("");
};
