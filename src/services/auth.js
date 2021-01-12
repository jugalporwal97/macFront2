const { postRequest } = require("./request");

const ENDPOINT = "authentication";

export const authenticateUserService = (params) => {
  const body = { ...params, strategy: "local" };
  return postRequest(ENDPOINT, body);
};
