import types from "./types";

const recieveAuth = auth => ({ type: types.AUTH_SUCCESS, auth });
const recieveAuthUser = user => ({ type: types.AUTH_USER_SUCCESS, user });
const removeAuthUser = () => ({ type: types.AUTH_FAILED });
const cleanState = () => ({ type: types.AUTH_CLEAN_STATE });

export { recieveAuthUser, removeAuthUser, recieveAuth, cleanState };
