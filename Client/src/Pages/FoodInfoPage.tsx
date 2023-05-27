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
          className="w-[100%] rounded-lg md:max-h-[80vh] max-h-[50vh] bg-center bg-cover"
        />
      </div>
      <div>
        <div className="mb-6">
          <p className="mb-3 text-2xl font-bold">ชื่ออาหาร</p>
          <p className="border p-2">{food?.foodName}</p>
        </div>
        <div className="mb-6">
          <p className="mb-3 text-2xl font-bold">ประเภทอาหาร</p>
          <p className="border p-2">{food?.foodType}</p>
        </div>
        <div className="mb-6">
          <p className="mb-3 text-2xl font-bold">คำอธิบาย</p>
          <p className="border p-2">{food?.foodDescription}</p>
        </div>
        <div className="mb-6">
          <p className="mb-3 text-2xl font-bold">วัสถุดิบ</p>
          <ul className="border p-2">
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
