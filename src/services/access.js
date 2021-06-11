import { deleteRequest, getRequest, postRequest } from "./request";

export const pagesize = 50;

export const getPagenatedaccessDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};
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
