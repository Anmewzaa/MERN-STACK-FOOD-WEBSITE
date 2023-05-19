import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { FoodType } from "../Types/FoodType";

const MenuPage = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      await Axios.get(`${import.meta.env.VITE_API}/get`).then((data) =>
        setFoods(data.data)
      );
    };
    getData();
  }, []);

  const searchFilter = foods.filter((food) => {
    if (search === "") {
      return food;
    }
    return food.foodName.includes(search) || food.foodType.includes(search);
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="กรอกชื่ออาหาร หรือ ชนิดอาหาร"
          className="border w-full mb-4 p-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-5 cursor-pointer">
        {searchFilter.map((food) => (
          <div
            key={food.foodId}
            onClick={() => navigate(`/menu/${food.foodId}`)}
          >
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

export default MenuPage;
