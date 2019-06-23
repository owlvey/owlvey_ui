import types from "./types";

const recieveAppConfApiUrl = apiUrl => ({
  type: types.RECEIVE_API_URL,
  apiUrl
});

const cleanState = () => ({
  type: types.CONFIGURATION_CLEAN_STATE
});

export { recieveAppConfApiUrl, cleanState };
