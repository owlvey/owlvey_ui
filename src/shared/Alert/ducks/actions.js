import types from "./types";

const openAlert = (message, opts = {}) => ({
  type: types.OPEN_ALERT,
  message,
  opts
});

const closeAlert = identifier => ({
  type: types.CLOSE_ALERT,
  identifier
});

const closeAllAlerts = () => ({ type: types.CLOSE_ALL_ALERTS });

const cleanState = () => ({ type: types.ALERT_CLEAN_STATE });

export { openAlert, closeAlert, closeAllAlerts, cleanState };
