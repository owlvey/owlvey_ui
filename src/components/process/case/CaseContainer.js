import React, { useEffect } from "react";
import { connect } from "react-redux";
import CaseView from "components/process/case/CaseView";
import Loader from "shared/Loader";
import { entitySelectors, processOperations } from "ducks";

function CaseContainer({
  getStepById,
  isLoadingStep,
  step,
  parentVersion,
  parentFeature,
  parentScenario,
  sessionId,
  apiUrl,
  hasStepParent,
  history,
}) {
  useEffect(() => {
    if (!hasStepParent) {
      history.push("/");
    } else {
      getStepById(step.stepId);
    }
  }, [step && step.stepId]);

  if (isLoadingStep) {
    return <Loader />;
  } else {
    return (
      hasStepParent && (
        <CaseView
          step={step}
          parentVersion={parentVersion}
          parentFeature={parentFeature}
          parentScenario={parentScenario}
          sessionId={sessionId}
          apiUrl={apiUrl}
        />
      )
    );
  }
}

function mapStateToProps(state, props) {
  const stepId = props.match.params.stepid;
  const step = entitySelectors.getEntityById(state, "step", stepId);
  const sessionId = state.auth.auth.sessionId;
  const apiUrl = state.conf.apiUrl;
  const parentScenario = entitySelectors
    .getCollection(state, "scenario")
    .find(scenario => scenario.steps.includes(stepId));
  const parentFeature = entitySelectors
    .getCollection(state, "feature")
    .find(feature => feature.scenarios.includes(parentScenario.scenarioId));
  const parentVersion = entitySelectors
    .getCollection(state, "version")
    .find(version => version.features.includes(parentFeature.featureId));
  const hasStepParent = !!step;
  return {
    hasStepParent,
    parentVersion,
    parentFeature,
    parentScenario,
    step,
    isLoadingStep: entitySelectors.getFetchingStatus(state, "step").isLoading,
    sessionId,
    apiUrl,
    history: props.history,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStepById: stepId => dispatch(processOperations.getStepById(stepId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CaseContainer);
