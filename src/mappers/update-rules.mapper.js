const toApi = (data) => {
  let ruleType = data.ruleType.value;
  let ruleValue = data.ruleValue?.label || null;
  if (ruleType === 'empty') {
    ruleType = data.ruleValue.ruleType;
    ruleValue = null;
  }
  return {
    ruleName: data.ruleName,
    type: ruleType,
    ruleValue,
    addedContractsIds: data.addedCaseTypes.map((c) => c.id),
    deletedContractIds: data.deletedCaseTypes.map((c) => c.id),
    addedFields: data.addedFields.map((field) => ({
      version_id: field.versionId,
      field_id: field.fieldId,
    })),
    deletedFields: data.deletedFields.map((field) => ({
      version_id: field.versionId,
      field_id: field.fieldId,
    })),
  };
};

export default { toApi };
