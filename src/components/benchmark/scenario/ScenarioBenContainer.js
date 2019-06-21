import React, { useEffect } from "react";
import { connect } from "react-redux";
import ScenarioBenView from "./ScenarioBenView";
import { benchmarkOperations, entitySelectors } from "ducks";
import EmptyPage from "shared/EmptyPage";
import Loader from "shared/Loader";
import { FaVimeo } from "react-icons/fa";

function ScenarioBenContainer({
  isLoadingBenScenario,
  scenarioBenchmarks,
  featureBenId,
  getScenarioBen,
}) {
  useEffect(() => {
    if (featureBenId) {
      getScenarioBen(featureBenId);
    }
  }, [featureBenId]);

  if (isLoadingBenScenario) {
    return <Loader />;
  } else {
    if (scenarioBenchmarks && scenarioBenchmarks.length > 0) {
      return <ScenarioBenView benchmark={scenarioBenchmarks} />;
    } else {
      return (
        <EmptyPage
          icon={FaVimeo}
          message="You haven't any Benchmark Scenario yet!"
          subMessage="Please contact your administrator."
        />
      );
    }
  }
}

function mapStateToProps(state, props) {
  const featureBenId = props.match.params.featureBenId;
  const scenarioBenchmarks = entitySelectors.getCollection(
    state,
    "benScenario",
  );
  return {
    featureBenId,
    scenarioBenchmarks,
    isLoadingBenScenario: entitySelectors.getFetchingStatus(
      state,
      "benScenario",
    ).isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getScenarioBen: featureBenId =>
      dispatch(
        benchmarkOperations.getBenchmarkScenariosByBenFeatureId(featureBenId),
      ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScenarioBenContainer);
