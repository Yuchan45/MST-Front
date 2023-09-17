const rows = [
  {
    id: 1,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Absolute',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
      { id: 3, label: 'Option 3' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [
          { id: 1, label: 'Option 1' },
          { id: 2, label: 'Option 2' },
          { id: 3, label: 'Option 3' },
          { id: 4, label: 'Option 4' },
          { id: 5, label: 'Option 5' },
        ],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: 'Mas de un día',
  },
  {
    id: 2,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Empty',
    caseType: [{ id: 1, label: 'Option 1' }],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: 'Empty',
  },
  {
    id: 3,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Absolute',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: 'Mas de un día',
  },
  {
    id: 4,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Empty',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: 'Filled',
  },
  {
    id: 5,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Relative',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: null,
  },
  {
    id: 6,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Absolute',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: 'Mas de un día',
  },
  {
    id: 7,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Relative',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: null,
  },
  {
    id: 8,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Absolute',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
    ],
    ruleValue: 'Mas de un día',
  },
  {
    id: 9,
    ruleName: 'Lorem Ipsum',
    ruleType: 'Absolute',
    caseType: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
      { id: 3, label: 'Option 3' },
    ],
    form: 'I-212',
    field: 'Detention time',
    selectedFields: [
      {
        form: { id: 1, label: 'Form 1' },
        fields: [{ id: 1, label: 'Option 1' }],
      },
      {
        form: { id: 2, label: 'Form 2' },
        fields: [
          { id: 1, label: 'Option 1' },
          { id: 2, label: 'Option 2' },
          { id: 3, label: 'Option 3' },
          { id: 4, label: 'Option 4' },
          { id: 5, label: 'Option 5' },
        ],
      },
    ],
    ruleValue: 'Mas de un día',
  },
];

export default rows;
