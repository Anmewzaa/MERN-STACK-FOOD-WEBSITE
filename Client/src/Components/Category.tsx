import { useState, useEffect } from "react";
import Axios from "axios";
import { FoodType } from "../Types/FoodType";

const Category = ({ type }: { type: string }) => {
  const [foods, setFoods] = useState<FoodType[]>([]);
  useEffect(() => {
    const getData = async () => {
      await Axios.get(`${import.meta.env.VITE_API}/get`).then((data) =>
        setFoods(data.data)
      );
    };
    getData();
  }, []);

  const foodFilter = foods.filter((food) => {
    if (type === "all") {
      return food;
    }
    return food.foodType === `${type}`;
  });

  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-5">
        {foodFilter.map((food) => (
          <div key={food.foodId}>
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="md:h-[300px] h-[200px] w-[100%] object-cover rounded-lg"
            />
            <h2 className="font-bold my-4">{food.foodName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
