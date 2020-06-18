const initialState = {
  item: {},
  status: false,
};

const modalProducts = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_PRODUCTS":
      return {
        item: action.payload,
        status: true,
      };
    case "OFF_MODAL_PRODUCTS":
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};
export default modalProducts;
