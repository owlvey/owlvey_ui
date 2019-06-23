import types from "components/Entities/types";
import { entitySelectors } from "ducks";

const initialState = {
  user: {},
  customer: {},
  key: {},
  product: {},
  version: {},
  feature: {},
  scenario: {},
  step: {},
  case: {},
  benVersion: {},
  benFeature: {},
  benScenario: {},
  benStep: {},
  benCase: {},
  FETCHING_STATE: {
    customer: { counterError: 0 },
    key: { counterError: 0 },
    product: { counterError: 0 },
    user: { counterError: 0 },
    version: { counterError: 0 },
    feature: { counterError: 0 },
    scenario: { counterError: 0 },
    step: { counterError: 0 },
    case: { counterError: 0 },
    benVersion: { counterError: 0 },
    benFeature: { counterError: 0 },
    benScenario: { counterError: 0 },
    benStep: { counterError: 0 },
    benCase: { counterError: 0 }
  }
};

const entityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENTITY.ADD_COLLECTION: {
      const { collectionName, entities, parentOption } = action;
      if (parentOption === null) {
        return {
          ...state,
          [collectionName]: {
            ...state[collectionName],
            ...entities
          }
        };
      } else {
        const { parentCollectionName, parentId, idsChild } = parentOption;
        return entitySelectors.addItemsToCollection(collectionName, state, {
          entities,
          parentCollectionName,
          parentId,
          entityIds: idsChild
        });
      }
    }
    case types.ENTITY.UPDATE_ENTITY: {
      const { collectionName, entity, entityId } = action;
      return {
        ...state,
        [collectionName]: { ...state[collectionName], [entityId]: entity }
      };
    }
    case types.ENTITY_REQUEST_STATUS.GET_COLLECTION_START:
    case types.ENTITY_REQUEST_STATUS.GET_COLLECTION_SUCCESS:
      return {
        ...state,
        FETCHING_STATE: {
          ...state.FETCHING_STATE,
          [action.collectionName]: {
            ...state.FETCHING_STATE[action.collectionName],
            isLoading:
              action.type === types.ENTITY_REQUEST_STATUS.GET_COLLECTION_START
          }
        }
      };
    case types.ENTITY_REQUEST_STATUS.GET_COLLECTION_ERROR:
      return {
        ...state,
        FETCHING_STATE: {
          ...state.FETCHING_STATE,
          [action.collectionName]: {
            ...state.FETCHING_STATE[action.collectionName],
            isLoading: false,
            counterError: state.FETCHING_STATE[action.collectionName] + 1,
            lastMessageError: action.messageError
          }
        }
      };
    case types.ENTITY_CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};

export default entityReducer;
