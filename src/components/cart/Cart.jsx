import React, { useState } from "react";
import { List, Button, message, Popconfirm, Modal, Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAmount,
  decrementAmount,
  removeList,
} from "../../action/List";
import ButtonOrder from "./ButtonOrder";

export default function Cart() {
  const listData = useSelector((state) => state.list);
  const dispatch = useDispatch();

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

  //Cart

  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [detail, setDetail] = useState();
  const onClick = (item) => {
    setVisible(true);
    setId(item.id);
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setImage(item.image);
    setDetail(item.detail);
  };

  return (
    <>
      <Modal
        width={750}
        visible={visible}
        title={[
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3> Product details</h3>
          </div>,
        ]}
        onCancel={handleCancel}
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ margin: "0px 10px" }}
              type="primary"
              onClick={handleCancel}
            >
              Return
            </Button>
          </div>
        }
      >
        <h2>{name}</h2>
        <p>
          <i>Description: {description}</i>
        </p>
        <p>Detail: {detail}</p>
        <h3>Price: {price} $</h3>
        <img
          style={{ height: "100%", width: "100%", objectFit: "fill" }}
          alt="img"
          src={image}
        />
      </Modal>
      <List
        locale={{
          emptyText: (
            <>
              <Empty description={false} />
              <h2>No products in the cart, please continue shopping!</h2>
            </>
          ),
        }}
        style={{ padding: 20 }}
        itemLayout="vertical"
        pagination={{ hideOnSinglePage: true }}
        dataSource={listData}
        footer={
          <div style={{ textAlign: "center" }}>
            <hr />
            <h1>
              Total Bill:
              <span style={{ color: "red", margin: 5 }}>
                {totalBill.toLocaleString()}
              </span>
              $
            </h1>
            <ButtonOrder />
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={
              <a onClick={() => onClick(item)} href>
                <img width={150} alt="logo" src={item.image} />
              </a>
            }
          >
            <List.Item.Meta />
            <a href onClick={() => onClick(item)}>
              <h3 style={{ color: "blue" }}>{item.name}</h3>
            </a>
            <h4>
              <i>description: {item.description}</i>
            </h4>
            <h4>Price: {item.price.toLocaleString()} $</h4>
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
    </>
  );
}
