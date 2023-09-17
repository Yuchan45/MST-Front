const toFront = (data) => {
  return data.versionFields.map((field) => ({
    id: field.id,
    label: field.name,
  }));
};

export default { toFront };
