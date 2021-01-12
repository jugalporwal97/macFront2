import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  
  const ENDPOINT = "contact-persons";
  export const createContactPersonService = (params) => {
    return postRequest(ENDPOINT, params);
  };
  
  export const getAllContactPerson = () => {
    return getRequest(ENDPOINT);
  };
  export const deleteContactPersonService = (id) => {
    return deleteRequest(`${ENDPOINT}/${id}`);
  };
  
  export const updateContactPersonService = (id, value) => {

    return patchRequest(`${ENDPOINT}/${id}`, value);
  };
  