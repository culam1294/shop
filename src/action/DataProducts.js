import fetchProductsApi from "../api/CallApi";

export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetchProductsApi('get','products',null);
    dispatch(getProducts(res.data));
  };
};

export const getProducts = (products) => ({
  type: "GET_PRODUCTS",
  payload: products,
});

