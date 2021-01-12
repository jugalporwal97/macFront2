import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "products";
  export const createproductsService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllproducts = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteproductsService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateproductsService = (id, value) => {
    const body = { name: value };
    return patchRequest(`${ENDPOINT}/${id}`, body);
  };
  