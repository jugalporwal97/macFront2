import axios from "axios";
import { getToken } from "../Utils/Common";
const hostURL = "http://18.216.109.16:3232";

export const getRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    axios
      .get(generateURL(endpoint), { headers: { authorization: getToken() } })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
export const postRequest = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(generateURL(endpoint), params, {
        headers: { authorization: getToken() },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const deleteRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(generateURL(endpoint), {
        headers: { authorization: getToken() },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
export const patchRequest = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(generateURL(endpoint), params, {
        headers: { authorization: getToken() },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

const generateURL = (endpoint) => {
  return `${hostURL}/${endpoint}`;
};
