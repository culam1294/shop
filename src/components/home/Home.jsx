import React from "react";
import MenuSecond from "../menuSecond/MenuSecond";
import CarouselHome from "./carousel/CarouselHome";
import ProductsList from "./ProductsList";

export default function Home() {
  return (
    <>
      <MenuSecond placeholder="Search by Name, Description..."/>
      <CarouselHome />
      <ProductsList />
    </>
  );
}
