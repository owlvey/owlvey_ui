import types from "./types";
import { normalize } from "normalizr";
import { EntitiesRegistered } from "./Schemas";

const addCollection = (collectionName, entitieList, parentOption = null) => {
  const collectionSchema = EntitiesRegistered[collectionName];
  const { entities, result: idsChild } = normalize(entitieList, [
    collectionSchema
  ]);
  if (parentOption) {
    parentOption = { ...parentOption, idsChild };
  }
  return {
    type: types.ENTITY.ADD_COLLECTION,
    collectionName,
    entities: entities[collectionName],
    parentOption
  };
};

const updateEntity = (collectionName, entity, entityId) => {
  return {
    type: types.ENTITY.UPDATE_ENTITY,
    collectionName,
    entity,
    entityId
  };
};

const getCollectionStart = collectionName => {
  return {
    type: types.ENTITY_REQUEST_STATUS.GET_COLLECTION_START,
    collectionName
  };
};

const getColletionSuccess = collectionName => {
  return {
    type: types.ENTITY_REQUEST_STATUS.GET_COLLECTION_SUCCESS,
    collectionName
  };
};

const getCollectionError = (collectionName, messageError) => {
  return {
    type: types.ENTITY_REQUEST_STATUS.GET_COLLECTION_ERROR,
    collectionName,
    messageError
  };
};

const cleanState = () => ({
  type: types.ENTITY_CLEAN_STATE
});

export {
  addCollection,
  updateEntity,
  getCollectionStart,
  getColletionSuccess,
  getCollectionError,
  cleanState
};
