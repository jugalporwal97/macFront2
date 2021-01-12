import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";

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
