import React from "react";
import Page from "shared/Page";
import BenchmarkComparator from "../shared/BenchmarkComparator";

class StepBenView extends React.Component {
  render() {
    return (
      <Page
        className="BenchmarkPage position-relative"
        title="Benchmark"
        breadcrumbs={[{ name: "Benchmark", active: true }]}
      >
        <div className="card">
          <div className="card-body">
            <h1>Step</h1>
            <BenchmarkComparator
              data={this.props.benchmark || []}
              benchmarkIdentifier="benStepId"
              nextPath="case"
            />
          </div>
        </div>
      </Page>
    );
  }
}

export default StepBenView;
