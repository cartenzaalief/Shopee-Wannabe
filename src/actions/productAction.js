export const getProductAction = (data) => {
  return {
    type: "GET_PRODUCT",
    payload: data,
  };
};
