import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";

const ENDPOINT = "product-data";
export const createProductDataService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getAllProductData = () => {
  return getRequest(ENDPOINT);
};
export const deleteProductDataService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateProductDataService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
