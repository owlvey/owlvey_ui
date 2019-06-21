import AuthForm from "components/auth/signIn/AuthForm";
import React from "react";
import { Card, Col, Row } from "reactstrap";

class SignInView extends React.Component {
  goToDashboard = () => {
    this.props.history.push("/");
  };

  render() {
    const { doLogin } = this.props;
    return (
      <main className="cr-app bg-light">
        <div className="cr-content container-fluid">
          <Row
            style={{
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col md={6} lg={4}>
              <Card body>
                <AuthForm
                  authState={this.props.authState}
                  onGoToDashboard={this.goToDashboard}
                  onLoginClick={doLogin}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </main>
    );
  }
}

export default SignInView;
