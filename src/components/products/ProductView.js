import React from "react";
import Page from "shared/Page";
import classNames from "classnames";
import Avatar from "shared/Avatar";
import UserCard from "shared/UserCard";

class ProductView extends React.Component {
  state = {
    customerSelected: {},
    products: [],
    showDetail: false
  };

  handleClickCloseDetail = () => {
    this.setState({
      showDetail: false
    });
  };

  handleClickViewVersions = product => {
    const { setCurrentProduct } = this.props;
    setCurrentProduct(product);
  };

  render() {
    const { products } = this.props;
    const { customerSelected, showDetail } = this.state;
    const classCardSelected = "shadow p-3 rounded";
    const classSideCardRight =
      "card-img-overlay text-center bg-white shadow p-3";

    return (
      <Page
        className="CustomersPage position-relative"
        title="Products"
        breadcrumbs={[{ name: "Products", active: true }]}
      >
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3" key={index}>
              <UserCard
                className={classNames(
                  "bg-white",
                  customerSelected.customerId === product.customerId
                    ? classCardSelected
                    : "mt-3"
                )}
                avatar={product.avatar}
                title={product.name}
                subtitle="View Versions"
                onSubtitleClick={() => {
                  this.handleClickViewVersions(product);
                }}
                itemActions={[
                  {
                    text: "Edit Product",
                    onClick: () => {
                      this.props.openEditProductModal(product);
                    }
                  },
                  {
                    text: "Delete Product"
                  }
                ]}
              />
            </div>
          ))}
        </div>

        <div
          className={classNames(classSideCardRight, "sideCardRight-60", {
            sideCarOpen: showDetail
          })}
          style={{
            top: "-8px",
            height: "140%"
          }}
        >
          <button
            className="close"
            style={{
              position: "absolute",
              top: "0px",
              right: "10px",
              fontSize: "2rem"
            }}
            onClick={this.handleClickCloseDetail}
          >
            ×
          </button>
          <Avatar
            size={60}
            src={customerSelected.avatar}
            altText={customerSelected.name}
            className="border"
          />
          <p className="text-center card-text">
            <strong className="d-block">{customerSelected.name}</strong>
            <small className="text-muted">3 Products</small>
          </p>
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-md-4">
                <div className="flex-row card">
                  <div className="card-img-left pl-3 pt-3">
                    <Avatar
                      src={product.avatar}
                      altText={product.name}
                      size={60}
                    />
                  </div>
                  <div className="card-body text-left">
                    <h5 className="card-title font-weight-bold">
                      {product.name}
                    </h5>
                    <p className="card-text">Go to Detail</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>
    );
  }
}

export default ProductView;
