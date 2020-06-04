import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
import "./Carousel.css";

export default function CarouselHome() {
  const data = useSelector((state) => state.data.dataProducts);
  const image = data.map((item,key) => (
    <div key={key}>
      <img src={item.image} alt="img"/>
    </div>
  ));
  return (
    <Carousel effect="fade" autoplay>
      {image}
    </Carousel>
  );
}
