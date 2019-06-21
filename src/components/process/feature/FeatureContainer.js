import React, { useEffect } from "react";
import { connect } from "react-redux";
import FeatureView from "components/process/feature/FeatureView";
import Loader from "shared/Loader";
import { entitySelectors, processOperations } from "ducks";

function FeatureContainer({
  getFeaturesByVersion,
  versionId,
  isLoadingFeature,
  features,
  hasVersionParent,
  history,
}) {
  useEffect(() => {
    if (!hasVersionParent) {
      history.push("/");
    } else {
      getFeaturesByVersion(versionId);
    }
  }, [versionId]);

  if (isLoadingFeature) {
    return <Loader />;
  } else {
    return hasVersionParent && <FeatureView features={features} />;
  }
}

function mapStateToProps(state, props) {
  const versionId = props.match.params.versionid;
  const version = entitySelectors.getEntityById(state, "version", versionId);
  const features = entitySelectors.getCollectionByIds(
    state,
    "feature",
    version && version.features,
  );
  const hasVersionParent = !!version;
  return {
    hasVersionParent,
    versionId,
    features,
    isLoadingFeature: entitySelectors.getFetchingStatus(state, "feature")
      .isLoading,
    history: props.history,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFeaturesByVersion: versionId =>
      dispatch(processOperations.getFeaturesByVersion(versionId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeatureContainer);
