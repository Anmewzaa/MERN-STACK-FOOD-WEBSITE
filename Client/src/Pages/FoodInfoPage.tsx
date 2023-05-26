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
    <div className="grid md:grid-cols-2 mt-4 gap-8">
      <div className="flex justify-center">
        <img
          src={food?.foodImage}
          alt={food?.foodName}
          className="w-[100%] rounded-lg max-h-[80vh] bg-center bg-cover"
        />
      </div>
      <div>
        <div className="mb-4">
          <h1 className="text-3xl font-bold">{food?.foodName}</h1>
        </div>
        <div className="mb-4">
          <p className="border inline-block p-2 rounded-lg border-slate-400">
            {food?.foodType}
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-3 text-3xl font-bold">คำอธิบาย</p>
          <p>{food?.foodDescription}</p>
        </div>
        <div className="mb-4">
          <p className="mb-3 text-3xl font-bold">วัสถุดิบ</p>
          <ul>
            {food?.foodMaterial.map((item) => (
              <li key={item} className="list-decimal ml-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodInfoPage;
