import types from "./types";
import jQuery from "jquery";

const optsFullScreen = {
  showExternalClose: true,
  showModalHeader: false,
  showModalFooter: false,
  isFullScreen: true,
};

const openModal = (componentName, opts = {}) => ({
  type: types.OPEN_MODAL,
  componentName,
  opts,
});

const openModalFullScreen = (componentName, opts = {}) => ({
  type: types.OPEN_MODAL_FULL_SCREEN,
  componentName,
  opts: { ...optsFullScreen, ...opts },
});

const closeModaStore = componentName => ({
  type: types.CLOSE_MODAL,
  componentName,
});

const closeModal = componentName => {
  jQuery(`#${componentName}`).modal("hide");
  return { type: "by-passing" };
};

const closeAllModal = () => ({ type: types.CLOSE_ALL_MODAL });

export {
  openModal,
  openModalFullScreen,
  closeModal,
  closeModaStore,
  closeAllModal,
};
