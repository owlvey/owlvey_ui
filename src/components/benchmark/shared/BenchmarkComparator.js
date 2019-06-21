import React from "react";
import { FaCheck, FaClose, FaChevronRight } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { GoX } from "react-icons/go";
import classnames from "classnames";
import { Link } from "react-router-dom";
import uuidv1 from "uuid/v1";
import ImageComparatorItem from "components/process/case/ImageComparatorItem";

function BenchmarkExpandContent({
  benchmark,
  newUUID,
  index,
  onMouseMoveFeature,
  onMouseOutFeature,
  sessionId,
  apiUrl,
}) {
  const leftCase = {
    name: benchmark.leftName,
    imageUrl: benchmark.imageLeftUrl,
  };
  const rightCase = {
    name: benchmark.rightName,
    imageUrl: benchmark.imageRightUrl,
  };
  return (
    <div className="col-md-12 comparator collapse" id={newUUID}>
      <div
        className="list-group-item"
        data-index={index}
        data-status={benchmark.difference > 0 ? "error" : "ok"}
        onMouseMove={e => {
          onMouseMoveFeature(index, benchmark);
        }}
        onMouseOut={e => {
          onMouseOutFeature(index, benchmark);
        }}
      >
        <ImageComparatorItem
          leftCase={leftCase}
          rightCase={rightCase}
          sessionId={sessionId}
          apiUrl={apiUrl}
        />
      </div>
    </div>
  );
}

function BenchmarkAction({
  index,
  benchmark,
  benchmarkIdentifier,
  onMouseMoveFeature,
  onMouseOutFeature,
  nextPath,
  newUUID,
  isRedirectAction,
}) {
  const urlRedirect = `/benchmark/${
    benchmark[benchmarkIdentifier]
  }/${nextPath}`;

  const linkProps = isRedirectAction
    ? {}
    : {
        "data-target": `#${newUUID}`,
        "data-toggle": "collapse",
        "aria-controls": newUUID,
        "aria-expanded": "false",
      };

  return (
    <div className="comparator-status">
      <div
        className="list-group-item d-flex justify-content-center align-items-center status-item pb-0"
        data-index={index}
        data-status={benchmark.difference > 0 ? "error" : "ok"}
        onMouseMove={e => {
          onMouseMoveFeature(index, benchmark);
        }}
        onMouseOut={e => {
          onMouseOutFeature(index, benchmark);
        }}
      >
        <Link
          to={urlRedirect}
          className={benchmark.difference > 0 ? "error" : "ok"}
          {...linkProps}
        >
          {benchmark.difference > 0 ? <GoX /> : <FaCheck />}
        </Link>
      </div>
    </div>
  );
}

function BenchmarkComparator({
  data,
  benchmarkIdentifier,
  nextPath,
  isRedirectAction,
  sessionId,
  apiUrl,
}) {
  const onMouseMoveFeature = (index, item) => {
    const differenceType = item.difference > 0 ? "error" : "ok";
    const selector = `[data-index="${index}"][data-status="${differenceType}"]`;
    jQuery(selector).addClass(differenceType);
  };

  const onMouseOutFeature = (index, item) => {
    const differenceType = item.difference > 0 ? "error" : "ok";
    const selector = `[data-index="${index}"][data-status="${differenceType}"]`;
    jQuery(selector).removeClass(differenceType);
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            {data.map((item, index) => {
              const newUUID = `uui_${uuidv1()}`;
              return (
                <li key={index} className="feature-list list-unstyled mb-3">
                  <div key={index} className="row">
                    <div className="col pr-0 mb-0">
                      <span
                        className="list-group-item left"
                        data-index={index}
                        data-status={item.difference > 0 ? "error" : "ok"}
                        onMouseMove={e => {
                          onMouseMoveFeature(index, item);
                        }}
                        onMouseOut={e => {
                          onMouseOutFeature(index, item);
                        }}
                      >
                        {item.leftName}
                      </span>
                    </div>
                    <div className="col-1 pl-0 pr-0 mb-0">
                      <BenchmarkAction
                        benchmark={item}
                        index={index}
                        benchmarkIdentifier={benchmarkIdentifier}
                        nextPath={nextPath}
                        newUUID={newUUID}
                        onMouseMoveFeature={onMouseMoveFeature}
                        onMouseOutFeature={onMouseOutFeature}
                        isRedirectAction={isRedirectAction}
                      />
                    </div>
                    <div className="col pl-0 mb-0">
                      <span
                        className="list-group-item right"
                        data-index={index}
                        data-status={item.difference > 0 ? "error" : "ok"}
                        onMouseMove={e => {
                          onMouseMoveFeature(index, item);
                        }}
                        onMouseOut={e => {
                          onMouseOutFeature(index, item);
                        }}
                      >
                        {item.rightName}
                      </span>
                    </div>
                    {!isRedirectAction && (
                      <BenchmarkExpandContent
                        benchmark={item}
                        index={index}
                        newUUID={newUUID}
                        onMouseMoveFeature={onMouseMoveFeature}
                        onMouseOutFeature={onMouseOutFeature}
                        sessionId={sessionId}
                        apiUrl={apiUrl}
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

BenchmarkComparator.defaultProps = {
  isRedirectAction: true,
};

export default BenchmarkComparator;
