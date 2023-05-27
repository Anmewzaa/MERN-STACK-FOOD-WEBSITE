import { useState, useEffect } from "react";
import Axios from "axios";
import { FoodType } from "../Types/FoodType";
import Card from "../Components/Card";

const MainPage = () => {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [breakfast, setฺreakfast] = useState<FoodType[]>([]);
  const [cleanFood, setCleanFood] = useState<FoodType[]>([]);
  const [beverage, setBeverage] = useState<FoodType[]>([]);
  useEffect(() => {
    const getData = async () => {
      await Axios.get(`${import.meta.env.VITE_API}/get`).then((data) =>
        setFoods(data.data)
      );
    };
    const setSubData = async () => {
      setฺreakfast(
        foods.filter((item) => {
          return item.foodType === "อาหารเช้า";
        })
      );
      setlunchFood(
        foods.filter((item) => {
          return item.foodType === "อาหารเที่ยง";
        })
      );
      setDinnerFood(
        foods.filter((item) => {
          return item.foodType === "อาหารเย็น";
        })
      );
      setCleanFood(
        foods.filter((item) => {
          return item.foodType === "อาหารเพื่อสุขภาพ";
        })
      );
      setBeverage(
        foods.filter((item) => {
          return item.foodType === "เครื่องดื่ม";
        })
      );
    };
    getData();
    setSubData();
  }, [foods]);

  return (
    <div>
      <div className="bg-sky-200 w-full md:mb-10 md:rounded-none rounded-lg">
        <div className="grid md:grid-cols-5 md:gap-6">
          <div className="md:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="md:col-span-2 flex flex-col items-center justify-center md:my-0 my-6 md:mx-0 mx-4">
            <h2 className="text-4xl md:mb-6 my-4 font-bold">Header</h2>
            <p className="max-w-[500px] m-1 text-xl ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              architecto alias fuga voluptate in repellendus dignissimos
              expedita, id dolor possimus.
            </p>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="md:mb-4 mb-2 ">
          <h1 className="md:text-4xl text-3xl py-6 underline">อาหารเช้า</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-5">
            {breakfast.map((item) => (
              <div key={item.foodId} className="">
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="md:mb-4 mb-2">
          <h1 className="md:text-4xl text-3xl py-6 underline">
            อาหารเพื่อสุขภาพ
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-5">
            {cleanFood.map((item) => (
              <div key={item.foodId} className="">
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="md:mb-4 mb-10">
          <h1 className="md:text-4xl text-3xl py-6 underline">เครื่องดื่ม</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-5">
            {beverage.map((item) => (
              <div key={item.foodId} className="">
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
