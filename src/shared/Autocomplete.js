import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import jQuery from "jquery";
window.jQuery = jQuery;
let timeoutKeyPress = null;

function Autocomplete({
  onChangeInput,
  inputValue,
  extraClassNames,
  onSearch,
  displayMember,
  onSelectItem,
  onClearItem,
  waitMs,
  minCharacters,
  placeholder
}) {
  const selectorClasName = classnames(extraClassNames);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const handleOnKeyUp = () => {
    if (timeoutKeyPress) {
      clearTimeout(timeoutKeyPress);
      timeoutKeyPress = null;
    }
    if (onClearItem) {
      onClearItem();
    }
    if (inputValue.length >= minCharacters) {
      timeoutKeyPress = setTimeout(() => {
        setLoading(true);
        onSearch(inputValue)
          .then(result => {
            setItems(result);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      }, waitMs);
    } else {
      setItems([]);
    }
  };

  useLayoutEffect(() => {
    if (items.length > 0) {
      jQuery(".dropdown.ui-autocomplete > .dropdown-menu").addClass("show");
    }
  }, [items]);

  const handleSelectItem = itemSelected => {
    if (onSelectItem) {
      onSelectItem(itemSelected);
    }
  };

  const handleChangeText = event => {
    const textValue = event.target.value;
    onChangeInput(textValue);
  };

  return (
    <div className="dropdown ui-autocomplete btn-group">
      <input
        type="text"
        className={selectorClasName}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        value={inputValue}
        onChange={handleChangeText}
        onKeyUp={handleOnKeyUp}
        placeholder={placeholder}
      />
      {isLoading && (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <div
        className={classnames("dropdown-menu", { "d-none": items.length == 0 })}
      >
        {items.map((item, index) => (
          <a
            key={index}
            className="dropdown-item can-click"
            onClick={() => {
              handleSelectItem(item);
            }}
          >
            {item[displayMember]}
          </a>
        ))}
      </div>
    </div>
  );
}

Autocomplete.propTypes = {
  extraClassNames: PropTypes.string,
  onSearch: PropTypes.func
};

Autocomplete.defaultProps = {
  waitMs: 500,
  minCharacters: 3,
  items: []
};

export default Autocomplete;
