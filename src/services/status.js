import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 50;

const ENDPOINT = "statuses";
export const createStatusService = (params) => {
  return postRequest(ENDPOINT, params);
};
export const getPagenatedStatusDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

export const getAllStatus = () => {
  return getRequest(ENDPOINT);
};
export const deleteStatusService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateStatusService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
