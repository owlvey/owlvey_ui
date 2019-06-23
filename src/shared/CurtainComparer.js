import React from "react";
import jQuery from "jquery";
import CustomImage from "shared/CustomImage";

class CurtainComparer extends React.Component {
  componentDidMount() {
    jQuery("#curtainComparer").imagesCompare();
  }

  render() {
    const { imageA, imageB, headers } = this.props;
    return (
      <div id="curtainComparer">
        <div>
          <span className="images-compare-label">Before</span>
          <CustomImage src={imageA} alt="Before" headers={headers} />
        </div>
        <div>
          <span className="images-compare-label">After</span>
          <CustomImage src={imageB} alt="After" headers={headers} />
        </div>
      </div>
    );
  }
}

export default CurtainComparer;
