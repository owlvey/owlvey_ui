import types from "./types";
import jQuery from "jquery";

const optsFullScreen = {
  showExternalClose: true,
  showModalHeader: false,
  showModalFooter: false,
  isFullScreen: true
};

const openModal = (componentName, viewProps = {}, opts = {}) => ({
  type: types.OPEN_MODAL,
  componentName,
  opts,
  viewProps
});

const updateModalOptions = (componentName, opts = {}) => ({
  type: types.UPDATE_MODAL_OPTIONS,
  componentName,
  opts
});

const openModalFullScreen = (componentName, viewProps = {}, opts = {}) => ({
  type: types.OPEN_MODAL_FULL_SCREEN,
  componentName,
  opts: { ...optsFullScreen, ...opts },
  viewProps
});

const closeModaStore = componentName => ({
  type: types.CLOSE_MODAL,
  componentName
});

const closeModal = componentName => {
  jQuery(`#${componentName}`).modal("hide");
  return { type: "by-passing" };
};

const closeAllModal = () => ({ type: types.CLOSE_ALL_MODAL });

const cleanState = () => ({ type: types.MODAL_CLEAN_STATE });

export {
  openModal,
  openModalFullScreen,
  updateModalOptions,
  closeModal,
  closeModaStore,
  closeAllModal,
  cleanState
};
