export type PatchOperation =
  | {
      op: "add" | "replace" | "test";
      path: string;
      value: any;
    }
  | {
      op: "remove";
      path: string;
    }
  | { op: "copy" | "move"; from: string; path: string };
