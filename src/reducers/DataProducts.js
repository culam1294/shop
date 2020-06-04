const initialState ={
  dataProducts: [],
  load: true,
}
const getProducts = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        dataProducts: [...action.payload],
        load: false,
      }
    default:
      return state;
  }
};
export default getProducts;
