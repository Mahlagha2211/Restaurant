import { createContext, useEffect, useReducer, useState } from "react";

const FoodContex = createContext();

export const FoodProvider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [menuCategory, setMenuCategory] = useState("burger");
  const [menuFood, setMenuFood] = useState([]);
  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [reserveModal, setReserveModal] = useState(false);

  const CartAbility = (state, { type, payload }) => {
    if (type == "add") {
      const addFood = {
        id: payload.idMeal,
        name: payload.strMeal,
        imgSrc: payload.strMealThumb,
        price: 11.99,
        count: payload.count,
        totalPrice: Number((payload.count * 11.99).toFixed(2)),
      };
      setCounter(counter + payload.count);

      return [...state, addFood];
    }
    if (type == "Increment") {
      setCounter(counter + payload.count1);
      return state.map((item) =>
        item.id == payload.idMeal
          ? {
              ...item,
              count: item.count + payload.count1,
              totalPrice: Number(
                (item.totalPrice + payload.count1 * item.price).toFixed(2)
              ),
            }
          : item
      );
    }
    if (type == "Decrease") {
      state.map((item) =>
        item.id == payload.idMeal && item.count > 1
          ? setCounter(counter - 1)
          : ""
      );
      return state.map((item) =>
        item.id == payload.idMeal
          ? {
              ...item,
              count: item.count > 1 ? item.count - 1 : 1,
              totalPrice:
                item.count > 1
                  ? Number((item.totalPrice - item.price).toFixed(2))
                  : item.totalPrice,
            }
          : item
      );
    }

    if (type == "delete") {
      const x = state.map((item) => item.count);
      setCounter(counter - x[0]);
      return state.filter((item) => item.id != payload);
    }
  };
  const [cartFood, dispatch] = useReducer(CartAbility, []);

  useEffect(() => {
    let foodPrices = 0;
    cartFood.map((food) => (foodPrices += food.totalPrice));
    foodPrices = foodPrices.toFixed(2);
    setTotalPrice(foodPrices);
  }, [cartFood]);

  return (
    <FoodContex.Provider
      value={{
        food,
        setFood,
        menuCategory,
        setMenuCategory,
        menuFood,
        setMenuFood,
        cartFood,
        dispatch,
        counter,
        totalPrice,
        reserveModal,
        setReserveModal,
      }}
    >
      {children}
    </FoodContex.Provider>
  );
};

export default FoodContex;
