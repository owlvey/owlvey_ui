import React from "react";
import Page from "shared/Page";
import BenchmarkComparator from "../shared/BenchmarkComparator";

class ScenarioBenView extends React.Component {
  render() {
    return (
      <Page
        className="BenchmarkPage position-relative"
        title="Benchmark"
        breadcrumbs={[{ name: "Benchmark", active: true }]}
      >
        <div className="card">
          <div className="card-body">
            <h1>Scenario</h1>
            <BenchmarkComparator
              data={this.props.benchmark || []}
              benchmarkIdentifier="benScenarioId"
              nextPath="step"
            />
          </div>
        </div>
      </Page>
    );
  }
}

export default ScenarioBenView;
