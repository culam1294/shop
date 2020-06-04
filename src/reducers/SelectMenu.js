const selectMenu = (state = "0", action) => {
  switch (action.type) {
    case "SELECT_MENU_0":
      return "0";
    case "SELECT_MENU_1":
      return "1";
    case "SELECT_MENU_2":
      return "2";
    case "SELECT_MENU_X":
      return `${action.payload}`;
    default:
      return state;
  }
};
export default selectMenu;
