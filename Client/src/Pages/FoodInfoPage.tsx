import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { FoodType } from "../Types/FoodType";

const FoodInfoPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState<FoodType>();
  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(`${import.meta.env.VITE_API}/get/${id}`).then((data) => {
        setFood(data.data);
      });
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      <img
        src={food?.foodImage}
        alt={food?.foodName}
        className="w-1/2 rounded-lg"
      />
      <h2>{food?.foodName}</h2>
      <p>{food?.foodType}</p>
      <p>{JSON.stringify(food?.foodMaterial)}</p>
    </div>
  );
};

export default FoodInfoPage;
