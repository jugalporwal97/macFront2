import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 50;

const ENDPOINT = "banks";
export const createBankService = (params) => {
  return postRequest(ENDPOINT, params);
};
export const getPagenatedBankDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

export const getAllBank = () => {
  return getRequest(ENDPOINT);
};
export const deleteBankService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateBankService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
