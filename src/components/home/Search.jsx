import React from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../action/DataProducts";

export default function Search() {
  const { Search } = Input;
  const dataSearch = useSelector((state) => state.data.dataProducts);
  const a = dataSearch;
  
  
  const dispatch = useDispatch();

  const onSearch = (value) => {
    const listSearch = [];
    a.forEach((item) => {
      if (item.name.indexOf(value) !== -1) {
        listSearch.push(item);
      }
    });
    dispatch(getProducts(listSearch));
  };

  return (
    <Search
      allowClear="true"
      onSearch={(value) => onSearch(value)}
      enterButton
      placeholder="Search..."
      style={{ marginLeft: 15 }}
    />
  );
}
