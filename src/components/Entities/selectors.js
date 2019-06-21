import { denormalize } from "normalizr";
import { EntitiesRegistered } from "./Schemas";

function getEntityById(state, collectionName, id) {
  return state.entity[collectionName][id];
}

function getCollection(state, collectionName) {
  return Object.values(state.entity[collectionName]);
}

function getCollectionByIds(state, collectionName, idList, plain = true) {
  if (!idList) return [];
  const input = { [collectionName]: idList };
  const schema = {
    [collectionName]: [
      EntitiesRegistered[`${collectionName}${plain ? "Plain" : ""}`],
    ],
  };
  const entities = {
    [collectionName]: state.entity[collectionName],
  };
  const denormalizedData = denormalize(input, schema, entities);
  return denormalizedData[collectionName];
}

function addItemsToCollection(
  collectionName,
  entitiesState,
  { entities, parentCollectionName, parentId, entityIds },
) {
  const pluralCollectionName = `${collectionName}s`;
  const parent = {
    ...entitiesState[parentCollectionName][parentId],
    [pluralCollectionName]: [
      ...new Set([
        ...entitiesState[parentCollectionName][parentId][pluralCollectionName],
        ...entityIds,
      ]),
    ],
  };
  const newState = {
    ...entitiesState,
    [parentCollectionName]: {
      ...entitiesState[parentCollectionName],
      [parentId]: parent,
    },
    [collectionName]: {
      ...entitiesState[collectionName],
      ...entities,
    },
  };
  return newState;
}

function getFetchingStatus(state, collectionName) {
  return state.entity.FETCHING_STATE[collectionName];
}

export {
  getCollection,
  getEntityById,
  getCollectionByIds,
  addItemsToCollection,
  getFetchingStatus,
};
