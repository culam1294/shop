const selectMenu = (state = "0", action) => {
  switch (action.type) {
    case "SELECT_MENU_X":
      return `${action.payload}`;
    default:
      return state;
  }
};
export default selectMenu;
