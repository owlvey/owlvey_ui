import React from "react";
import PropTypes from "utils/propTypes";
import jQuery from "jquery";
import classNames from "classnames";

class Modal extends React.Component {
  setModalRef = domElement => {
    this.modalRef = domElement;
  };

  openModal = () => {
    jQuery(this.modalRef).modal("show");
  };

  closeModal = () => {
    jQuery(this.modalRef).modal("hide");
  };

  componentDidMount() {
    const { setModalEvents, autoOpen, onCloseModal } = this.props;
    const { openModal, closeModal } = this;
    if (setModalEvents) setModalEvents({ openModal, closeModal });
    if (autoOpen) jQuery(this.modalRef).modal("show");
    jQuery(this.modalRef).on("hidden.bs.modal", function(e) {
      if (onCloseModal) {
        onCloseModal();
      }
    });
  }

  render() {
    const {
      showExternalClose,
      showModalHeader,
      showModalFooter,
      title,
      isFullScreen,
      children,
      identifier,
    } = this.props;
    const modalClassNames = classNames("modal fade show", {
      "modal-backdrop-light": isFullScreen,
    });
    return (
      <div
        className={modalClassNames}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        ref={this.setModalRef}
        id={identifier}
      >
        {showExternalClose && (
          <button
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            style={{
              position: "absolute",
              top: "15px",
              right: "20px",
              fontSize: "3rem",
            }}
          >
            ×
          </button>
        )}
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {showModalHeader && (
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            <div className="modal-body">{children}</div>
            {showModalFooter && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  setModalEvents: PropTypes.func,
  showExternalClose: PropTypes.bool,
  showModalHeader: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  showModalFooter: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element,
  autoOpen: PropTypes.bool,
  onCloseModal: PropTypes.func,
  identifier: PropTypes.string,
};

Modal.defaultProps = {
  title: "Modal Title",
  showExternalClose: false,
  showModalHeader: true,
  showModalFooter: true,
  isFullScreen: false,
  autoOpen: true,
};

export default Modal;
