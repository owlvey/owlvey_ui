import React from "react";
import classnames from "classnames";
import jQuery from "jquery";
import CustomImage from "shared/CustomImage";
//import jQuery from "jquery";
//import * as jqImageCompare from "jquery-images-compare";

class CurtainComparer extends React.Component {
  componentDidMount() {
    $("#curtainComparer").imagesCompare();
  }

  render() {
    const { imageA, imageB, headers } = this.props;

    //return (<div>Curtain</div>)
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
