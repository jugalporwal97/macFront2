import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "unit-types";
  export const createunitTypesService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllunitTypes = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteunitTypesService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateunitTypesService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  