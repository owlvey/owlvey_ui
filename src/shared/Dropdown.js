import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Avatar from "shared/Avatar";
import { TiPlus } from "react-icons/ti";

class Dropdown extends React.Component {
  handleClickItem = item => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(item);
    }
  };

  render() {
    const {
      data,
      value,
      displayMember,
      extraClassNames,
      showAvatarPerItem,
      displayAvatarMember,
      addActionText,
      onAddActionClick,
      isLoading,
    } = this.props;
    const selectedText = value ? value[displayMember] : "Select an Item";
    const selectorClasName = classnames("btn", extraClassNames, {
      "dropdown-toggle": !isLoading,
    });
    return (
      <div className="ui-selector btn-group">
        <button
          type="button"
          className={selectorClasName}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {isLoading && (
            <React.Fragment>
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="h6 text-muted">Loading...</span>
            </React.Fragment>
          )}
          {!isLoading && (
            <React.Fragment>
              {value && value[displayAvatarMember] && (
                <Avatar
                  size={25}
                  src={value[displayAvatarMember]}
                  className={"mr-2"}
                  altText={value[displayMember]}
                />
              )}
              <span>{selectedText}</span>
            </React.Fragment>
          )}
        </button>
        <div className={classnames("dropdown-menu", { "d-none": isLoading })}>
          {data.map((item, index) => (
            <a
              key={index}
              className="dropdown-item can-click"
              onClick={event => {
                this.handleClickItem(item, event);
              }}
            >
              {showAvatarPerItem && (
                <Avatar
                  src={item[displayAvatarMember]}
                  className={"mr-3"}
                  altText={item[displayMember]}
                />
              )}
              {item[displayMember]}
            </a>
          ))}
          {addActionText && (
            <React.Fragment>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item action can-click"
                onClick={onAddActionClick}
              >
                <TiPlus className="mr-2" />
                {addActionText}
              </a>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  data: PropTypes.array,
  displayMember: PropTypes.string,
  value: PropTypes.object,
  extraClassNames: PropTypes.string,
  showAvatarPerItem: PropTypes.bool,
  displayAvatarMember: PropTypes.string,
  addActionText: PropTypes.string,
  onAddActionClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

Dropdown.defaultProps = {
  showAvatarPerItem: false,
  isLoading: false,
  data: [],
};

export default Dropdown;
