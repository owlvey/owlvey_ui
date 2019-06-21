import React from "react";
import uuidv1 from "uuid/v1";
import classnames from "classnames";
import CustomImage from "shared/CustomImage";

class MirrorComparer extends React.Component {
  state = {
    initZoomValue: 0,
    identifierA: uuidv1(),
    identifierB: uuidv1(),
  };

  handleChangeZoom = event => {
    const { identifierA, identifierB } = this.state;
    let zoom = event.target.value;
    let parent = document.getElementById(identifierA).parentElement;

    let imgA = document.getElementById(identifierA);
    let imgB = document.getElementById(identifierB);
    let width = 100 + parseInt(zoom);

    this.setState({ initZoomValue: zoom });

    imgA.style.width = width + "%";
    imgB.style.width = width + "%";
  };

  setImageScrollPosition = event => {
    const { identifierA, identifierB } = this.state;
    const scrollTop = event.target.scrollTop;
    const scrollLeft = event.target.scrollLeft;

    document.getElementById(identifierA).parentElement.scrollTop = scrollTop;
    document.getElementById(identifierA).parentElement.scrollLeft = scrollLeft;

    document.getElementById(identifierB).parentElement.scrollTop = scrollTop;
    document.getElementById(identifierB).parentElement.scrollLeft = scrollLeft;
  };

  render() {
    const { imageA, imageB, headers } = this.props;
    const { initZoomValue, identifierA, identifierB } = this.state;

    return (
      <div className="row">
        <div className="col-6">
          <div className="step-image">
            <div
              className="step-image-container"
              onScroll={this.setImageScrollPosition}
            >
              <CustomImage
                src={imageA}
                alt=""
                id={identifierA}
                headers={headers}
              />
            </div>
            <div className="image-options text-right d-flex justify-content-end align-items-center">
              <label className="mb-0">Zoom: </label>
              <input
                type="range"
                name="zoomRange"
                min="0"
                max="300"
                value={initZoomValue}
                onChange={this.handleChangeZoom}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="step-image">
            <div
              className="step-image-container"
              onScroll={this.setImageScrollPosition}
            >
              <CustomImage
                src={imageB}
                alt=""
                id={identifierB}
                headers={headers}
              />
            </div>
            <div className="image-options text-right d-flex justify-content-end align-items-center">
              <label className="mb-0">Zoom: </label>
              <input
                type="range"
                name="zoomRange"
                min="0"
                max="300"
                value={initZoomValue}
                onChange={this.handleChangeZoom}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MirrorComparer;
