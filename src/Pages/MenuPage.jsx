import style from "../cssStyle/HomePageStyle/HomePage.module.css";
import Nav from "../Components/Nav";
import Categories from "../Components/MenuPageComponents/Categories";
import Menu from "../Components/MenuPageComponents/Menu";
import Footer from "../Components/HomePageComponents/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Reserve from "../Components/Reserve";
import Special from "../Components/MenuPageComponents/Special";

export default function MenuPage() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 1, name: "breakfast", src: "../../image/foodIcon/breakfast.png" },
    { id: 2, name: "pizza", src: "../../image/foodIcon/pizza.png" },
    { id: 3, name: "burger", src: "../../image/foodIcon/burger.png" },
    { id: 4, name: "Sandwich", src: "../../image/foodIcon/sandwich.png" },
    { id: 5, name: "steak", src: "../../image/foodIcon/steak.png" },
    { id: 6, name: "chicken", src: "../../image/foodIcon/chicken.png" },
    { id: 7, name: "taco", src: "../../image/foodIcon/taco.png" },
    { id: 8, name: "sushi", src: "../../image/foodIcon/sushi.png" },
    { id: 9, name: "soup", src: "../../image/foodIcon/soup.png" },
    { id: 10, name: "salad", src: "../../image/foodIcon/salad.png" },
    { id: 11, name: "cake", src: "../../image/foodIcon/cake.png" },
    { id: 12, name: "shake", src: "../../image/foodIcon/shake.png" },
    { id: 13, name: "coffee", src: "../../image/foodIcon/coffee.png" },
    { id: 14, name: "fruit", src: "../../image/foodIcon/fruit.png" },
  ];
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={`${style.fadeIn} `}>
      <Reserve isOpen={isOpen} />
      <div className={`${style.back}`} style={{ minHeight: "100vh" }}>
        <Nav />
        <Categories categories={categories} />
        <Special />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Footer />
    </div>
  );
}
