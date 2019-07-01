import types from "./types";
import uuidv1 from "uuid/v1";

const initialState = {
  alertList: []
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_ALERT:
      const { message, opts } = action;
      return {
        ...state,
        alertList: [
          ...state.alertList,
          { identifier: `u-${uuidv1()}`, message, opts }
        ]
      };
    case types.CLOSE_ALERT:
      const { identifier } = action;
      return {
        ...state,
        alertList: state.alertList.filter(
          item => item.identifier !== identifier
        )
      };
    case types.CLOSE_ALL_ALERTS:
      return initialState;
    case types.ALERT_CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};

export default alertReducer;
