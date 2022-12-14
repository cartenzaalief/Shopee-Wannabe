const INITIAL_STATE = {
  id: 0,
  username: "",
  email: "",
  role: "user",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("Data dari fungsi action ==>", action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
