import React from "react";
import Page from "shared/Page";
import IconWidget from "shared/IconWidget";
import { FaSkype } from "react-icons/fa";

class ScenarioView extends React.Component {
  render() {
    const { scenarios, parentVersionId } = this.props;
    return (
      <Page
        className="ProcessScenarioPage position-relative"
        title="Scenario"
        breadcrumbs={[
          { name: "Version", active: false, goTo: "/process/version" },
          {
            name: "Feature",
            active: false,
            goTo: `/process/${parentVersionId}/feature`,
          },
          { name: "Scenario", active: true },
        ]}
      >
        <div className="row">
          {scenarios.map((scenario, index) => (
            <div className="col-md-3" key={index}>
              <IconWidget
                icon={FaSkype}
                bgColor="white"
                inverse={false}
                title={scenario.name}
                subtitle={"View Detail"}
                subtitleTo={`/process/${scenario.scenarioId}/step`}
              />
            </div>
          ))}
        </div>
      </Page>
    );
  }
}

export default ScenarioView;
