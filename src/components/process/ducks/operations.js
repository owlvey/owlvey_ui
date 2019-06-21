import request from "helper/request";
import { entityActions } from "ducks";

const getVersionsByProduct = productId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("version"));
    return request
      .get(`${apiUrl}/versions?product_id=${productId}`)
      .then(versions => {
        dispatch(
          entityActions.addCollection("version", versions, {
            parentCollectionName: "product",
            parentId: productId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("version"));
        return versions;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("version", error.message));
        throw error;
      });
  };
};

const getFeaturesByVersion = versionId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("feature"));
    return request
      .get(`${apiUrl}/features?version_id=${versionId}`)
      .then(features => {
        dispatch(
          entityActions.addCollection("feature", features, {
            parentCollectionName: "version",
            parentId: versionId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("feature"));
        return features;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("feature", error.message));
      });
  };
};

const getScenariosByFeature = featureId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("scenario"));
    return request
      .get(`${apiUrl}/scenarios?feature_id=${featureId}`)
      .then(scenarios => {
        dispatch(
          entityActions.addCollection("scenario", scenarios, {
            parentCollectionName: "feature",
            parentId: featureId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("scenario"));
        return scenarios;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("scenario", error.message));
      });
  };
};

const getStepsByScenario = scenarioId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("step"));
    return request
      .get(`${apiUrl}/steps?scenario_id=${scenarioId}`)
      .then(steps => {
        dispatch(
          entityActions.addCollection("step", steps, {
            parentCollectionName: "scenario",
            parentId: scenarioId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("step"));
        return steps;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("step", error.message));
      });
  };
};

const getStepById = stepId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("step"));
    return request
      .get(`${apiUrl}/steps/${stepId}`)
      .then(step => {
        //dispatch(entityActions.updateStepItem(step));
        dispatch(entityActions.updateEntity("step", step, stepId));
        dispatch(entityActions.getColletionSuccess("step"));
        return step;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("step", error.message));
      });
  };
};

const getCasesByStep = stepId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("case"));
    return request
      .get(`${apiUrl}/cases?step_id=${stepId}`)
      .then(cases => {
        dispatch(
          entityActions.addCollection("case", cases, {
            parentCollectionName: "step",
            parentId: stepId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("case"));
        return cases;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("case", error.message));
      });
  };
};

const getStepTramaByProduct = (productId, forceLoad = false) => {
  return (dispatch, getState) => {
    const hasVersions =
      getState().entity.product[productId].versions.length > 0;
    if (hasVersions && forceLoad === false) return;
    dispatch(getVersionsByProduct(productId)).then(versions => {
      if (versions) {
        versions.forEach(version => {
          dispatch(getFeaturesByVersion(version.versionId)).then(features => {
            if (features) {
              features.forEach(feature => {
                dispatch(getScenariosByFeature(feature.featureId)).then(
                  scenarios => {
                    if (scenarios) {
                      scenarios.forEach(scenario => {
                        dispatch(getStepsByScenario(scenario.scenarioId)).then(
                          steps => {
                            if (steps) {
                              dispatch(getCasesByStep(steps[0].stepId));
                              // steps.forEach(step => {
                              //   dispatch(getCasesByStep(step.stepId));
                              // });
                            }
                          },
                        );
                      });
                    }
                  },
                );
              });
            }
          });
        });
      }
    });
  };
};

export {
  getVersionsByProduct,
  getFeaturesByVersion,
  getScenariosByFeature,
  getStepsByScenario,
  getCasesByStep,
  getStepTramaByProduct,
  getStepById,
};
