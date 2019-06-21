import React from "react";
import PropTypes from "utils/propTypes";
import bn from "utils/bemnames";
import classnames from "classnames";
import { Link } from "react-router-dom";

const bem = bn.create("page");

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b("px-3", className);

  return (
    <Tag className={classes} {...restProps}>
      <div className={bem.e("header")}>
        {title && typeof title === "string" ? (
          <h1 className={bem.e("title")}>{title}</h1>
        ) : (
          title
        )}
        {breadcrumbs && (
          <nav className={bem.e("breadcrumb")} arial-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {breadcrumbs.length &&
                breadcrumbs.map(({ name, active, goTo }, index) => (
                  <li
                    key={index}
                    className={classnames("breadcrumb-item", {
                      active: active,
                    })}
                  >
                    {goTo && <Link to={goTo}>{name}</Link>}
                    {!goTo && name}
                  </li>
                ))}
            </ol>
          </nav>
        )}
      </div>
      {children}
    </Tag>
  );
};

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
};

Page.defaultProps = {
  tag: "div",
  title: "",
};

export default Page;
