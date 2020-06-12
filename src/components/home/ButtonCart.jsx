import React from "react";
import { Affix, Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ButtonCart() {
  const listCart = useSelector((state) => state.list);
  const history = useHistory();
  const goToCart = () => {
    history.push("/cart");
  };

  return (
    <Affix offsetTop={15}>
      <Badge count={listCart.length} showZero>
        <Button onClick={() => goToCart()} type="primary">
          CART
          <ShoppingCartOutlined />
        </Button>
      </Badge>
    </Affix>
  );
}
