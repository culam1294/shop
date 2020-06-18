import React from "react";
import { Modal, Button, message } from "antd";
import ButtonCart from "./menuSecond/ButtonCart";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "../action/List";
import { offModalProducts } from "../action/ModalProducts";

export default function ModalProducts() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.list);
  const data = useSelector((state) => state.data.dataProducts);
  const status = useSelector((state) => state.modalProducts.status);

  const handleCancel = (item) => {
    dispatch(offModalProducts(item));
  };
  const itemModal = useSelector((state) => state.modalProducts.item);
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
    <Modal
      style={{ top: 40 }}
      width={750}
      visible={status}
      title={[
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3> Product details</h3>
        </div>,
      ]}
      onCancel={handleCancel}
      footer={
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="danger" onClick={() => sendProduct(itemModal.id)}>
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
      <h2>{itemModal.name}</h2>
      <p>
        <i>Description: {itemModal.description}</i>
      </p>
      <p>Detail: {itemModal.detail}</p>
      <h3>Price: {itemModal.price} $</h3>
      <img
        style={{ height: "100%", width: "100%", objectFit: "fill" }}
        alt="img"
        src={itemModal.image}
      />
    </Modal>
  );
}
