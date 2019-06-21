import request from "helper/request";
import { entityActions } from "ducks";
import { without } from "lodash";

const getUserMembersByCustomer = customerId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("user"));
    return request
      .get(`${apiUrl}/customers/${customerId}/users`)
      .then(usersCustomer => {
        const userList = usersCustomer.map(
          ({ userId, name, avatar, username }) => ({
            userId,
            name,
            avatar,
            username,
          }),
        );
        dispatch(
          entityActions.addCollection("user", userList, {
            parentCollectionName: "customer",
            parentId: customerId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("user"));
        return usersCustomer;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("user", error.message));
        throw error;
      });
  };
};

const addUserMember = (customerId, user) => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request
      .post(`${apiUrl}/customers/${customerId}/users`, { user_id: user.userId })
      .then(result => {
        let customer = { ...getState().entity["customer"][customerId] };
        const userIds = [...customer.users, user.userId];
        customer.users = userIds;
        dispatch(entityActions.addCollection("user", [user]));
        dispatch(entityActions.updateEntity("customer", customer, customerId));
        return result;
      });
  };
};
//
const removeUserMember = (customerId, userId) => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request
      .delete(`${apiUrl}/customers/${customerId}/users/${userId}`)
      .then(result => {
        let customer = { ...getState().entity["customer"][customerId] };
        const userIds = without(customer.users, userId);
        customer.users = userIds;
        dispatch(entityActions.updateEntity("customer", customer, customerId));
        return result;
      });
  };
};

const searchUsers = username => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request.get(`${apiUrl}/users?username=${username}`).then(users => {
      return users;
    });
  };
};

export {
  getUserMembersByCustomer,
  searchUsers,
  addUserMember,
  removeUserMember,
};
