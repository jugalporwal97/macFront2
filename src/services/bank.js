import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "banks";
  export const createBankService = (params) => {
    return postRequest(ENDPOINT, params);
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
  