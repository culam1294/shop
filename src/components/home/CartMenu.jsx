import React from "react";
import { Affix, Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CartMenu() {
  const listCart = useSelector((state) => state.list);
  const history = useHistory();
  const goToCart = () => {
    history.push("/cart");
  };

  return (
    <Affix offsetTop={15}>
      <Badge count={listCart.length} showZero>
        <Button
          onClick={() => goToCart()}
          style={{
            borderRadius: "5px",
          }}
          type="primary"
        >
          <span>CART</span>
          <ShoppingCartOutlined />
        </Button>
      </Badge>
    </Affix>
  );
}
