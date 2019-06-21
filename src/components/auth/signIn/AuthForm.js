import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import classnames from "classnames";

class AuthForm extends React.Component {
  state = {
    formData: {},
    isSubmitting: false,
    messageError: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { userName, password } = this.state.formData;
    this.setState({
      isSubmitting: true,
      messageError: null,
    });
    this.props
      .onLoginClick(userName, password)
      .then(() => {
        this.props.onGoToDashboard();
      })
      .catch(error => {
        this.setState({
          isSubmitting: false,
          messageError: error.message,
        });
      });
  };

  updateForm = event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const { isSubmitting, messageError } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className={classnames({ "submitting-form": isSubmitting })}
      >
        <div className="text-center pb-4 text-primary">
          <FaUserSecret size="5em" />
        </div>
        <div className="position-relative form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            name="userName"
            className="form-control"
            onChange={this.updateForm}
          />
        </div>
        <div className="position-relative form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="your password"
            autoComplete="off"
            name="password"
            className="form-control"
            onChange={this.updateForm}
          />
          {messageError && (
            <small className="form-text text-danger">{messageError}</small>
          )}
        </div>
        <div className="position-relative form-check">
          <label>
            <input className="form-check-input" type="checkbox" />
            {"Remember me "}
          </label>
        </div>
        <hr />
        <button
          className="border-0 btn-primary btn-block btn-lg"
          onClick={this.handleSubmit}
        >
          {isSubmitting && (
            <span
              className="spinner-grow spinner-grow-sm mr-3"
              role="status"
              aria-hidden="true"
            />
          )}
          Login
        </button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            <Link to="/signup">Signup</Link>
          </h6>
        </div>
      </form>
    );
  }
}

export const STATE_LOGIN = "LOGIN";
export const STATE_SIGNUP = "SIGNUP";

AuthForm.propTypes = {
  onLogoClick: PropTypes.func,
};

export default AuthForm;
