import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./request";
export const pagesize = 5;

export const getPagenatedInspectorDataServise = (pagenumber = 0) => {
  return getRequest(
    `${ENDPOINT}?$limit=${pagesize}&$skip=${pagenumber * pagesize}`
  );
};

const ENDPOINT = "inspectors";
export const createInspectorService = (params) => {
  return postRequest(ENDPOINT, params);
};

export const getAllInspector = () => {
  return getRequest(ENDPOINT);
};
export const deleteInspectorService = (id) => {
  return deleteRequest(`${ENDPOINT}/${id}`);
};

export const updateInspectorService = (id, value) => {
  const body = { name: value };
  return patchRequest(`${ENDPOINT}/${id}`, body);
};
