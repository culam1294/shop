
export const modalProducts = (item) => {
  return {
    type: "MODAL_PRODUCTS",
    payload: item,
  };
};
export const offModalProducts = () => {
  return {
    type: "OFF_MODAL_PRODUCTS",
  };
};
