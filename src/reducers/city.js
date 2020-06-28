import { SET_CITY } from './../actions';

export const city = (state, action) => {
  if (action.type === SET_CITY) {
    return {
      ...state,
      city: action.value
    }
  }

  return state;
};
