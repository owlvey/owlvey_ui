import request from "helper/request";
import { entityActions } from "ducks";

const addKey = () => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request.post(`${apiUrl}/keys`).then(keyAdded => {
      dispatch(entityActions.addCollection("key", [keyAdded]));
      return keyAdded;
    });
  };
};

const getKeysByCurrentUser = () => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("key"));
    return request
      .get(`${apiUrl}/keys`)
      .then(keys => {
        dispatch(entityActions.addCollection("key", keys));
        dispatch(entityActions.getColletionSuccess("key"));
        return keys;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("key", error.message));
        throw error;
      });
  };
};

export { addKey, getKeysByCurrentUser };
