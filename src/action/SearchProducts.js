import fetchProductsApi from "../api/CallApi";

export const fetchSearchProducts = () => {
  return async (dispatch) => {
    const res = await fetchProductsApi('get','products',null);
    dispatch(searchProducts(res.data));
  };
};

export const searchProducts = (products) => ({
  type: "SEARCH_PRODUCTS",
  payload: products,
});

