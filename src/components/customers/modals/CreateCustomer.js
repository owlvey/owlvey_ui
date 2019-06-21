import React from "react";
import classnames from "classnames";

class CreateCustomer extends React.Component {
  state = { formData: {}, isSubmitting: false, messageError: null };

  handleSubmitFormt = event => {
    event.preventDefault();
    const { createCustomer, closeModal } = this.props;
    this.setState({ isSubmitting: true, messageError: null });
    createCustomer(this.state.formData)
      .then(() => {
        closeModal();
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
        [name]: value,
      },
      [`${name}Valid`]: value !== "",
    });
  };

  render() {
    const { isSubmitting, messageError } = this.state;
    return (
      <form
        onSubmit={this.handleSubmitFormt}
        className={classnames({ "submitting-form": isSubmitting })}
      >
        <h1>Create a new Customer</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
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
          Create
        </button>
      </form>
    );
  }
}

export default CreateCustomer;
