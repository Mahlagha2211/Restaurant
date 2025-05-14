import styles from "./../cssStyle/HomePageStyle/HomePage.module.css";
import Explain from "../Components/HomePageComponents/Explain";
import FoodSample from "../Components/HomePageComponents/FoodSample";
import Nav from "../Components/Nav";
import News from "../Components/HomePageComponents/News";
import Footer from "../Components/HomePageComponents/Footer";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Reserve from "../Components/Reserve";

export default function HomePage() {
  const { pathname1 } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname1]);
  return (
    <div className={`${styles.fadeIn}`}>
      <Reserve />
      <NavLink className={`${styles.fixedMenu}`} to="/Menu">Menu</NavLink>
      <div className={`${styles.back}`}>
        <Nav />
        <Explain />
        <FoodSample />
      </div>
      <News />
      <Footer />
    </div>
  );
}
