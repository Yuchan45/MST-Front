const toApi = (data) => {
  let ruleType = data.type.value;
  let ruleValue = data.value?.label || null;
  if (ruleType === 'empty') {
    ruleType = data.value.ruleType;
    ruleValue = null;
  }
  const formattedObject = data.fields.map((item) => ({
    versionId: item.form.versionId,
    ids: item.fields.map((field) => field.id),
  }));

  let result = {
    ...data,
    type: ruleType,
    value: ruleValue,
    fields: formattedObject,
  };
  return result;
};

export default { toApi };
