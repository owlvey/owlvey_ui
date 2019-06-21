import React, { useEffect } from "react";
import { connect } from "react-redux";
import StepView from "components/process/step/StepView";
import Loader from "shared/Loader";
import { entitySelectors, processOperations } from "ducks";

function StepContainer({
  getStepsByScenario,
  scenarioId,
  history,
  isLoadingStep,
  steps,
  parentVersionId,
  parentfeatureId,
  hasScenarioParent,
}) {
  useEffect(() => {
    if (!hasScenarioParent) {
      history.push("/");
    } else {
      getStepsByScenario(scenarioId);
    }
  }, [scenarioId]);

  if (isLoadingStep) {
    return <Loader />;
  } else {
    return (
      hasScenarioParent && (
        <StepView
          steps={steps}
          history={history}
          parentVersionId={parentVersionId}
          parentfeatureId={parentfeatureId}
        />
      )
    );
  }
}

function mapStateToProps(state, props) {
  const scenarioId = props.match.params.scenarioid;
  const scenario = entitySelectors.getEntityById(state, "scenario", scenarioId);
  const parentfeature = entitySelectors
    .getCollection(state, "feature")
    .find(feature => feature.scenarios.includes(scenarioId));
  const parentVersion = entitySelectors
    .getCollection(state, "version")
    .find(version => version.features.includes(parentfeature.featureId));
  const steps = entitySelectors.getCollectionByIds(
    state,
    "step",
    scenario && scenario.steps,
  );
  const hasScenarioParent = !!scenario;
  return {
    hasScenarioParent,
    parentVersionId: parentVersion && parentVersion.versionId,
    parentfeatureId: parentfeature && parentfeature.featureId,
    scenarioId,
    steps,
    isLoadingStep: entitySelectors.getFetchingStatus(state, "step").isLoading,
    history: props.history,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStepsByScenario: scenarioId =>
      dispatch(processOperations.getStepsByScenario(scenarioId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepContainer);
