import React from "react";
import Page from "shared/Page";
import BenchmarkComparator from "./shared/BenchmarkComparator";
import { FaCheck, FaClose, FaChevronRight } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { GoX } from "react-icons/go";

class BenchmarkView extends React.Component {
  render() {
    return (
      <Page
        className="BenchmarkPage position-relative"
        title="Benchmark"
        breadcrumbs={[{ name: "Benchmark", active: true }]}
      >
        <div className="card">
          <div className="card-body">
            <h1>Version</h1>
            <BenchmarkComparator
              data={this.props.benchmark || []}
              benchmarkIdentifier="benchmarkId"
              nextPath="feature"
            />
            <div className="row" style={{ display: "none" }}>
              <div className="col feature-list pr-0">
                <ul className="list-group">
                  <li
                    className="list-group-item"
                    data-index="0"
                    data-status="ok"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(0, "ok");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(0, "ok");
                    }}
                  >
                    Feature A
                  </li>
                  <li
                    className="list-group-item"
                    data-index="1"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(1, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(1, "error");
                    }}
                  >
                    Feature B
                  </li>
                  <li
                    className="list-group-item null"
                    data-index="2"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(2, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(2, "error");
                    }}
                  >
                    Empty
                  </li>
                  <li
                    className="list-group-item"
                    data-index="3"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(3, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(3, "error");
                    }}
                  >
                    Feature D
                  </li>
                  <li
                    className="list-group-item"
                    data-index="4"
                    data-status="ok"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(4, "ok");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(4, "ok");
                    }}
                  >
                    Feature E
                  </li>
                </ul>
              </div>
              <div className="col-1 feature-list pl-0 pr-0">
                <ul className="list-group status">
                  <li
                    className="list-group-item d-flex justify-content-center align-items-center status-item"
                    data-index="0"
                    data-status="ok"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(0, "ok");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(0, "ok");
                    }}
                  >
                    <a href="" className="ok">
                      <FaCheck />
                      {/* <i className="fa fa-check" />
                      <i className="fa fa-chevron-right go-to-icon" /> */}
                    </a>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-center align-items-center status-item"
                    data-index="1"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(1, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(1, "error");
                    }}
                  >
                    <a href="" className="error">
                      <GoX />
                    </a>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-center align-items-center status-item"
                    data-index="2"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(2, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(2, "error");
                    }}
                  >
                    <a href="" className="error">
                      {/* <i className="fa fa-times" />
                      <i className="fa fa-chevron-right go-to-icon" /> */}
                      <GoX />
                    </a>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-center align-items-center status-item"
                    data-index="3"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(3, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(3, "error");
                    }}
                  >
                    <a href="" className="error">
                      {/* <i className="fa fa-times" />
                      <i className="fa fa-chevron-right go-to-icon" /> */}
                      <GoX />
                    </a>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-center align-items-center status-item"
                    data-index="4"
                    data-status="ok"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(4, "ok");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(4, "ok");
                    }}
                  >
                    <a href="" className="ok">
                      <FaCheck />
                      {/* <i className="fa fa-check" />
                      <i className="fa fa-chevron-right go-to-icon" /> */}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col feature-list pl-0">
                <ul className="list-group">
                  <li
                    className="list-group-item"
                    data-index="0"
                    data-status="ok"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(0, "ok");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(0, "ok");
                    }}
                  >
                    Feature A
                  </li>
                  <li
                    className="list-group-item"
                    data-index="1"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(1, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(1, "error");
                    }}
                  >
                    Feature B
                  </li>
                  <li
                    className="list-group-item null"
                    data-index="2"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(2, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(2, "error");
                    }}
                  >
                    Empty
                  </li>
                  <li
                    className="list-group-item"
                    data-index="3"
                    data-status="error"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(3, "error");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(3, "error");
                    }}
                  >
                    Feature D
                  </li>
                  <li
                    className="list-group-item"
                    data-index="4"
                    data-status="ok"
                    onMouseMove={e => {
                      this.onMouseMoveFeature(4, "ok");
                    }}
                    onMouseOut={e => {
                      this.onMouseOutFeature(4, "ok");
                    }}
                  >
                    Feature E
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default BenchmarkView;
