import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
import "./Carousel.css";

export default function CarouselHome() {
  const dataCarousel = useSelector((state) => state.data.dataProducts);
  const dataCarouselNew = [];
  dataCarousel.forEach((element) => {
    if (element.id < 6) {
      dataCarouselNew.push(element);
    }
  });

  return (
    <Carousel effect="fade" autoplay>
      {dataCarouselNew.map((item, key) => (
        <div key={key}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
            src={item.image}
            alt="img"
          />
        </div>
      ))}
    </Carousel>
  );
}
