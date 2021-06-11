import {
    deleteRequest,
    getRequest,
    patchRequest,
    postRequest,
  } from "./request";
  export const pagesize = 50;
  
  const ENDPOINT = "product-data-search";

  export const getSearch = (id) => {
    return getRequest(
      `${ENDPOINT}?unitTypeId=${id}`
    );
  };
