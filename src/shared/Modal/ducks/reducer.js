import types from "./types";

const initialState = {
  componentsInModal: [],
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
    case types.OPEN_MODAL_FULL_SCREEN:
      return {
        ...state,
        componentsInModal: state.componentsInModal.concat(action),
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        componentsInModal:
          state.componentsInModal.find(
            item => item.componentName !== action.componentName,
          ) || [],
      };
    case types.CLOSE_ALL_MODAL:
      return state;
    default:
      return state;
  }
};

export default modalReducer;
