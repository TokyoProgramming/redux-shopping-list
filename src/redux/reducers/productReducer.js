import { ActionType } from '../constants/action-types';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionType.SELECTED_PRODUCTS:
      return state;
    default:
      return state;
  }
};
