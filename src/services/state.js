import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";

export const pagesize = 5;

export const getPagenatedCityDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

const ENDPOINT = "cities";
export const createStateService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getAllStates = () => {
  return getRequest(ENDPOINT);
};
export const deleteStateService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateStateService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
