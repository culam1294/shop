import { combineReducers } from "redux";
import login from "./IsLogin";
import list from "./List";
import selectMenu from "./SelectMenu";
import data from "./DataProducts";
import dataNotifications from "./DataNotifications";
import searchProducts from "./SearchProducts";
import modalProducts from "./ModalProducts";

const joinReducers = combineReducers({
  login: login,
  list: list,
  selectMenu: selectMenu,
  data: data,
  dataNotifications: dataNotifications,
  searchProducts: searchProducts,
  modalProducts: modalProducts,
});
export default joinReducers;
