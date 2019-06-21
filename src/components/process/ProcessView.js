import React from "react";
import VersionContainer from "components/process/version/VersionContainer";
import FeatureContainer from "components/process/feature/FeatureContainer";
import ScenarioContainer from "components/process/scenario/ScenarioContainer";
import StepContainer from "components/process/step/StepContainer";
import CaseContainer from "components/process/case/CaseContainer";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "shared/pages/NotFoundPage";

class ProcessView extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/process" component={VersionContainer} />
          <Route path="/process/version" component={VersionContainer} />
          <Route
            path="/process/:versionid/feature"
            component={FeatureContainer}
          />

          <Route
            path="/process/:featureid/scenario"
            component={ScenarioContainer}
          />
          <Route path="/process/:scenarioid/step" component={StepContainer} />
          <Route path="/process/:stepid/case" component={CaseContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default ProcessView;
