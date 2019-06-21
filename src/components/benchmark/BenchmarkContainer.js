import React, { useEffect } from "react";
import { connect } from "react-redux";
import BenchmarkView from "components/benchmark/BenchmarkView";
import { benchmarkOperations, entitySelectors } from "ducks";
import EmptyPage from "shared/EmptyPage";
import Loader from "shared/Loader";
import { FaVimeo } from "react-icons/fa";

function BenchmarkContainer({
  isLoadingBenchmark,
  benchmarks,
  currentProductId,
  getBenchmark,
}) {
  useEffect(() => {
    if (currentProductId) {
      getBenchmark(currentProductId);
    }
  }, [currentProductId]);

  if (isLoadingBenchmark) {
    return <Loader />;
  } else {
    if (benchmarks && benchmarks.length > 0) {
      return <BenchmarkView benchmark={benchmarks} />;
    } else {
      return (
        <EmptyPage
          icon={FaVimeo}
          message="You haven't any Benchmark Version yet!"
          subMessage="Please contact your administrator."
        />
      );
    }
  }
}

function mapStateToProps(state) {
  const currentProductId = state.product.current;
  const benchmarks = entitySelectors.getCollection(state, "benVersion");

  return {
    currentProductId,
    benchmarks,
    isLoadingBenchmark: entitySelectors.getFetchingStatus(state, "benVersion")
      .isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBenchmark: productId =>
      dispatch(benchmarkOperations.getBenchmarksByProduct(productId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BenchmarkContainer);
