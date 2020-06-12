import React from "react";
import "antd/dist/antd.css";
import { BackTop } from "antd";
import CarouselHome from "./carousel/Carousel";
import LoginNavbar from "./LoginNavbar";
import Search from "./Search";
import ButtonCart from "./ButtonCart";
import ProductsList from "./ProductsList";
import Notification from "./Notification";

export default function Home() {
  return (
    <>
      <BackTop />
      <div style={{ display: "flex", padding: 15, backgroundColor: "black" }}>
        <ButtonCart />
        <Search />
        <Notification />
        <LoginNavbar />
      </div>
      <CarouselHome />
      <ProductsList />
    </>
  );
}
