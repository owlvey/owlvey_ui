import React from "react";
import DroppableArea from "./shared/DroppableArea";
import ImageComparatorItem from "./ImageComparatorItem";
import { IoIosRefresh } from "react-icons/io";
import {
  FaFirefox,
  FaSafari,
  FaChrome,
  FaOpera,
  FaInternetExplorer,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
class CaseComparator extends React.Component {
  state = {
    isImageProcessed: false,
  };

  handleClickCompareimage = () => {
    this.setState({
      isImageProcessed: true,
    });
  };

  getIconCase = caseName => {
    const iconProps = {
      size: 30,
    };
    if (caseName.indexOf("firefox") > -1) {
      return <FaFirefox {...iconProps} />;
    } else if (caseName.indexOf("chrome") > -1) {
      return <FaChrome {...iconProps} />;
    } else if (caseName.indexOf("safari") > -1) {
      return <FaSafari {...iconProps} />;
    } else if (caseName.indexOf("opera") > -1) {
      return <FaOpera {...iconProps} />;
    } else if (caseName.indexOf("internet explorer") > -1) {
      return <FaInternetExplorer {...iconProps} />;
    } else if (caseName.indexOf("android") > -1) {
      return <FaAndroid {...iconProps} />;
    } else if (caseName.indexOf("iphone") > -1) {
      return <FaApple {...iconProps} />;
    }
    return null;
  };

  renderCaseItem = _case => {
    return (
      <div className="media">
        <div className="media-left">
          <img
            src={_case.screenshot}
            className="rounded mr-2 mb-2"
            style={{ width: 140, height: "auto" }}
          />
        </div>
        <div className="overflow-hidden media-body">
          <h5 className="text-truncate media-heading">
            {this.getIconCase(_case.name.toLowerCase())}
            <strong className="ml-2">{_case.name}</strong>
          </h5>
          <p className="text-muted text-truncate">
            Responsive admin template...
          </p>
        </div>
      </div>
    );
  };

  renderCaseComparator = () => {
    if (!this.state.isImageProcessed) {
      const {
        leftDroppableId,
        rightDroppableId,
        leftCase,
        rightCase,
        isDropDisabled,
      } = this.props.data;
      return (
        <div className="row justify-content-md-center">
          <div className="col-md-4 droppable-container pt-3 pb-3">
            <DroppableArea
              droppableId={leftDroppableId}
              isDropDisabled={isDropDisabled}
              style={{ width: "100%" }}
            >
              {!leftCase && (
                <p>
                  Drop a <strong>case</strong> to compare an Image.
                </p>
              )}
              {leftCase && this.renderCaseItem(leftCase)}
            </DroppableArea>
          </div>
          <div className="ml-3 mr-3">
            <button
              className="btn btn-outline-dark"
              title="Compare Images"
              onClick={this.handleClickCompareimage}
              disabled={!(leftCase && rightCase)}
            >
              <IoIosRefresh />
            </button>
          </div>
          <div className="col-md-4 droppable-container">
            <DroppableArea
              droppableId={rightDroppableId}
              isDropDisabled={isDropDisabled}
            >
              {!rightCase && (
                <p>
                  Drop a <strong>case</strong> to compare an Image.
                </p>
              )}
              {rightCase && this.renderCaseItem(rightCase)}
            </DroppableArea>
          </div>
        </div>
      );
    }
    return null;
  };

  renderCaseImageComparator = (leftCase, rightCase) => {
    if (this.state.isImageProcessed) {
      return (
        <div className="row">
          <div className="col-md-12">
            <ImageComparatorItem leftCase={leftCase} rightCase={rightCase} />
          </div>
        </div>
      );
    }
    return null;
  };

  render() {
    const { leftCase, rightCase } = this.props.data;
    return (
      <React.Fragment>
        {leftCase && rightCase && (
          <hr className="my-4 border-dashed border-top-3" />
        )}
        <span>Index: {this.props.index}</span>
        {this.renderCaseComparator()}
        {this.renderCaseImageComparator(leftCase, rightCase)}
      </React.Fragment>
    );
  }
}

export default CaseComparator;
