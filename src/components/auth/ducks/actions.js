import types from "./types";

const recieveAuth = auth => ({ type: types.AUTH_SUCCESS, auth });
const recieveAuthUser = user => ({ type: types.AUTH_USER_SUCCESS, user });
const removeAuthUser = () => ({ type: types.AUTH_FAILED });
const logoutAuth = () => ({ type: types.AUTH_LOGOUT });

export { recieveAuthUser, removeAuthUser, recieveAuth, logoutAuth };
