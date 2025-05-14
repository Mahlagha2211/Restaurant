import { useEffect } from "react";
import "../../cssStyle/HomePageStyle/News.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

export default function News() {
  const [activeImage, setActiveImage] = useState("../../../image/pizza.jpg");
  useEffect(() => {
    const carousel = document.querySelector("#demo");

    const handleSlide = () => {
      const activeImageElement = document.querySelector(
        ".carousel-item.active img"
      );
      if (activeImageElement) {
        setActiveImage(activeImageElement.src);
      }
    };

    carousel.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      carousel.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);
  return (
    <div className="newsContainer">
      <div
        className="blurredBackground"
        style={{ backgroundImage: `url(${activeImage})` }}
      ></div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../../../image/pizza.jpg" alt="" />
            <div className="carousel-caption ">
              <p>Los Angeles</p>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../../image/chicken.jpg" alt="" />
            <div className="carousel-caption">
              <p>Los Angeles</p>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../../image/food1.jpg" alt="" />
            <div className="carousel-caption">
              <p>Los Angeles</p>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
        </div>

        <button
          className="carouselPrev carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <GrPrevious style={{ color: "#000000" }} />
        </button>
        <button
          className="carouselNext carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <GrNext style={{ color: "#000000" }} />
        </button>
      </div>
    </div>
  );
}
