import { combineReducers } from "redux";
import login from "./IsLogin";
import list from "./List";
import selectMenu from "./SelectMenu";
import data from './DataProducts';
import searchProducts from './SearchProducts'

const joinReducers = combineReducers({
  login: login,
  list: list,
  selectMenu: selectMenu,
  data: data,
  searchProducts: searchProducts,
});
export default joinReducers;
