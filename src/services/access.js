import { deleteRequest, getRequest, postRequest } from "./request";

const ENDPOINT = "access-manager";
export const createUseraccessService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getAllUseraccessData = () => {
  return getRequest(ENDPOINT);
};
export const deleteUseraccessDataService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};
