export const addList = (item) => {
  return {
    type: "ADD_LIST",
    payload: item,
  };
};
export const removeList = (id) => {
  return {
    type: "REMOVE_LIST",
    payload: id,
  };
};
export const incrementAmount = (id) => {
  return {
    type: "INCREMENT_AMOUNT",
    payload: id,

  };
};
export const decrementAmount = (id) => {
  return {
    type: "DECREMENT_AMOUNT",
    payload: id,

  };
};
export const orderSuccess = (id) => {
  return {
    type: "ORDER_SUCCESS",
  };
};
