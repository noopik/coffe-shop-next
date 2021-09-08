const initialState = {
  cart_multi: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_MUTLI':
      return {
        ...state,
        cart_multi: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
