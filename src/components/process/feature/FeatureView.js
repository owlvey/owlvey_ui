import React from "react";
import Page from "shared/Page";
import IconWidget from "shared/IconWidget";
import { FaFoursquare } from "react-icons/fa";

class FeatureView extends React.Component {
  render() {
    const { features } = this.props;
    return (
      <Page
        className="ProcessFeaturePage position-relative"
        title="Feature"
        breadcrumbs={[
          { name: "Version", active: false, goTo: "/process/version" },
          { name: "Feature", active: true },
        ]}
      >
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-3" key={index}>
              <IconWidget
                icon={FaFoursquare}
                bgColor="white"
                inverse={false}
                title={feature.name}
                subtitle={"View Detail"}
                subtitleTo={`/process/${feature.featureId}/scenario`}
              />
            </div>
          ))}
        </div>
      </Page>
    );
  }
}

export default FeatureView;
