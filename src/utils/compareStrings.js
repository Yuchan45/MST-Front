import { deburr } from 'lodash';

export const compareStrings = (string1, string2) =>
  deburr(string1?.toString().toLowerCase().trim()).includes(
    deburr(string2.toLowerCase().trim())
  );
