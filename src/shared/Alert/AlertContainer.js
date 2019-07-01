import React from "react";
import Alert from "./Alert";
import { connect } from "react-redux";
import { alertActions } from "ducks";

function AlertContainer({ alertList, closeAlert }) {
  return (
    <div className="alertContainer">
      {alertList.map(alert => (
        <div key={alert.identifier}>
          <Alert identifier={alert.identifier} onCloseAlert={closeAlert}>
            {alert.message}
          </Alert>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const { alertList } = state.alertContainer;

  return {
    alertList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeAlert: identifier => {
      dispatch(alertActions.closeAlert(identifier));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertContainer);
