import types from "./types";

const initialState = {
  componentsInModal: []
};

const modalReducer = (state = initialState, action) => {
  const { componentName, opts, viewProps } = action;
  switch (action.type) {
    case types.OPEN_MODAL:
    case types.OPEN_MODAL_FULL_SCREEN:
      return {
        ...state,
        componentsInModal: [
          ...state.componentsInModal,
          { componentName, opts, viewProps }
        ]
      };
    case types.UPDATE_MODAL_OPTIONS:
      return {
        ...state,
        componentsInModal: state.componentsInModal.map(item => ({
          componentName: item.componentName,
          opts: item.componentName === componentName ? opts : item.opts,
          viewProps: item.viewProps
        }))
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        componentsInModal: state.componentsInModal.filter(
          item => item.componentName !== componentName
        )
      };
    case types.CLOSE_ALL_MODAL:
      return initialState;
    case types.MODAL_CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
