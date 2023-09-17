const toFront = (data) =>
  data.map((c) => ({
    id: c.id,
    label: c.name,
    versionId: c.fileVersion,
  }));
export default { toFront };
