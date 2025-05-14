import React from "react";
import styles from "../../cssStyle/HomePageStyle/Explain.module.css";
import SearchBar from "./SearchBar";
import Rating from "./Rating";
export default function Explain() {
  return (
    <React.Fragment>
      <main className={styles.foodName}>
        <h3>Order Healthy</h3>
        <h1>Home Made Food</h1>
        <SearchBar />
        <Rating />
      </main>
    </React.Fragment>
  );
}
