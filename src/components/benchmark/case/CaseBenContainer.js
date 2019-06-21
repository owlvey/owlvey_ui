import React, { useEffect } from "react";
import { connect } from "react-redux";
import CaseBenView from "./CaseBenView";
import { benchmarkOperations, entitySelectors } from "ducks";
import EmptyPage from "shared/EmptyPage";
import Loader from "shared/Loader";
import { FaVimeo } from "react-icons/fa";

function CaseBenContainer({
  isLoadingBenCase,
  caseBenchmarks,
  stepBenId,
  getCasesBen,
  sessionId,
  apiUrl,
}) {
  useEffect(() => {
    if (stepBenId) {
      getCasesBen(stepBenId);
    }
  }, [stepBenId]);

  if (isLoadingBenCase) {
    return <Loader />;
  } else {
    if (caseBenchmarks && caseBenchmarks.length > 0) {
      return (
        <CaseBenView
          benchmark={caseBenchmarks}
          sessionId={sessionId}
          apiUrl={apiUrl}
        />
      );
    } else {
      return (
        <EmptyPage
          icon={FaVimeo}
          message="You haven't any Benchmark Case yet!"
          subMessage="Please contact your administrator."
        />
      );
    }
  }
}

function mapStateToProps(state, props) {
  const stepBenId = props.match.params.stepBenId;
  const caseBenchmarks = entitySelectors.getCollection(state, "benCase");
  const sessionId = state.auth.auth.sessionId;
  const apiUrl = state.conf.apiUrl;
  return {
    stepBenId,
    caseBenchmarks,
    isLoadingBenCase: entitySelectors.getFetchingStatus(state, "benCase")
      .isLoading,
    sessionId,
    apiUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCasesBen: stepBenId =>
      dispatch(benchmarkOperations.getBenchmarkCasesByBenStepId(stepBenId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CaseBenContainer);
