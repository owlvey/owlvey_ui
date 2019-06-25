import React, { useEffect } from "react";
import { connect } from "react-redux";
import KeyView from "./KeyView";
import Loader from "shared/Loader";
import { entitySelectors, keyOperations } from "ducks";

function KeyContainer({ keys, isLoadingKeys, loadKeys, addKey }) {
  useEffect(() => {
    loadKeys();
  }, []);

  if (isLoadingKeys) {
    return <Loader />;
  } else {
    return <KeyView keys={keys} addKey={addKey} />;
  }
}

function mapStateToProps(state) {
  const keys = entitySelectors.getCollection(state, "key");
  const isLoadingKeys = entitySelectors.getFetchingStatus(state, "key")
    .isLoading;

  return {
    keys,
    isLoadingKeys
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadKeys: () => dispatch(keyOperations.getKeysByCurrentUser()),
    addKey: () => dispatch(keyOperations.addKey())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyContainer);
