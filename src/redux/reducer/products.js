// import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCT,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return { ...state, loading: true, error: null };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
     case LOAD_PRODUCT + REQUEST:
      return { ...state, loading: true, error: null };
    case LOAD_PRODUCT + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCT + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
