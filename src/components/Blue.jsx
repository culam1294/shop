import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../action/List";
import "antd/dist/antd.css";
import { List, Card, message, Button, Modal, Tag } from "antd";
import { ShoppingCartOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ButtonCart from "./menuSecond/ButtonCart";
import MenuSecond from "./menuSecond/MenuSecond";

export default function Type3() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.dataProducts);
  const dataType1 = [];

  data.forEach((item) => {
    if (item.tag.length > 5) {
      dataType1.push(item);
    }
  });

  const loadProducts = useSelector((state) => state.data.load);
  const listCart = useSelector((state) => state.list);
  const [visible, setVisible] = useState(false);

  const sendProduct = (id) => {
    listCart.forEach((e) => {
      if (e.id === id) {
        id = null;
        message.info(`${e.name} is already in cart`);
      }
    });
    data.forEach((item) => {
      if (item.id === id) {
        dispatch(addList(item));
      }
    });
  };
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
      <MenuSecond placeholder="Search in Blue..." />
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
            <Button type="danger" onClick={() => sendProduct(id)}>
              Add to Cart <ShoppingCartOutlined />
            </Button>
            <Button
              style={{ margin: "0px 10px" }}
              type="primary"
              onClick={handleCancel}
            >
              Return
            </Button>
            <ButtonCart />
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
      <div
        style={{
          border: "0.2px solid grey",
          padding: 20,
          margin: "20px 0px",
          background: "#fff",
          borderRadius: 10,
        }}
      >
        <List
          header={
            <h2>
              <MenuUnfoldOutlined />
              Blue Products
            </h2>
          }
          grid={{
            gutter: 10,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 4,
          }}
          loading={loadProducts}
          pagination={{ hideOnSinglePage: true, defaultPageSize: 20 }}
          dataSource={dataType1}
          renderItem={(item) => (
            <List.Item>
              <Card
                cover={
                  <img
                    onClick={() => onClick(item)}
                    alt="Products list"
                    src={item.image}
                  />
                }
                style={{ textAlign: "center" }}
                hoverable="true"
              >
                <h3 onClick={() => onClick(item)} style={{ color: "blue" }}>
                  {item.name}
                </h3>
                <div style={{ height: 60 }}>
                  <i>Description: {item.description}</i>
                </div>

                <span>Tag: </span>
                {item.tag.length < 5 ? (
                  <Tag color="volcano">{item.tag}</Tag>
                ) : item.tag.length === 5 ? (
                  <Tag color="green">{item.tag}</Tag>
                ) : (
                  <Tag color="blue">{item.tag}</Tag>
                )}

                <h3>{item.price.toLocaleString()} $</h3>
                <Button
                  style={{ margin: 5 }}
                  type="danger"
                  onClick={() => sendProduct(item.id)}
                >
                  Add to Cart <ShoppingCartOutlined />
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
