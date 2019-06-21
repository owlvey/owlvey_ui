import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
let timeoutKeyPress = null;

function Autocomplete({
  extraClassNames,
  onSearch,
  displayMember,
  waitMs,
  onSelectItem,
  onClearItem,
}) {
  const selectorClasName = classnames(extraClassNames);

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const handleOnKeyUp = () => {
    if (timeoutKeyPress) {
      clearTimeout(timeoutKeyPress);
      timeoutKeyPress = null;
    }
    if (onClearItem) {
      onClearItem();
    }
    timeoutKeyPress = setTimeout(() => {
      onSearch(text).then(result => {
        setItems(result);
      });
    }, waitMs);
  };

  const handleSelectItem = itemSelected => {
    setText(itemSelected[displayMember]);
    if (onSelectItem) {
      onSelectItem(itemSelected);
    }
  };

  return (
    <div className="ui-selector btn-group">
      <input
        type="text"
        className={selectorClasName}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        value={text}
        onChange={event => setText(event.target.value)}
        onKeyUp={handleOnKeyUp}
      />
      <div className="dropdown-menu">
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
  onSearch: PropTypes.func,
};

Autocomplete.defaultProps = {
  waitMs: 500,
};

export default Autocomplete;
