import { useContext } from "react";
import styles from "../../cssStyle/HomePageStyle/FoodSample.module.css";
import { useQuery } from "@tanstack/react-query";
import FoodContex from "../../Context/FoodContex";
import AnyFood from "./AnyFood";
import axios from "axios";
import { BeatLoader } from "react-spinners";

export default function FoodSample() {
  const { food, setFood } = useContext(FoodContex);

  // List of foods to fetch
  const fetchedFoods = [
    "Beetroot Soup",
    "Lamb Pilaf",
    "Cabbage Soup",
    "Potato Salad",
  ];

  // Fetch function for a single food
  const fetchFoodData = async (foodName) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
    return response.data.meals[0];
  };

  // Use useQuery to fetch all foods
  const { data, isLoading, error } = useQuery({
    queryKey: ["foodData"],
    queryFn: async () => {
      const foodPromises = fetchedFoods.map(fetchFoodData);
      return Promise.all(foodPromises);
    },
    onSuccess: (data) => {
      setFood(data); // Update context when data is fetched
    },
  });

  if (isLoading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <BeatLoader color="#e1e1e1" size={15} />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`${styles.Food} row`}>
      {data.map((foody) => (
        <AnyFood key={foody.idMeal} food={foody} />
      ))}
    </div>
  );
}
