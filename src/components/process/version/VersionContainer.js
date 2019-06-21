import React, { useEffect } from "react";
import { connect } from "react-redux";
import VersionView from "components/process/version/VersionView";
import EmptyPage from "shared/EmptyPage";
import Loader from "shared/Loader";
import { entitySelectors, processOperations } from "ducks";
import { FaVimeo } from "react-icons/fa";

function VersionContainer({
  isLoadingVersion,
  versions,
  currentProduct,
  getVersionsByProduct,
}) {
  useEffect(() => {
    if (currentProduct.productId) {
      getVersionsByProduct(currentProduct.productId);
    }
  }, [currentProduct.productId]);

  if (isLoadingVersion) {
    return <Loader />;
  } else {
    if (versions && versions.length > 0) {
      return <VersionView versions={versions} />;
    } else {
      return (
        <EmptyPage
          icon={FaVimeo}
          message="You haven't any versions yet!"
          subMessage="Please contact your administrator."
        />
      );
    }
  }
}

function mapStateToProps(state) {
  const currentProduct =
    entitySelectors.getEntityById(state, "product", state.product.current) ||
    {};

  const versions = entitySelectors.getCollectionByIds(
    state,
    "version",
    currentProduct ? currentProduct.versions : null,
  );

  return {
    currentProduct,
    versions,
    isLoadingVersion: entitySelectors.getFetchingStatus(state, "version")
      .isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVersionsByProduct: productId =>
      dispatch(processOperations.getVersionsByProduct(productId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VersionContainer);
