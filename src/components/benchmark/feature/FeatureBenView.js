import React from "react";
import Page from "shared/Page";
import BenchmarkComparator from "../shared/BenchmarkComparator";

class FeatureBenView extends React.Component {
  render() {
    return (
      <Page
        className="BenchmarkPage position-relative"
        title="Benchmark"
        breadcrumbs={[{ name: "Benchmark", active: true }]}
      >
        <div className="card">
          <div className="card-body">
            <h1>Feature</h1>
            <BenchmarkComparator
              data={this.props.benchmark || []}
              benchmarkIdentifier="benFeatureId"
              nextPath="scenario"
            />
          </div>
        </div>
      </Page>
    );
  }
}

export default FeatureBenView;
