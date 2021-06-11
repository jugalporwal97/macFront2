import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 50;

export const getPagenatedMarketingPDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

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
