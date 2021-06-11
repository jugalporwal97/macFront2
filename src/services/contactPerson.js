import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 50;

export const getPagenatedContactPersonDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

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
