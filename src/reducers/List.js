const initialState = {
  cart: [],
};
const Cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const product = action.payload;

      return [...state, product];
    }
    case "REMOVE_LIST": {
      const id = action.payload;
      const newList = state.filter((item) => item.id !== id);
      return newList;
    }
    case "INCREMENT_AMOUNT": {
      const id = action.payload;
      state.forEach((e) => {
        if (e.id === id) {
          e.amount++;
        }
      });
      return [...state];
    }
    case "DECREMENT_AMOUNT": {
      const id = action.payload;
      state.forEach((e) => {
        if (e.id === id) {
          if (e.amount > 1) {
            e.amount--;
          }
        }
      });
      return [...state];
    }
    case "ORDER_SUCCESS": {
      return [];
    }
    default:
      return state;
  }
};

export default Cart;
