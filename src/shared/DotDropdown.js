import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FaEllipsisV } from "react-icons/fa";

function DotDropdown({ items, extraClassNames }) {
  const selectorClasName = classnames("btn", extraClassNames);
  return (
    <div className="ui-selector btn-group">
      <button
        type="button"
        className={selectorClasName}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FaEllipsisV />
      </button>
      <div className="dropdown-menu">
        {items.map((item, index) => (
          <a
            key={index}
            className="dropdown-item can-click"
            onClick={item.onClick}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}

DotDropdown.propTypes = {
  items: PropTypes.array,
  extraClassNames: PropTypes.string,
};

DotDropdown.defaultProps = {
  items: [],
};

export default DotDropdown;
