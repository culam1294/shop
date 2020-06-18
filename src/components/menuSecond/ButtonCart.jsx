import React from "react";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectMenuX } from "../../action/SelectMenu";
import { offModalProducts } from "../../action/ModalProducts";

export default function ButtonCart() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.list);
  const history = useHistory();
  const goToCart = () => {
    history.push("/cart");
    dispatch(selectMenuX(9));
    dispatch(offModalProducts());
  };

  return (
    <Badge count={listCart.length} showZero>
      <Button
        icon={<ShoppingCartOutlined />}
        shape="circle"
        onClick={() => goToCart()}
        type="primary"
      />
    </Badge>
  );
}
