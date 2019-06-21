import React from "react";
import PropTypes from "utils/propTypes";
import { Link } from "react-router-dom";
import classNames from "classnames";

const IconWidget = ({
  bgColor,
  icon: Icon,
  iconProps,
  title,
  subtitle,
  className,
  inverse,
  subtitleTo,
  onClickSubtitle,
  ...restProps
}) => {
  const classes = classNames(
    "ui-icon-widget",
    "card",
    "cr-widget",
    className,
    {
      [`bg-${bgColor}`]: bgColor,
    },
    { "text-white": inverse },
  );
  return (
    <div className={classes} {...restProps}>
      <div className="card-body cr-widget__icon">
        <Icon size={50} {...iconProps} />
      </div>
      <div className="card-body">
        <div className="card-title">
          <strong>{title}</strong>
        </div>
        <div className="card-subtitle">
          {subtitleTo && <Link to={subtitleTo}>{subtitle}</Link>}
          {onClickSubtitle && (
            <button onClick={onClickSubtitle} className="btn btn-link">
              {subtitle}
            </button>
          )}
          {!subtitleTo && !onClickSubtitle && subtitle}
        </div>
      </div>
    </div>
  );
};

IconWidget.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.component,
  iconProps: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

IconWidget.defaultProps = {
  bgColor: "primary",
  icon: "span",
  iconProps: { size: 50 },
  inverse: false,
};

export default IconWidget;
