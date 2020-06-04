import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../action/List";
import "antd/dist/antd.css";
import { List, Card, message, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { fetchProducts } from "../../action/DataProducts";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.dataProducts);
  const loadProducts = useSelector((state) => state.data.load);
  const listCart = useSelector((state) => state.list);

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

  return (
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
      pagination={{ hideOnSinglePage: true }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
            cover={
              <img
                // onClick={() => setVisible(true)}
                alt="Products list"
                src={item.image}
              />
            }
            style={{ textAlign: "center" }}
            hoverable="true"
          >
            <h3 style={{ color: "blue" }}>{item.name}</h3>
            <div style={{ height: 60 }}>{item.description}</div>
            <h3>{item.price.toLocaleString()} $</h3>
            <Button
              style={{ margin: 5 }}
              danger
              onClick={() => sendProduct(item.id)}
            >
              Add to Cart <ShoppingCartOutlined />
            </Button>
          </Card>
        </List.Item>
      )}
    />
  );
}
