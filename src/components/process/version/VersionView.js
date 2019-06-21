import React from "react";
import Page from "shared/Page";
import IconWidget from "shared/IconWidget";
import { FaVimeo } from "react-icons/fa";

class VersionView extends React.Component {
  render() {
    const { versions } = this.props;

    return (
      <Page
        className="ProcessVersionPage position-relative"
        title="Version"
        breadcrumbs={[{ name: "Version", active: true }]}
      >
        <div className="row">
          {versions.map((version, index) => (
            <div className="col-md-3" key={index}>
              <IconWidget
                icon={FaVimeo}
                bgColor="white"
                inverse={false}
                title={version.name}
                subtitle={"View Detail"}
                subtitleTo={`/process/${version.versionId}/feature`}
              />
            </div>
          ))}
        </div>
      </Page>
    );
  }
}

VersionView.defaultProps = {
  versions: [],
};

export default VersionView;
