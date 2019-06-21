import React from "react";
import { connect } from "react-redux";
import { closeModaStore } from "./ducks/actions";
import Modal from "./Modal";
import { getComponent } from "./modalComponents";
// window.openModal = openModal;
// window.openModalFullScreen = openModalFullScreen;
// window.closeAllModal = closeAllModal;
// window.closeModal2 = closeModal2;
class ModalContainer extends React.Component {
  render() {
    const { componentsInModal, closeModal } = this.props;
    return (
      <div>
        {componentsInModal.map((item, index) => {
          const metadata = getComponent(item.componentName);
          const ComponentChild = metadata && metadata.component;
          const modalProps = metadata && item.opts;
          return (
            <Modal
              key={index}
              {...modalProps}
              onCloseModal={() => closeModal(item.componentName)}
              identifier={item.componentName}
            >
              {ComponentChild && <ComponentChild />}
            </Modal>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { componentsInModal } = state.modalContainer;
  return {
    componentsInModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: componentName => {
      dispatch(closeModaStore(componentName));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContainer);
