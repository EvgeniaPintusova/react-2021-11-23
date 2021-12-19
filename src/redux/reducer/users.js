import produce from 'immer';
import { ADD_REVIEW } from '../constants';
import { normalizedUsers } from '../../fixtures';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = arrToMap(normalizedUsers), action) => {
  const { type, review, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
