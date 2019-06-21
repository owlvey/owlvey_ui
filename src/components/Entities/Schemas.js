import { schema, denormalize } from "normalizr";

const CaseEntity = new schema.Entity("case", {}, { idAttribute: "caseId" });

const CaseEntityPlain = new schema.Entity(
  "case",
  {},
  { idAttribute: "caseId" },
);

const StepEntity = new schema.Entity(
  "step",
  { cases: [CaseEntity] },
  {
    idAttribute: "stepId",
    processStrategy: item => {
      return { ...item, cases: [] };
    },
  },
);

const StepEntityPlain = new schema.Entity(
  "step",
  {},
  {
    idAttribute: "stepId",
    processStrategy: item => {
      return { ...item, cases: [] };
    },
  },
);

const ScenarioEntity = new schema.Entity(
  "scenario",
  {
    steps: [StepEntity],
  },
  {
    idAttribute: "scenarioId",
    processStrategy: item => {
      return { ...item, steps: [] };
    },
  },
);

const ScenarioEntityPlain = new schema.Entity(
  "scenario",
  {},
  {
    idAttribute: "scenarioId",
    processStrategy: item => {
      return { ...item, steps: [] };
    },
  },
);

const FeatureEntity = new schema.Entity(
  "feature",
  { scenarios: [ScenarioEntity] },
  {
    idAttribute: "featureId",
    processStrategy: item => {
      return { ...item, scenarios: [] };
    },
  },
);

const FeatureEntityPlain = new schema.Entity(
  "feature",
  {},
  {
    idAttribute: "featureId",
    processStrategy: item => {
      return { ...item, scenarios: [] };
    },
  },
);

const VersionEntity = new schema.Entity(
  "version",
  {
    features: [FeatureEntity],
  },
  {
    idAttribute: "versionId",
    processStrategy: item => {
      return { ...item, features: [] };
    },
  },
);

const VersionEntityPlain = new schema.Entity(
  "version",
  {},
  {
    idAttribute: "versionId",
    processStrategy: item => {
      return { ...item, features: [] };
    },
  },
);

const ProductEntity = new schema.Entity(
  "product",
  { versions: [VersionEntity], benVersions: [BenVersionEntity] },
  {
    idAttribute: "productId",
    processStrategy: item => {
      return { ...item, versions: [], benVersions: [] };
    },
  },
);

const ProductEntityPlain = new schema.Entity(
  "product",
  {},
  {
    idAttribute: "productId",
    processStrategy: item => {
      return { ...item, versions: [] };
    },
  },
);

const CustomerEntity = new schema.Entity(
  "customer",
  {
    products: [ProductEntity],
    users: [UserEntity],
  },
  {
    idAttribute: "customerId",
    processStrategy: item => {
      return { ...item, products: [], users: [] };
    },
  },
);

const CustomerEntityPlain = new schema.Entity(
  "customer",
  {},
  {
    idAttribute: "customerId",
    processStrategy: item => {
      return { ...item, products: [] };
    },
  },
);

const KeyEntity = new schema.Entity("key", {}, { idAttribute: "keyId" });

const BenVersionEntity = new schema.Entity(
  "benVersion",
  { benFeatures: [BenFeatureEntity] },
  {
    idAttribute: "benchmarkId",
    processStrategy: item => {
      return { ...item, benFeatures: [] };
    },
  },
);

const BenFeatureEntity = new schema.Entity(
  "benFeature",
  { benScenarios: [BenScenarioEntity] },
  {
    idAttribute: "benFeatureId",
    processStrategy: item => {
      return { ...item, benScenarios: [] };
    },
  },
);

const BenScenarioEntity = new schema.Entity(
  "benScenario",
  { benSteps: [BenStepEntity] },
  {
    idAttribute: "benScenarioId",
    processStrategy: item => {
      return { ...item, benSteps: [] };
    },
  },
);

const BenStepEntity = new schema.Entity(
  "benStep",
  { benCases: [BenCaseEntity] },
  {
    idAttribute: "benStepId",
    processStrategy: item => {
      return { ...item, benCases: [] };
    },
  },
);

const BenCaseEntity = new schema.Entity(
  "benCase",
  {},
  { idAttribute: "benCaseId" },
);

const UserEntity = new schema.Entity("user", {}, { idAttribute: "userId" });

const EntitiesRegistered = {
  key: KeyEntity,
  customer: CustomerEntity,
  product: ProductEntity,
  version: VersionEntity,
  feature: FeatureEntity,
  scenario: ScenarioEntity,
  step: StepEntity,
  case: CaseEntity,
  user: UserEntity,
  benVersion: BenVersionEntity,
  benFeature: BenFeatureEntity,
  benScenario: BenScenarioEntity,
  benStep: BenStepEntity,
  benCase: BenCaseEntity,
  stepPlain: StepEntityPlain,
  casePlain: CaseEntityPlain,
  scenarioPlain: ScenarioEntityPlain,
  featurePlain: FeatureEntityPlain,
  versionPlain: VersionEntityPlain,
  productPlain: ProductEntityPlain,
  customerPlain: CustomerEntityPlain,
};

export {
  CustomerEntity,
  KeyEntity,
  ProductEntity,
  VersionEntity,
  FeatureEntity,
  ScenarioEntity,
  StepEntity,
  CaseEntity,
  ProductEntityPlain,
  CustomerEntityPlain,
  BenVersionEntity,
  BenFeatureEntity,
  BenScenarioEntity,
  BenStepEntity,
  BenCaseEntity,
  UserEntity,
  EntitiesRegistered,
};
