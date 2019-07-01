import React from "react";
import classnames from "classnames";

class CustomerFormView extends React.Component {
  state = {
    formData: { name: "", avatar: "" },
    isSubmitting: false,
    messageError: null
  };

  componentDidMount() {
    const { isEditMode, customer } = this.props;
    if (isEditMode) {
      this.setState({
        formData: {
          name: customer.name,
          avatar: customer.avatar || "",
          customerId: customer.customerId
        }
      });
    }
  }

  handleSubmitFormt = event => {
    event.preventDefault();
    const { submitCustomer, closeModal, isEditMode, showAlert } = this.props;
    const { formData } = this.state;
    this.setState({ isSubmitting: true, messageError: null });
    const formCustomer = {
      name: formData.name,
      avatar: formData.avatar === "" ? null : formData.avatar,
      customerId: formData.customerId
    };
    submitCustomer(formCustomer, isEditMode)
      .then(customer => {
        closeModal();
        showAlert(
          <span>
            The customer <b>{customer.name} </b> has been{" "}
            {isEditMode ? "edited " : "created "} successfully.
          </span>
        );
      })
      .catch(error => {
        this.setState({ isSubmitting: false, messageError: error.message });
      });
  };

  changeInput = event => {
    const { value, name } = event.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      },
      [`${name}Valid`]: value !== ""
    });
  };

  render() {
    const { isSubmitting, messageError, formData } = this.state;
    const { isEditMode } = this.props;
    const titleModal = isEditMode ? "Edit Customer" : "Create Customer";
    return (
      <form
        onSubmit={this.handleSubmitFormt}
        className={classnames({ "submitting-form": isSubmitting })}
      >
        <h1>{titleModal}</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={this.changeInput}
            className="form-control form-control-lg"
            aria-describedby="emailHelp"
            placeholder="Customer Name"
          />
        </div>
        <div className="form-group">
          <label>Avatar</label>
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={this.changeInput}
            className="form-control form-control-lg"
            placeholder="Avatar URL"
          />
          {messageError && (
            <small className="form-text text-danger">{messageError}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          {isSubmitting && (
            <span
              className="spinner-grow spinner-grow-sm mr-3"
              role="status"
              aria-hidden="true"
            />
          )}
          Submit
        </button>
      </form>
    );
  }
}

export default CustomerFormView;
