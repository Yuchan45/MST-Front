const toFront = (data) =>
  data.map((rule) => {
    const ruleTypes = {
      ['absolute/equals']: { type: 'Absolute', value: rule.value },
      ['relative/equals']: { type: 'Relative', value: null },
      ['relative/empty']: { type: 'Empty', value: 'Empty' },
      ['relative/filled']: { type: 'Empty', value: 'Filled' },
    };

    const ruleTypeOptions = ruleTypes[rule.type];

    return {
      id: rule.id,
      ruleName: rule.name,
      ruleType: ruleTypeOptions?.type,
      caseType: rule.contracts.map((c) => ({ id: c.id, label: c.name })),
      selectedFields: rule.fields.map((f) => ({
        form: {
          id: f.fileVersion.versionId,
          label: f.fileVersion.name,
          versionId: f.fileVersion.versionId,
        },
        fields: f.fields.map((field) => ({ id: field.id, label: field.name })),
      })),
      ruleValue: ruleTypeOptions?.value,
    };
  });

export default { toFront };
