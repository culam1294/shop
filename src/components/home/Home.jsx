import React from "react";
import "antd/dist/antd.css";
import { BackTop, Space } from "antd";
import CarouselHome from "./carousel/Carousel";
import LoginNavbar from "./LoginNavbar";
import Search from "./Search";
import CartMenu from "./CartMenu";
import ProductsList from "./ProductsList";

export default function Home() {
  return (
    <>
      <BackTop />
      <Space style={{ margin: 7 }}>
        <CartMenu />
        <Search/>
        <LoginNavbar />
      </Space>
      <CarouselHome />
      <ProductsList />
    </>
  );
}
