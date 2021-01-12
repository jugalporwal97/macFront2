import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "branches";
  export const createBranchesService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllBranches = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteBranchesService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateBranchesService = (id, value) => {
 
    return patchRequest(`${ENDPOINT}/${id}`, value);
  };
  