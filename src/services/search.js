import {

    getRequest,
  
  } from "./request";

  const ENDPOINT = "product-data-search";

  export const getSearch = (id) => {
    return getRequest(
      `${ENDPOINT}?unitTypeId=${id}`
    );
  };
