import React from "react";
import Page from "shared/Page";
import BenchmarkComparator from "../shared/BenchmarkComparator";

class CaseBenView extends React.Component {
  render() {
    return (
      <Page
        className="BenchmarkPage position-relative"
        title="Benchmark"
        breadcrumbs={[{ name: "Benchmark", active: true }]}
      >
        <div className="card">
          <div className="card-body">
            <h1>Case</h1>
            <BenchmarkComparator
              data={this.props.benchmark || []}
              benchmarkIdentifier="benScenarioId"
              nextPath="Step"
              isRedirectAction={false}
              sessionId={this.props.sessionId}
              apiUrl={this.props.apiUrl}
            />
          </div>
        </div>
      </Page>
    );
  }
}

export default CaseBenView;
