import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { FoodType } from "../Types/FoodType";
import { checkToken } from "../Services/Authorize";
import Swal from "sweetalert2";

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

  const deleteFood = async (foodid: string) => {
    await Axios.delete(`${import.meta.env.VITE_API}/delete/${foodid}`, {
      headers: {
        Authorization: `Bearer ${checkToken()}`,
      },
    }).then((data) => {
      console.log(data);
    });
  };

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
          <div key={food.foodId}>
            <img
              onClick={() => navigate(`/menu/${food.foodId}`)}
              src={food.foodImage}
              alt={food.foodName}
              className="md:h-[300px] h-[200px] w-[100%] object-cover rounded-lg"
            />
            <div className="flex justify-between items-center mt-4 mb-3 mx-1">
              <h2
                className="font-bold"
                onClick={() => navigate(`/menu/${food.foodId}`)}
              >
                {food.foodName}
              </h2>
              {!checkToken() ? (
                <>
                  <p
                    className={`inline-block p-2 rounded-lg ${
                      food.foodType === "อาหารเพื่อสุขภาพ" ? "bg-lime-200" : ""
                    } ${food.foodType === "อาหารเช้า" ? "bg-yellow-200" : ""} ${
                      food.foodType === "อาหารเที่ยง" ? "bg-yellow-200" : ""
                    } ${food.foodType === "อาหารเย็น" ? "bg-yellow-200" : ""} ${
                      food.foodType === "ขนมหวาน" ? "bg-pink-200" : ""
                    }${food.foodType === "เครื่องดื่ม" ? "bg-sky-200" : ""}`}
                  >
                    {food.foodType}
                  </p>
                </>
              ) : (
                <>
                  <div className="inline-block">
                    <button
                      className="rounded-lg px-4 py-1.5 mr-2 border-2 border-sky-200"
                      onClick={() => navigate(`/edit/${food.foodId}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded-lg px-4 py-1.5 border-2 border-red-200 cursor-pointer"
                      onClick={() => {
                        Swal.fire({
                          title: "ต้องการลบหรือไม่",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonText: "Yes",
                          cancelButtonText: "No",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteFood(food.foodId);
                            Swal.fire(
                              "Deleted!",
                              "ลบเรียบร้อยเเล้ว",
                              "success"
                            ).then(() => {
                              window.location.reload();
                            });
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
