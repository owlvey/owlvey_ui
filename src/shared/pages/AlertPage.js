/* eslint-disable jsx-a11y/href-no-hash */

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  UncontrolledAlert,
} from "reactstrap";

import Page from "shared/Page";

const AlertPage = () => {
  return (
    <Page title="Alerts" breadcrumbs={[{ name: "alerts", active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Alerts</CardHeader>
            <CardBody>
              <div className="alert alert-primary fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
              <div className="alert alert-secondary fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
              <div className="alert alert-success fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
              <div className="alert alert-danger fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
              <div className="alert alert-warning fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
              <div className="alert alert-info fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
              <div className="alert alert-light fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
              <div className="alert alert-dark fade show" role="alert">
                Give it a{" "}
                <a href="#" className="alert-link">
                  click
                </a>{" "}
                if you like.
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardHeader>Dismiss</CardHeader>
            <CardBody>
              <UncontrolledAlert color="primary">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="secondary">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="success">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="danger">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="warning">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="info">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="light">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="dark">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardHeader>Additional Content</CardHeader>
            <CardBody>
              <div className="alert alert-success fade show" role="alert">
                <h4 className="h4 alert-heading">Well done!</h4>
                <p className="p">
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </p>
                <hr />
                <p className="p mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default AlertPage;
