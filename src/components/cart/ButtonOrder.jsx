import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message, Button } from "antd";
import { orderSuccess } from "../../action/List";
import { useHistory } from "react-router-dom";

export default function ButtonOrder() {
  const listData = useSelector((state) => state.list);
  const history = useHistory();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [isButton, setIsButton] = useState(true);

  const orderNow = () => {
    setLoad(true);
    setTimeout(() => {
      dispatch(orderSuccess());
      setLoad(false);
      message.success("ORDER SUCCESSFULLY!");
      setIsButton(false);
    }, 1000);
  };
  const buttonOrderNow = () => (
    <Button onClick={() => orderNow()} loading={load} type="primary" danger>
      ORDER NOW!
    </Button>
  );
  const buttonContinueShopping = () => (
    <Button onClick={() => history.push("/")} type="primary">
      Continue Shopping!
    </Button>
  );
  return (
    <>
      {listData.length === 0
        ? buttonContinueShopping()
        : isButton
        ? buttonOrderNow()
        : buttonContinueShopping()}
    </>
  );
}
