import request from "helper/request";
import { entityActions } from "ducks";

const getBenchmarksByProduct = productId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("benVersion"));
    return request
      .get(`${apiUrl}/benchmarks?product_id=${productId}`)
      .then(benVersions => {
        dispatch(
          entityActions.addCollection("benVersion", benVersions, {
            parentCollectionName: "product",
            parentId: productId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("benVersion"));
        return benVersions;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("benVersion", error.message));
        throw error;
      });
  };
};

const getBenchmarkFeaturesByBenId = benchmarkId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("benFeature"));
    return request
      .get(`${apiUrl}/benchmark-features?benchmark_id=${benchmarkId}`)
      .then(benFeatures => {
        dispatch(
          entityActions.addCollection("benFeature", benFeatures, {
            parentCollectionName: "benVersion",
            parentId: benchmarkId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("benFeature"));
        return benFeatures;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("benFeature", error.message));
        throw error;
      });
  };
};

const getBenchmarkScenariosByBenFeatureId = benFeatureId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("benScenario"));
    return request
      .get(`${apiUrl}/benchmark-scenarios?ben_feature_id=${benFeatureId}`)
      .then(benScenarios => {
        dispatch(
          entityActions.addCollection("benScenario", benScenarios, {
            parentCollectionName: "benFeature",
            parentId: benFeatureId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("benScenario"));
        return benScenarios;
      })
      .catch(error => {
        dispatch(
          entityActions.getCollectionError("benScenario", error.message),
        );
        throw error;
      });
  };
};

const getBenchmarkStepsByBenScenarioId = benScenarioId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("benStep"));
    return request
      .get(`${apiUrl}/benchmark-steps?ben_scenario_id=${benScenarioId}`)
      .then(benSteps => {
        dispatch(
          entityActions.addCollection("benStep", benSteps, {
            parentCollectionName: "benScenario",
            parentId: benScenarioId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("benStep"));
        return benSteps;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("benStep", error.message));
        throw error;
      });
  };
};

const getBenchmarkCasesByBenStepId = benStepId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("benCase"));
    return request
      .get(`${apiUrl}/benchmark-cases?ben_step_id=${benStepId}`)
      .then(benCases => {
        dispatch(
          entityActions.addCollection("benCase", benCases, {
            parentCollectionName: "benStep",
            parentId: benStepId,
          }),
        );
        dispatch(entityActions.getColletionSuccess("benCase"));
        return benCases;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("benCase", error.message));
        throw error;
      });
  };
};

const getBenchmarkBatch = productId => {
  return (dispatch, getState) => {
    dispatch(getBenchmarksByProduct(productId)).then(benchmarks => {
      if (benchmarks) {
        benchmarks.forEach(benchmark => {
          dispatch(getBenchmarkFeaturesByBenId(benchmark.benchmarkId)).then(
            benFeatures => {
              if (benFeatures) {
                benFeatures.forEach(benFeature => {
                  dispatch(
                    getBenchmarkScenariosByBenFeatureId(
                      benFeature.benFeatureId,
                    ),
                  ).then(benScenarios => {
                    if (benScenarios) {
                      benScenarios.forEach(benScenario => {
                        dispatch(
                          getBenchmarkStepsByBenScenarioId(
                            benScenario.benScenarioId,
                          ),
                        ).then(benSteps => {
                          if (benSteps) {
                            benSteps.forEach(benStep => {
                              dispatch(
                                getBenchmarkCasesByBenStepId(benStep.benStepId),
                              ).then(benCases => {});
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            },
          );
        });
      }
    });
  };
};

const addBenchmark = (leftVersionId, rightVersionId) => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request
      .post(`${apiUrl}/benchmarks`, {
        left_id: leftVersionId,
        right_id: rightVersionId,
      })
      .then(benchmark => {
        //   dispatch(
        //     entityActions.recieveProductList(product.customer_id, [productAdded]),
        //   );
        return benchmark;
      });
  };
};

export {
  addBenchmark,
  getBenchmarksByProduct,
  getBenchmarkBatch,
  getBenchmarkFeaturesByBenId,
  getBenchmarkScenariosByBenFeatureId,
  getBenchmarkStepsByBenScenarioId,
  getBenchmarkCasesByBenStepId,
};
