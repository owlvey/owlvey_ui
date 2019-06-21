const mongoose = require("mongoose");
const User = require("../models/user.model");
const Customer = require("../models/customer.model");
const Product = require("../models/product.model");
const Version = require("../models/version.model");
const Feature = require("../models/feature.model");
const Scenario = require("../models/scenario.model");
const Step = require("../models/step.model");
const Case = require("../models/case.model");
require("colors");

const databaseName = "owlvey_db";
const stringConnection = `mongodb://localhost:27017/${databaseName}`;
const mongooseOptions = { useNewUrlParser: true };
const TOTAL_STEPS = 9;
mongoose.connect(stringConnection, mongooseOptions, err => {
  if (err) {
    console.error("System could not connect to mongo server.".red);
    console.log(err.red);
  } else {
    const db = mongoose.connection;
    db.dropDatabase((e, r) => {
      promiseMessage(e, r, `DROP DATABASE - 1/${TOTAL_STEPS}`);
    });

    User.insertMany(usersData, (e, r) => {
      promiseMessage(e, r, `Insert Users - 2/${TOTAL_STEPS}`);
    });

    Customer.insertMany(customersData, (e, r) => {
      promiseMessage(e, r, `Insert Customers - 3/${TOTAL_STEPS}`);
      if (r) {
        Product.insertMany(generateProducts(r), (er, re) => {
          promiseMessage(er, re, `Insert Products - 4/${TOTAL_STEPS}`);
          if (re) {
            Version.insertMany(generateVersions(re), (err, res) => {
              promiseMessage(err, res, `Insert Versions - 5/${TOTAL_STEPS}`);
              if (res) {
                Feature.insertMany(generateFeatures(res), (erro, resp) => {
                  promiseMessage(
                    erro,
                    resp,
                    `Insert Features - 6/${TOTAL_STEPS}`,
                  );
                  if (resp) {
                    Scenario.insertMany(
                      generateScenarios(resp),
                      (error, respo) => {
                        promiseMessage(
                          error,
                          respo,
                          `Insert Scenaries - 7/${TOTAL_STEPS}`,
                        );
                        if (respo) {
                          Step.insertMany(
                            generateSteps(respo),
                            (err1, resp1) => {
                              promiseMessage(
                                err1,
                                resp1,
                                `Insert Steps - 8/${TOTAL_STEPS}`,
                              );
                              if (resp1) {
                                Case.insertMany(
                                  generateCases(resp1),
                                  (err2, resp2) => {
                                    promiseMessage(
                                      err2,
                                      resp2,
                                      `Insert Cases - 9/${TOTAL_STEPS}`,
                                    );
                                    mongoose.connection.close();
                                  },
                                );
                              }
                            },
                          );
                        }
                      },
                    );
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

const generateProducts = customers => {
  const products = [];
  customers.forEach(customer => {
    productsData.forEach(product => {
      products.push({
        ...product,
        customer_id: customer.customer_id,
        name: `${customer.name} ${product.name}`,
      });
    });
  });
  return products;
};

const generateVersions = products => {
  const versions = [];
  products.forEach(product => {
    versionsData.forEach(version => {
      versions.push({
        ...version,
        product_id: product.product_id,
        name: `${product.name.split(" ")[1]} ${version.name}`,
      });
    });
  });
  return versions;
};

const generateFeatures = versions => {
  const features = [];
  versions.forEach(version => {
    featuresData.forEach(feature => {
      features.push({
        ...feature,
        version_id: version.version_id,
        name: `${version.name.split(" ")[1]} ${feature.name}`,
      });
    });
  });
  return features;
};

const generateScenarios = features => {
  const scenarios = [];
  features.forEach(feature => {
    scenariosData.forEach(scenario => {
      scenarios.push({
        ...scenario,
        feature_id: feature.feature_id,
        name: `${feature.name.split(" ")[1]} ${scenario.name}`,
      });
    });
  });
  return scenarios;
};

const generateSteps = scenarios => {
  const steps = [];
  scenarios.forEach(scenario => {
    stepsData.forEach(step => {
      steps.push({
        ...step,
        scenario_id: scenario.scenario_id,
        name: `${scenario.name.split(" ")[1]} ${step.name}`,
      });
    });
  });
  return steps;
};

const generateCases = steps => {
  const cases = [];
  steps.forEach(step => {
    casesData.forEach(_case => {
      cases.push({
        ..._case,
        step_id: step.step_id,
        name: `${step.name.split(" ")[1]} ${_case.name}`,
      });
    });
  });
  return cases;
};

const promiseMessage = (error, result, action) => {
  if (result) console.log(`${action} - Successfully`.green);
  else {
    console.log(`Error in ${action}`.red, error);
    mongoose.connection.close();
  }
};

const usersData = [
  {
    username: "gcvalderrama@hotmail.com",
    name: "gregory valderrama",
    password: "Pa$$w0rd",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnZjxUCBxHA-lxs37wxdXjPOlVXKPCTstGF0fM8lu1H6luT0V",
  },
  {
    username: "olga984@gmail.com",
    name: "olga zegarra",
    password: "Pa$$w0rd",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnZjxUCBxHA-lxs37wxdXjPOlVXKPCTstGF0fM8lu1H6luT0V",
  },
  {
    username: "martin.pacora@gmail.com",
    name: "martin pacora",
    password: "Pa$$w0rd",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnZjxUCBxHA-lxs37wxdXjPOlVXKPCTstGF0fM8lu1H6luT0V",
  },
];

const customersData = [
  {
    name: "Owlvey",
    avatar:
      "https://res.cloudinary.com/teepublic/image/private/s--DHmd0xoT--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1500092411/production/designs/1739267_1.jpg",
  },
  {
    name: "BCP",
    avatar:
      "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042014/bcp-125anos.ai-converted.png?itok=kiH1e9T-",
  },
  {
    name: "Scotia",
    avatar:
      "http://boulevardsaintlaurent.com/custom-content/uploads/2014/05/Banque-Scotia.jpg",
  },
];

const productsData = [
  { customer_id: null, name: "Product_1" },
  { customer_id: null, name: "Product_2" },
];

const versionsData = [
  { product_id: null, name: "Version_1.0" },
  { product_id: null, name: "Version_2.0" },
];

const featuresData = [
  { version_id: null, name: "Feature_1" },
  { version_id: null, name: "Feature_2" },
];

const scenariosData = [
  { feature_id: null, name: "Scenario_1" },
  { feature_id: null, name: "Scenario_2" },
];

const stepsData = [
  { scenario_id: null, name: "Step_1" },
  { scenario_id: null, name: "Step_2" },
];

const casesData = [
  { step_id: null, name: "Chrome" },
  { step_id: null, name: "Firefox" },
];
