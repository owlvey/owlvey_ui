import React, { useEffect } from "react";
import { connect } from "react-redux";
import StepBenView from "./StepBenView";
import { benchmarkOperations, entitySelectors } from "ducks";
import EmptyPage from "shared/EmptyPage";
import Loader from "shared/Loader";
import { FaVimeo } from "react-icons/fa";

function StepBenContainer({
  isLoadingBenStep,
  stepBenchmarks,
  scenarioBenId,
  getStepsBen,
}) {
  useEffect(() => {
    if (scenarioBenId) {
      getStepsBen(scenarioBenId);
    }
  }, [scenarioBenId]);

  if (isLoadingBenStep) {
    return <Loader />;
  } else {
    if (stepBenchmarks && stepBenchmarks.length > 0) {
      return <StepBenView benchmark={stepBenchmarks} />;
    } else {
      return (
        <EmptyPage
          icon={FaVimeo}
          message="You haven't any Benchmark Step yet!"
          subMessage="Please contact your administrator."
        />
      );
    }
  }
}

function mapStateToProps(state, props) {
  const scenarioBenId = props.match.params.scenarioBenId;
  const stepBenchmarks = entitySelectors.getCollection(state, "benStep");
  return {
    scenarioBenId,
    stepBenchmarks,
    isLoadingBenStep: entitySelectors.getFetchingStatus(state, "benStep")
      .isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStepsBen: featureBenId =>
      dispatch(
        benchmarkOperations.getBenchmarkStepsByBenScenarioId(featureBenId),
      ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepBenContainer);
