import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 5;

export const getPagenatedCategoriesDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};
const ENDPOINT = "categories";
export const createcategoriesService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getAllcategories = () => {
  return getRequest(ENDPOINT);
};
export const deletecategoriesService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updatecategoriesService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
