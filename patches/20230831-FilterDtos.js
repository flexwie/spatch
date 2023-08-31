export default function filterDtos(swagger) {
  // filter out unwanted dtos
  let dtos = Object.keys(swagger.components.schemas).filter(
    (x) => !x.endsWith("Dto")
  );
  dtos = dtos.filter((x) => !x.startsWith("Backend"));

  const dtoDiff = dtos.map((dto) => ({
    op: "remove",
    path: `/components/schemas/${dto}`,
  }));

  return dtoDiff;
}
