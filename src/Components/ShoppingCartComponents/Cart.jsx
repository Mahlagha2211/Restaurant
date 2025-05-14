import { useContext, useEffect, useState } from "react";
import FoodContex from "../../Context/FoodContex";
import styles from "../../cssStyle/ShoppingCartPageStyle/Cart.module.css";
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BeatLoader } from "react-spinners";

export default function Cart() {
  const { cartFood, dispatch } = useContext(FoodContex);
  const [loader, setLoader] = useState(null);
   const handlePlusMinus = async (e, operator) => {
    const countFood = cartFood.find((item) => item.id == e.id);
    if (operator == "Decrease" && countFood.count  <= 1) {
      return
    } else {
      const newAdd = {  idMeal: e.id, count1:1 };
      setLoader(e.id);

      setTimeout(() => {
        dispatch({ type: operator, payload: newAdd }); // Dispatch the action
        setLoader(null); // Stop the loader
      }, 300);
    }
  }; 
  

  return (
    <ul className={`${styles.orderItems} px-0`}>
      {cartFood.map((item) => (
        <li key={item.id} className={`row   ${styles.rows}`}>
          <div
            className={`${styles.imgItem} col-8   d-flex  align-items-center `}
          >
            <RxCross2
              id={item.id}
              className={styles.cancle}
              onClick={(e) =>
                dispatch({ type: "delete", payload: e.currentTarget.id })
              }
            />
            <img src={item.imgSrc} alt="" />
            <div className="col-7">
              <p className="ms-3">{item.name}</p>
            </div>
          </div>
          <div className={`${styles.calculate} col-4  `}>
            <div className={`${styles.Price} `}>{item.totalPrice}$</div>
            <div className={`${styles.count}  `}>
              <FaMinus
                className={styles.minusPlus}
                id={item.id}
                
                onClick={(e) => handlePlusMinus(e.currentTarget, "Decrease")}
              />
              <span >
                {loader == item.id ? <BeatLoader size={3} /> :  item.count}
              </span>
              <FaPlus
                onClick={(e) => handlePlusMinus(e.currentTarget, "Increment")}
                className={styles.minusPlus}
                id={item.id}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
