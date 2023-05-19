import Category from "../Components/Category";
import { useState, useEffect } from "react";
import Axios from "axios";
import { FoodType } from "../Types/FoodType";

const MainPage = () => {
  const [foods, setFoods] = useState<FoodType[]>([]);
  useEffect(() => {
    const getData = async () => {
      await Axios.get(`${import.meta.env.VITE_API}/get`).then((data) =>
        setFoods(data.data)
      );
    };
    getData();
  }, []);

  return (
    <div>
      <div className=" my-3">
        <h1 className="text-4xl py-6 ">อาหารเช้า</h1>
      </div>
    </div>
  );
};

export default MainPage;
