import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 50;

export const getPagenatedSchemesDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

const ENDPOINT = "schemes";
export const createSchemesService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getAllSchemes = () => {
  return getRequest(ENDPOINT);
};
export const deleteSchemesService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateSchemesService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
