import camelcaseKeys from "camelcase-keys";
import { authSelectors } from "ducks";

const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "none",
};

function makeRequest(path, method = "get", params, options = { header: {} }) {
  const auth = authSelectors.getCookieAuth();
  if (!options.noAuth) HEADERS.Authorization = auth.sessionId;
  const mergedHeader = { ...HEADERS, ...options.header };
  const headers = new Headers(Object.entries(mergedHeader));
  const fetchOptions = {
    method,
    headers,
    body: JSON.stringify(params),
    ...options,
  };
  if (method === "get") delete fetchOptions["body"];
  let isOk = false;
  return fetch(path, fetchOptions)
    .then(response => {
      isOk = response.ok;
      return response.json();
    })
    .then(response => {
      if (!isOk) throw camelcaseKeys(response);
      return camelcaseKeys(response, { deep: true });
    })
    .catch(error => {
      throw error;
    });
}

function generateMethods() {
  const methods = ["get", "post", "put", "patch", "delete"];
  let result = {};
  methods.forEach(item => {
    result = {
      ...result,
      [item]: (path, params = {}, options = {}) => {
        return makeRequest(path, item, params, options);
      },
    };
  });
  return result;
}
export default generateMethods();
