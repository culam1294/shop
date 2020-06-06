const initialState = {
  dataProducts: [],
};
const searchProducts = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCTS":
      return {
        dataProducts: [...action.payload],
      };
    default:
      return state;
  }
};
export default searchProducts;
