import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      console.log("--INCREMENT--");
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      console.log("--DECREMENT--");
      return { ...state, [id]: (state[id] || 0) - 1 };
    default:
      return state;
  }
}
