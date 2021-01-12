import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "inspectors";
  export const createInspectorService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllInspector = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteInspectorService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateInspectorService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  