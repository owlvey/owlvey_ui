import React from "react";
import Page from "shared/Page";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class Account extends React.Component {
  state = {
    keys: [],
    formData: { name: "", username: "", avatar: "" }
  };

  componentDidMount() {
    this.setState({
      formData: this.props.user,
    });
  }

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      formData: { ...this.state.formData, [name]: value },
    });
  };

  render() {
    const keys = this.props.keys;
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
                <div className="position-relative form-group">
                  <label> Account Application Keys </label>
                  <Table>
                    <thead>
                      <tr>
                        <th> Index </th>
                        <th> Key </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        keys.map((key, index) => (
                          <tr key={key.keyId}>
                            <td scope="row"> {index} </td>
                            <td key={key.keyId}> {key.keyId} </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                  <div>
                    <button className="btn btn-primary" onClick={this.props.addNewKey}>Add new key</button>
                  </div>
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
