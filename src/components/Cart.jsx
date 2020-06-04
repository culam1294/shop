import React, { useState } from "react";
import { List, Button, message, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAmount,
  decrementAmount,
  removeList,
  orderSuccess,
} from "../action/List";
import { useHistory } from "react-router-dom";

export default function Cart() {
  const listData = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const history = useHistory();

  let totalBill = 0;
  listData.forEach((item) => {
    totalBill = totalBill + item.price * item.amount;
  });

  const increment = (id) => {
    listData.forEach((item) => {
      if (item.id === id) {
        dispatch(incrementAmount(id));
      }
    });
  };
  const decrement = (id) => {
    listData.forEach((item) => {
      if (item.id === id) {
        if (item.amount === 1) {
          message.info(`Amount of ${item.name} must be larger than 1`);
        }
        dispatch(decrementAmount(id));
      }
    });
  };

  const deleteList = (id) => {
    listData.forEach((item) => {
      if (item.id === id) {
        dispatch(removeList(id));
      }
    });
  };
  const [load, setLoad] = useState(false);
  const orderNow = () => {
    setLoad(true);
    setTimeout(() => {
      dispatch(orderSuccess());
      setLoad(false);
      message.success("ORDER SUCCESSFULLY!");
      setIsButton(false);
    }, 1000);
  };
  const [isButton, setIsButton] = useState(true);
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
    <List
      itemLayout="vertical"
      pagination={{ hideOnSinglePage: true }}
      dataSource={listData}
      footer={
        <div style={{ textAlign: "center" }}>
          <hr />
          <h1>
            Total Bill:
            <span style={{ color: "red",margin:5 }}>{totalBill.toLocaleString()}</span>$
          </h1>
          {listData.length === 0
            ? buttonContinueShopping()
            : isButton
            ? buttonOrderNow()
            : buttonContinueShopping()}
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.id}
          extra={
            <a href="https://github.com/">
              <img width={150} alt="logo" src={item.image} />
            </a>
          }
        >
          <List.Item.Meta />
          <h3 style={{ color: "blue" }}>{item.name}</h3>
          <h4> {item.description}</h4>
          <h4>Price {item.price.toLocaleString()} $</h4>
          <div style={{ display: "flex" }}>
            <h3>Amount</h3>
            <Button
              size="small"
              style={{ margin: "0 5px" }}
              onClick={() => decrement(item.id)}
            >
              -
            </Button>
            <h3>{item.amount}</h3>
            <Button
              size="small"
              style={{ margin: "0 5px" }}
              onClick={() => increment(item.id)}
            >
              +
            </Button>
          </div>
          <Popconfirm
            placement="bottomLeft"
            title={`Are you sure delete ${item.name} ?`}
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteList(item.id)}
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
          <hr />
        </List.Item>
      )}
    />
  );
}
