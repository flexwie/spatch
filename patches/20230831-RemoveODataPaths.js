export default function RemoveODataPaths(swagger) {
  // remove all paths that only end with $count
  const paths = Object.keys(swagger.paths).filter((x) => x.endsWith("$count"));

  const pathDiff = paths.map((dto) => ({
    op: "remove",
    path: `/paths/${dto.replaceAll("/", "~1")}`,
  }));

  return pathDiff;
}
