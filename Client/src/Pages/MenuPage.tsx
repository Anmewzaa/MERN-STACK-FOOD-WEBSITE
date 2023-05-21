import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { FoodType } from "../Types/FoodType";
import { checkToken } from "../Services/Authorize";

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
      {checkToken() ? (
        <div className="cursor-pointer" onClick={() => navigate("/add")}>
          <button className="float-right border-2 border-slate-400 rounded-lg px-4 py-2 mb-4 hover:bg-slate-400 hover:text-white">
            Add Menu
          </button>
        </div>
      ) : (
        <></>
      )}
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
            <div className="flex justify-between items-center my-4 mx-1">
              <h2 className="font-bold">{food.foodName}</h2>
              <p
                className={`inline-block p-2 rounded-lg ${
                  food.foodType === "อาหารคลีน" ? "bg-lime-300" : ""
                } ${food.foodType === "อาหารเช้า" ? "bg-yellow-300" : ""} ${
                  food.foodType === "เครื่องดื่ม" ? "bg-sky-300" : ""
                }`}
              >
                {food.foodType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
