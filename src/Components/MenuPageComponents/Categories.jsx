import React, { useContext, useRef, useState } from "react";
import "../../cssStyle/MenuPageStyle/Categories.css";
import FoodContex from "../../Context/FoodContex";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Categories = ({ categories }) => {
  const carouselRef = useRef(null);
  const { menuCategory, setMenuCategory } = useContext(FoodContex);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMenuCategory = (e) => {
    console.log(e.target);
    if (e.target.className == "CategoryName") {
      setMenuCategory(e.target.innerHTML);
    } else if (e.target.className == "CategoryImage") {
      setMenuCategory(e.target.title);
    } else {
      setMenuCategory(e.target.title);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  const scrollLeftHandler = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" }); // Adjust scroll distance
    }
  };

  const scrollRightHandler = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" }); // Adjust scroll distance
    }
  };

  return (
    <div className="containerOfCategory d-flex justify-content-center align-items-center">
      <IoIosArrowRoundBack
        className=" me-3 btnChangeLocation"
        onClick={scrollLeftHandler}
      />

      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="Container"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            title={category.name}
            className={`CategoryContainer ${
              menuCategory == category.name ? "categoryStyle" : ""
            }`}
            onClick={(e) => handleMenuCategory(e)}
          >
            <div
              className="CategoryImage"
              title={category.name}
              style={{
                backgroundImage: `url(${category.src})`,
              }}
            />
            <p className="CategoryName">{category.name}</p>
          </div>
        ))}
      </div>

      <IoIosArrowRoundForward
        className="ms-3 btnChangeLocation"
        onClick={scrollRightHandler}
      />
    </div>
  );
};

export default Categories;
