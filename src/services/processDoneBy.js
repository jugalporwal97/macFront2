import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "process-done-by";
  export const createProcessDoneByService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllProcessDoneBy = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteProcessDoneByService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateProcessDoneByService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  