const INITIAL_STATE = {
  username: "",
  email: "",
  role: "",
  id: 0,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("Data dari action -->", action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
