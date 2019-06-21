import React, { useEffect } from "react";
import { connect } from "react-redux";
import FeatureBenView from "components/benchmark/feature/FeatureBenView";
import { benchmarkOperations, entitySelectors } from "ducks";
import EmptyPage from "shared/EmptyPage";
import Loader from "shared/Loader";
import { FaVimeo } from "react-icons/fa";

function FeatureBenContainer({
  isLoadingBenchmark,
  featureBenchmarks,
  versionBenId,
  getFeatureBen,
}) {
  useEffect(() => {
    if (versionBenId) {
      getFeatureBen(versionBenId);
    }
  }, [versionBenId]);

  if (isLoadingBenchmark) {
    return <Loader />;
  } else {
    if (featureBenchmarks && featureBenchmarks.length > 0) {
      return <FeatureBenView benchmark={featureBenchmarks} />;
    } else {
      return (
        <EmptyPage
          icon={FaVimeo}
          message="You haven't any Benchmark Feature yet!"
          subMessage="Please contact your administrator."
        />
      );
    }
  }
}

function mapStateToProps(state, props) {
  const versionBenId = props.match.params.versionBenId;
  const featureBenchmarks = entitySelectors.getCollection(state, "benFeature");
  return {
    versionBenId,
    featureBenchmarks,
    isLoadingBenchmark: entitySelectors.getFetchingStatus(state, "benFeature")
      .isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFeatureBen: versionBenId =>
      dispatch(benchmarkOperations.getBenchmarkFeaturesByBenId(versionBenId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeatureBenContainer);
