import { connect } from "react-redux";
import WorkbenchView from "components/workbench/WorkbenchView";
import { entitySelectors } from "ducks";

function mapStateToProps(state) {
  const currentProduct = entitySelectors.getEntityById(
    state,
    "product",
    state.product.current,
  );
  const versions = entitySelectors.getCollectionByIds(
    state,
    "version",
    currentProduct ? currentProduct.versions : null,
  );

  const getEntitiesByParent = (
    collectionName,
    collectionParentName,
    parentId,
  ) => {
    const parent = entitySelectors.getEntityById(
      state,
      collectionParentName,
      parentId,
    );
    return entitySelectors.getCollectionByIds(
      state,
      collectionName,
      parent[`${collectionName}s`],
    );
  };

  return {
    currentProduct,
    versions,
    getEntitiesByParent,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkbenchView);
