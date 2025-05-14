import React from "react";
import "../../cssStyle/MenuPageStyle/Special.css";
import { ImFire } from "react-icons/im";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import "@splidejs/react-splide/css";

const cards = [
  {
    id: 1,
    title: "pizza",
    price: 19,
    img: "../../../image/pizzafood.jpg",
  },
  { id: 2, title: "pizza ", price: 19, img: "/image/sandwich.jpg" },
  { id: 3, title: "pizza", price: 19, img: "/image/chicken1.webp" },
  { id: 4, title: "pizza", price: 19, img: "/image/pizza2.jpg" },
  { id: 5, title: "pizza", price: 19, img: "/image/pizza3.jpg" },
  { id: 6, title: "pizza", price: 19, img: "/image/pizza1.jpg" },
];

export default function Special() {
  return (
    <div className="special">
      <div className="d-flex align-items-baseline">
        <ImFire className="fire" />
        <p className="hotItems">Hot Items</p>
      </div>

      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          autoplay: true,
          pauseOnHover: true,
          speed: 1000,
          breakpoints: {
            768: {
              perPage: 2,
              perMove: 2,
            },
            1024: {
              perPage: 3,
            },
          },
        }}
        aria-label="Special Dishes"
      >
        {cards.map((item) => (
          <SplideSlide key={item.id}>
            <div className="specialConainer">
              <div className="splideNew">New</div>
              <img src={item.img} alt={item.name} className="splideImg" />
              <div className="splidedescrip d-flex align-items-center justify-content-center gap-2 ">
                <h5>{item.title}</h5>
                <h6>{item.price}$</h6>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
