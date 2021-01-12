import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";

const ENDPOINT = "users";
export const createUserService = (params) => {
  const body = { ...params };
  return postRequest(ENDPOINT, body);
};

export const showUserService = () => {
  return getRequest(ENDPOINT);
};

export const deleteUserService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateuserService = (id, value) => {
  
  return patchRequest(`${ENDPOINT}/${id}`, value);
};
