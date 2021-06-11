import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 50;

export const getPagenatedProcessDonrByDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

const ENDPOINT = "process-done-by";
export const createProcessDoneByService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getAllProcessDoneBy = () => {
  return getRequest(ENDPOINT);
};
export const deleteProcessDoneByService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateProcessDoneByService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
