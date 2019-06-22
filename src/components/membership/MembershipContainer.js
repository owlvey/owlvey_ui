import React, { useEffect } from "react";
import { connect } from "react-redux";
import MembsershipView from "components/membership/MembershipView";
import Loader from "shared/Loader";
import { entitySelectors, membershipOperations } from "ducks";

function MembsershipContainer({
  isLoadingMembership,
  users,
  getMembersByCustomer,
  currentCustomer,
  currentUser,
  searchUsers,
  addMember,
  removeMember,
  history
}) {
  if (!currentCustomer) {
    history.push("/customers");
    return null;
  }
  useEffect(() => {
    if (currentCustomer.customerId) {
      getMembersByCustomer(currentCustomer.customerId);
    }
  }, [currentCustomer.customerId]);

  if (isLoadingMembership) {
    return <Loader />;
  } else {
    return (
      <MembsershipView
        memberships={users}
        currentCustomer={currentCustomer}
        currentUser={currentUser}
        onSearchUser={searchUsers}
        addMember={addMember}
        removeMember={removeMember}
      />
    );
  }
}

function mapStateToProps(state) {
  const currentUser = state.auth.user;
  const currentCustomer = entitySelectors.getEntityById(
    state,
    "customer",
    state.customer.current
  );
  const users =
    currentCustomer &&
    entitySelectors.getCollectionByIds(
      state,
      "user",
      currentCustomer.users,
      false
    );
  const isLoadingMembership = entitySelectors.getFetchingStatus(state, "user")
    .isLoading;

  return {
    currentCustomer,
    users,
    isLoadingMembership,
    currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMembersByCustomer: customerId =>
      dispatch(membershipOperations.getUserMembersByCustomer(customerId)),
    searchUsers: username =>
      dispatch(membershipOperations.searchUsers(username)),
    addMember: (customerId, user) =>
      dispatch(membershipOperations.addUserMember(customerId, user)),
    removeMember: (customerId, userId) =>
      dispatch(membershipOperations.removeUserMember(customerId, userId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembsershipContainer);
