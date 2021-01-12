import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "marketing-persons";
  export const createMarketingPersonService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllMarketingPerson = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteMarketingPersonService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateMarketingPersonService = (id, value) => {

    return patchRequest(`${ENDPOINT}/${id}`, value);
  };
  