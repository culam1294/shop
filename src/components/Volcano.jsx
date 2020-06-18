import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../action/List";
import "antd/dist/antd.css";
import { List, Card, message, Button, Tag } from "antd";
import { ShoppingCartOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MenuSecond from "./menuSecond/MenuSecond";
import ModalProducts from "./ModalProducts";
import { modalProducts } from "../action/ModalProducts";

export default function Volcano() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.dataProducts);
  const loadProducts = useSelector((state) => state.data.load);
  const listCart = useSelector((state) => state.list);

  const dataVolcano = [];
  data.forEach((item) => {
    if (item.tag.length < 5) {
      dataVolcano.push(item);
    }
  });

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

  return (
    <>
      <MenuSecond placeholder="Search in Volcano..." />
      <ModalProducts />
      <div
        style={{
          border: "0.2px solid grey",
          padding: 20,
          margin: "20px 0px",
          background: "#fff",
          borderRadius: 10,
        }}
      >
        ˇ<List
          header={
            <h3>
              <MenuUnfoldOutlined />
              Volcano Products
            </h3>
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
          dataSource={dataVolcano}
          renderItem={(item) => (
            <List.Item>
              <Card
                cover={
                  <img
                    style={{ padding: 10 }}
                    onClick={() => dispatch(modalProducts(item))}
                    alt="Products list"
                    src={item.image}
                  />
                }
                style={{ textAlign: "center" }}
                hoverable="true"
              >
                <h3
                  onClick={() => dispatch(modalProducts(item))}
                  style={{ color: "blue" }}
                >
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
