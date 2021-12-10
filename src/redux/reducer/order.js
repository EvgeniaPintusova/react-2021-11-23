import { DECREMENT, INCREMENT, REMOVE_PRODUCT } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      console.log('--INCREMENT--');
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      console.log('--DECREMENT--');
      return state[id] <= 0
        ? { ...state, [id]: 0 }
        : { ...state, [id]: state[id] - 1 };
    case REMOVE_PRODUCT:
      console.log('--REMOVE--');
      delete state[id]; //create another action here!!!
      return state;
    default:
      return state;
  }
}
