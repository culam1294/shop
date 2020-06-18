import { combineReducers } from "redux";
import login from "./IsLogin";
import list from "./List";
import selectMenu from "./SelectMenu";
import data from "./DataProducts";
import searchProducts from "./SearchProducts";
import modalProducts from "./ModalProducts";

const joinReducers = combineReducers({
  login: login,
  list: list,
  selectMenu: selectMenu,
  data: data,
  searchProducts: searchProducts,
  modalProducts: modalProducts,
});
export default joinReducers;
