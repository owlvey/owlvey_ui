import React from "react";
import MirrorComparer from "shared/MirrorComparer";
import CurtainComparer from "shared/CurtainComparer";
import Dropdown from "shared/Dropdown";

class ImageComparatorItem extends React.Component {
  state = {
    compareType: [
      {
        id: 1,
        name: "Mirror Comparer",
      },
      {
        id: 2,
        name: "Curtain Comparer",
      },
    ],
    currentCompareType: {},
  };

  handleChangeComparer = comparer => {
    this.setState({
      currentCompareType: comparer,
    });
  };

  componentDidMount() {
    this.setState({
      currentCompareType: this.state.compareType[0],
    });
  }
  render() {
    const { compareType, currentCompareType } = this.state;
    const { leftCase, rightCase, apiUrl, sessionId } = this.props;
    const headers = {
      Authorization: sessionId,
      Accept: "image/*",
    };
    return (
      <React.Fragment>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label>
              <strong>Comparers</strong>
            </label>
            <div className="form-control mb-2">
              <Dropdown
                data={compareType}
                value={currentCompareType}
                displayMember={"name"}
                onChange={this.handleChangeComparer}
              />
            </div>
          </div>
        </div>
        <br />
        {currentCompareType.id == 1 && (
          <React.Fragment>
            <div className="row align-items-center">
              <div className="col-12">
                <h4>
                  <strong>{leftCase.name} </strong>
                  vs.
                  <strong> {rightCase.name}</strong>
                </h4>
                <MirrorComparer
                  imageA={`${apiUrl}${leftCase.imageUrl}`}
                  imageB={`${apiUrl}${rightCase.imageUrl}`}
                  headers={headers}
                />
              </div>
            </div>
          </React.Fragment>
        )}
        {currentCompareType.id == 2 && (
          <React.Fragment>
            <div className="row align-items-center">
              <div className="col-12">
                <h4>Curtain Comparer</h4>
                <CurtainComparer
                  imageA={`${apiUrl}${leftCase.imageUrl}`}
                  imageB={`${apiUrl}${rightCase.imageUrl}`}
                  headers={headers}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default ImageComparatorItem;
