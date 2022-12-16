const INITIAL_STATE = {
  products: [],
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};