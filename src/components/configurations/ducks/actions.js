import types from "./types";

const recieveAppConfApiUrl = apiUrl => ({
  type: types.RECEIVE_API_URL,
  apiUrl,
});

export { recieveAppConfApiUrl };
