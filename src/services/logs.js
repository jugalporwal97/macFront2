import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "login-history";
  export const createlogsService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAlllogs = () => {
    return getRequest(ENDPOINT);
  };
  export const deletelogsService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updatelogsService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  