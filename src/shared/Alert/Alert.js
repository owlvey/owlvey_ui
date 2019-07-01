import React from "react";
import jQuery from "jquery";

function Alert({ identifier, onCloseAlert, type, children }) {
  const handleRef = el => {
    jQuery(el).on("closed.bs.alert", () => {
      onCloseAlert(el.id);
    });
  };
  return (
    <div
      id={identifier}
      className={`ui-Alert alert alert-${type} alert-dismissible`}
      role="alert"
      ref={handleRef}
    >
      {children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

Alert.defaultProps = {
  type: "success"
};

export default Alert;
