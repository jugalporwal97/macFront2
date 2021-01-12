import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "statuses";
  export const createStatusService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllStatus = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteStatusService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateStatusService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  