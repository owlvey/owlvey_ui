import React from "react";
import Page from "shared/Page";

class Account extends React.Component {
  state = {
    formData: { name: "", username: "", avatar: "" }
  };

  componentDidMount() {
    this.setState({
      formData: this.props.user
    });
  }

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      formData: { ...this.state.formData, [name]: value }
    });
  };

  render() {
    const { formData } = this.state;
    return (
      <Page title="Account" breadcrumbs={[{ name: "Account", active: true }]}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmail">Name</label>
                  <input
                    value={formData.name}
                    name="name"
                    placeholder="Name"
                    type="text"
                    onChange={this.handleChangeInput}
                    className="form-control form-control-lg"
                    readOnly={true}
                  />
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmail">User name</label>
                  <input
                    value={formData.username}
                    name="username"
                    placeholder="User Name"
                    type="text"
                    onChange={this.handleChangeInput}
                    className="form-control form-control-lg"
                    readOnly={true}
                  />
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmail">Avatar</label>
                  <input
                    value={formData.avatar}
                    name="avatar"
                    placeholder="Avatar"
                    type="text"
                    onChange={this.handleChangeInput}
                    className="form-control form-control-lg"
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Account;
