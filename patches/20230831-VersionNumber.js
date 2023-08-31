export default function VersionNumber(swagger) {
  // add a version number to the info
  return { op: "add", path: "info/version", value: "1.0.0" };
}
