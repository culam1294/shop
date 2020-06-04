const isLogin = (state = true, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return !state;
    default:
      return state;
  }
};
export default isLogin;
