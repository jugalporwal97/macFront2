import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "schemes";
  export const createSchemesService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllSchemes = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteSchemesService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateSchemesService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  