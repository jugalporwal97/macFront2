import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 10;

const ENDPOINT = "product-data";
export const createProductDataService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getPagenatedDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

export const getAllProductData = () => {
  return getRequest(ENDPOINT);
};
export const deleteProductDataService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateProductDataService = (id, value) => {
  return patchRequest(`${ENDPOINT}/${id}`, value);
};
