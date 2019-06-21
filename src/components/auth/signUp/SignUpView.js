import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

class SignInView extends React.Component {
  state = {
    isSubmitting: false,
    messageError: null,
  };

  updateForm = event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { createUser } = this.props;
    const { formData } = this.state;
    this.setState({
      isSubmitting: true,
      messageError: null,
    });
    createUser(formData)
      .then(() => {
        this.props.history.push("/login");
      })
      .catch(() => {
        this.setState({
          messageError: "There is an error when try to create the user.",
          isSubmitting: false,
        });
      });
  };

  render() {
    const { isSubmitting, messageError, formData } = this.state;
    return (
      <main className="cr-app bg-light">
        <div className="cr-content container-fluid">
          <div
            className="row"
            style={{
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <h5 className="card-header">Register</h5>
                <div className="card-body">
                  <form
                    onSubmit={this.handleSubmit}
                    className={classnames({ "submitting-form": isSubmitting })}
                  >
                    <div className="position-relative form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className="form-control"
                        onChange={this.updateForm}
                      />
                    </div>
                    <div className="position-relative form-group">
                      <label htmlFor="Email">Avatar URL</label>
                      <input
                        type="text"
                        placeholder="Avatar URL"
                        name="avatar"
                        className="form-control"
                        onChange={this.updateForm}
                      />
                    </div>
                    <div className="position-relative form-group">
                      <label htmlFor="Email">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        name="username"
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
                        <small className="form-text text-danger">
                          {messageError}
                        </small>
                      )}
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
                      Register
                    </button>
                    <div className="text-center pt-1">
                      <h6>or</h6>
                      <h6>
                        <Link to="/sigin">Go to Login</Link>
                      </h6>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default SignInView;
