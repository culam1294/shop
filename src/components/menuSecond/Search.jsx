import React, { useEffect } from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchProducts } from "../../action/SearchProducts";
import { getProducts } from "../../action/DataProducts";

export default function Search(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchProducts());
  }, [dispatch]);

  const { Search } = Input;
  const dataSearch = useSelector((state) => state.searchProducts.dataProducts);
  const onSearch = (value) => {
    const listSearch = [];
    dataSearch.forEach((item) => {
      if (item.name.indexOf(value) !== -1) {
        listSearch.push(item);
      }
      if (item.description.indexOf(value) !== -1) {
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
      placeholder={props.placeholder}
      style={{ margin: "0px 15px" }}
    />
  );
}
