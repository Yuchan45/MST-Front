import axios from 'axios';
import formsMapper from '@/mappers/forms.mapper';
import fieldsByFileMapper from '@/mappers/fields-by-file.mapper';
import rulesMapper from '@/mappers/rules.mapper';
import addRulesMapper from '@/mappers/addRules.mapper';
import updateRulesMapper from '@/mappers/update-rules.mapper';

console.log('ENV Full: ', process.env);
let baseURL = process.env.VUE_APP_BACK_URL;

const instance = () => {
  const axiosInstance = axios.create({
    baseURL,
  });
  return axiosInstance;
};

export const getForms = async () => {
  const { data } = await instance().get('/files/find/all');
  return formsMapper.toFront(data);
};

export const getContracts = async () => {
  const { data } = await instance().get('/contracts/find/all');
  return formsMapper.toFront(data);
};

export const getFieldsByFile = async (id) => {
  const { data } = await instance().get(`/files/${id}/fields`);
  return fieldsByFileMapper.toFront(data);
};
export const getRules = async () => {
  const { data } = await instance().get('/rules/find/all');
  return rulesMapper.toFront(data);
};

export const createRule = async (payload) => {
  let body = addRulesMapper.toApi(payload);
  const { data } = await instance().post('/rules/create', body);
  return data;
};

export const updateRule = async (ruleId, payload) => {
  const response = await instance().put(
    `/rules/update/${ruleId}`,
    updateRulesMapper.toApi(payload)
  );
  return response;
};

export const deleteRuleById = async (ruleId) => {
  const response = await instance().delete(`/rules/delete/${ruleId}`);
  return response;
};
