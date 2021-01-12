import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "categories";
  export const createcategoriesService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllcategories = () => {
    return getRequest(ENDPOINT);
  };
  export const deletecategoriesService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updatecategoriesService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  