import { useContext, useEffect, useState } from "react";
import FoodContex from "../../Context/FoodContex";
import axios from "axios";
import FoodInfo from "./FoodInfo";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
export default function Menu({ isOpen, setIsOpen }) {
  const { menuCategory, setMenuFood, menuFood } = useContext(FoodContex);

  const fetchedFoodsData = async (menuCategory) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${menuCategory}`
    );
    return response.data.meals;
  };
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["Menudata", menuCategory],
    queryFn: async () => {
      const resolvedData = await fetchedFoodsData(menuCategory);
      setMenuFood(resolvedData);
      return resolvedData;
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
    <div className="container">
      <FoodInfo isOpen={isOpen} setIsOpen={setIsOpen} MenuFood={menuFood} />
    </div>
  );
}
