import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../action/List";
import "antd/dist/antd.css";
import { List, Card, message, Button, Modal, Skeleton, Avatar } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { fetchProducts } from "../../action/DataProducts";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.dataProducts);
  const loadProducts = useSelector((state) => state.data.load);
  const listCart = useSelector((state) => state.list);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
  const onClick = (item) => {
    setVisible(true);
    setId(item.id);
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setImage(item.image);
  };
  return (
    <>
      <Modal
        width={800}
        visible={visible}
        title={[
          <div style={{ display: "flex" }}>
            <h2> Product detail</h2>
          </div>,
        ]}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{ margin: 5 }}
            type="danger"
            onClick={() => sendProduct(id)}
          >
            Add to Cart <ShoppingCartOutlined />
          </Button>,
          <Button key="back" type="primary" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <h2>{name}</h2>
        <p>
          <i>Description: {description}</i>
        </p>
        <h3>Price: {price} $</h3>
        <img
          style={{ height: "100%", width: "100%", objectFit: "fill" }}
          alt="img"
          src={image}
        />
      </Modal>
      <List
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
        dataSource={data}
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
                <i>{item.description}</i>
              </div>
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
    </>
  );
}
