import React from "react";
import PropTypes from "utils/propTypes";

const NumberWidget = ({
  title,
  subtitle,
  number,
  color,
  progress: { value, label },
  ...restProps
}) => {
  return (
    <div className="card card-body" {...restProps}>
      <div className="d-flex justify-content-between">
        <div className="card-text">
          <p className="mb-0">
            <strong>{title}</strong>
          </p>
          <p className="mb-0 text-muted small text-left">{subtitle}</p>
        </div>
        <h5 className={`card-title text-${color}`}>{number}</h5>
      </div>
      <div className="progress" style={{ height: "8px" }}>
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="card-text d-flex justify-content-between">
        <span className="text-left text-muted small">{label}</span>
        <span className="text-right text-muted small">{value}%</span>
      </div>
    </div>
  );
};

NumberWidget.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
  ]),
  progress: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
};

NumberWidget.defaultProps = {
  title: "",
  subtitle: "",
  number: 0,
  color: "primary",
  progress: {
    value: 0,
    label: "",
  },
};

export default NumberWidget;
