import React from "react";
import Page from "shared/Page";
import CaseComparatorsView from "./CaseComparatorsView";

class WorkbenchView extends React.Component {
  state = {
    features: [],
    scenarios: [],
    steps: [],
    cases: [],
    currentVersion: null,
    currentFeature: null,
    currentScenario: null,
    currentStep: null,
    currentCase: null,
  };

  componentDidMount() {
    this.setState({
      cases: [
        {
          caseId: "1",
          stepId: "5ca8d9cd415b6a1cb7ddd149",
          name: "Case 1 Firefox",
          screenshot: "http://www.fabri.alvarocv.com/img2.png",
        },
        {
          caseId: "2",
          stepId: "5ca8d9cd415b6a1cb7ddd149",
          name: "Case 2 Chrome",
          screenshot: "http://www.fabri.alvarocv.com/img2.png",
        },
        {
          caseId: "3",
          stepId: "5ca8d9cd415b6a1cb7ddd149",
          name: "Case 2 safari",
          screenshot: "http://www.fabri.alvarocv.com/img2.png",
        },
        {
          caseId: "4",
          stepId: "5ca8d9cd415b6a1cb7ddd149",
          name: "Case 2 Internet Explorer",
          screenshot: "http://www.fabri.alvarocv.com/img2.png",
        },
        {
          caseId: "5",
          stepId: "5ca8d9cd415b6a1cb7ddd149",
          name: "Case 2 opera",
          screenshot: "http://www.fabri.alvarocv.com/img2.png",
        },
        {
          caseId: "6",
          stepId: "5ca8d9cd415b6a1cb7ddd149",
          name: "Case 2 android",
          screenshot: "http://www.fabri.alvarocv.com/img2.png",
        },
        {
          caseId: "7",
          stepId: "5ca8d9cd415b6a1cb7ddd149",
          name: "Case 2 iphone",
          screenshot: "http://www.fabri.alvarocv.com/img2.png",
        },
      ],
    });
  }

  handleChangeVersion = version => {
    const { getEntitiesByParent } = this.props;
    this.setState({
      currentVersion: version,
      features: getEntitiesByParent("feature", "version", version.versionId),
      scenarios: [],
      steps: [],
      cases: [],
      currentFeature: null,
      currentScenario: null,
      currentStep: null,
      currentCase: null,
    });
  };

  handleChangeFeature = feature => {
    const { getEntitiesByParent } = this.props;
    this.setState({
      currentFeature: feature,
      scenarios: getEntitiesByParent("scenario", "feature", feature.featureId),
      steps: [],
      cases: [],
      currentScenario: null,
      currentStep: null,
      currentCase: null,
    });
  };

  handleChangeScenario = scenario => {
    const { getEntitiesByParent } = this.props;
    this.setState({
      currentScenario: scenario,
      steps: getEntitiesByParent("step", "scenario", scenario.scenarioId),
      cases: [],
      currentStep: null,
      currentCase: null,
    });
  };

  handleChangeStep = step => {
    const { getEntitiesByParent } = this.props;
    this.setState({
      currentStep: step,
      cases: getEntitiesByParent("case", "step", step.stepId),
      currentCase: null,
    });
  };

  handleChangeCase = _case => {
    this.setState({
      currentCase: _case,
    });
  };

  render() {
    const { versions } = this.props;
    const {
      features,
      scenarios,
      steps,
      cases,
      currentVersion,
      currentFeature,
      currentScenario,
      currentStep,
      currentCase,
      comparers,
      currentComparer,
    } = this.state;
    return (
      <Page
        className="WorkbenchPage position-relative"
        title="Workbench"
        breadcrumbs={[{ name: "Workbench", active: true }]}
      >
        <div className="card card-body">
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label>
                <strong>Version</strong>
              </label>
              <div className="form-control mb-2">
                <Selector
                  data={versions}
                  value={currentVersion}
                  displayMember={"name"}
                  onChange={this.handleChangeVersion}
                />
              </div>
            </div>

            <div className="col-auto">
              <label>
                <strong>Feature</strong>
              </label>
              <div className="form-control mb-2">
                <Selector
                  data={features}
                  value={currentFeature}
                  displayMember={"name"}
                  onChange={this.handleChangeFeature}
                />
              </div>
            </div>

            <div className="col-auto">
              <label>
                <strong>Scenario</strong>
              </label>
              <div className="form-control mb-2">
                <Selector
                  data={scenarios}
                  value={currentScenario}
                  displayMember={"name"}
                  onChange={this.handleChangeScenario}
                />
              </div>
            </div>
            <div className="col-auto">
              <label>
                <strong>Step</strong>
              </label>
              <div className="form-control mb-2">
                <Selector
                  data={steps}
                  value={currentStep}
                  displayMember={"name"}
                  onChange={this.handleChangeStep}
                />
              </div>
            </div>

            <div className="col-auto">
              <label>
                <strong>Case</strong>
              </label>
              <div className="form-control mb-2">
                <Selector
                  data={cases}
                  value={currentCase}
                  displayMember={"name"}
                  onChange={this.handleChangeCase}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CaseComparatorsView cases={cases} />
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default WorkbenchView;
