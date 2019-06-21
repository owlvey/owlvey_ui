import React, { useEffect } from "react";
import { connect } from "react-redux";
import ScenarioView from "components/process/scenario/ScenarioView";
import Loader from "shared/Loader";
import { entitySelectors, processOperations } from "ducks";

function ScenarioContainer({
  getScenariosByFeature,
  featureId,
  isLoadingScenario,
  scenarios,
  parentVersionId,
  hasFeatureParent,
  history,
}) {
  useEffect(() => {
    if (!hasFeatureParent) {
      history.push("/");
    }
    getScenariosByFeature(featureId);
  }, [featureId]);
  if (isLoadingScenario) {
    return <Loader />;
  } else {
    return (
      hasFeatureParent && (
        <ScenarioView scenarios={scenarios} parentVersionId={parentVersionId} />
      )
    );
  }
}

function mapStateToProps(state, props) {
  const featureId = props.match.params.featureid;
  const feature = entitySelectors.getEntityById(state, "feature", featureId);
  const version = entitySelectors
    .getCollection(state, "version")
    .find(version => version.features.includes(featureId));

  const scenarios = entitySelectors.getCollectionByIds(
    state,
    "scenario",
    feature && feature.scenarios,
  );
  const hasFeatureParent = !!feature;
  return {
    parentVersionId: version && version.versionId,
    featureId,
    scenarios,
    isLoadingScenario: entitySelectors.getFetchingStatus(state, "scenario")
      .isLoading,
    hasFeatureParent,
    history: props.history,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getScenariosByFeature: featureId =>
      dispatch(processOperations.getScenariosByFeature(featureId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScenarioContainer);
