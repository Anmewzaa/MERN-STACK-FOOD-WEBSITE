import { useEffect, useState } from "react";
import { checkToken } from "../Services/Authorize";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";

interface foodMeterialType {
  name: string;
}

const foodMeterialArrey: foodMeterialType[] = [
  {
    name: "หมู",
  },
  {
    name: "เนื้อ",
  },
  {
    name: "ไก่",
  },
  {
    name: "ผัก",
  },
  {
    name: "ไข่",
  },
];

const foodTypeArrey: foodMeterialType[] = [
  {
    name: "อาหารเช้า",
  },
  {
    name: "อาหารเที่ยง",
  },
  {
    name: "อาหารเย็น",
  },
  {
    name: "อาหารเพื่อสุขภาพ",
  },
  {
    name: "ขนมหวาน",
  },
  {
    name: "เครื่องดื่ม",
  },
];

const AddMenuPage = () => {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [material, setMaterial] = useState<string[]>([]);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    if (!checkToken()) {
      navigate("404");
    }
  }, [navigate]);

  const createFood = async () => {
    if (!(imageURL && name && description && material && type)) {
      return Swal.fire({
        title: "กรุณากรอกข้อมูลให้ครบ",
        text: "",
        icon: "warning",
      });
    }
    await Axios.post(
      `${import.meta.env.VITE_API}/create`,
      {
        foodName: name,
        foodDescription: description,
        foodImage: imageURL,
        foodMaterial: material,
        foodType: type,
      },
      {
        headers: {
          Authorization: `Bearer ${checkToken()}`,
        },
      }
    ).then(() => {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "เพิ่มรายการเรียบร้อย",
        icon: "success",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.replace("/menu");
        }
      });
    });
  };

  return (
    <div className="grid md:grid-cols-2 mt-4 gap-8">
      <div className="flex justify-center">
        <img
          src={imageURL}
          alt="food picture"
          className="w-[100%] rounded-lg max-h-[80vh] bg-center bg-cover"
        />
      </div>
      <div>
        <div className="mb-2">
          <h1 className="mb-2 text-lg font-bold">Food image</h1>
          <input
            type="text"
            placeholder="Image URL"
            className="border rounded-lg w-full p-2"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <h1 className="mb-2 text-lg font-bold">Food name</h1>
          <input
            type="text"
            placeholder="Food Name"
            className="border rounded-lg w-full p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <h1 className="mb-2 text-lg font-bold">Food description</h1>
          <textarea
            placeholder="Food Description"
            className="border rounded-lg w-full p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <h1 className="mb-2 text-lg font-bold">Food meterial</h1>
          <div className="">
            {foodMeterialArrey.map((item) => (
              <div className="mb-1" key={item.name}>
                <input
                  onClick={() => {
                    if (material.includes(`${item.name}`)) {
                      setMaterial(
                        material.filter((foodType) => {
                          return foodType !== `${item.name}`;
                        })
                      );
                    } else {
                      setMaterial([...material, `${item.name}`]);
                    }
                  }}
                  type="checkbox"
                  value={item.name}
                />
                <label className="ml-2">{item.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <h1 className="mb-2 text-lg font-bold">Food type</h1>
          {foodTypeArrey.map((item) => (
            <div
              key={item.name}
              className={`mb-1 border inline-block mr-2 ${
                item.name === `${type}` ? "bg-slate-300" : ""
              } rounded-lg`}
            >
              <input
                className="p-2"
                onClick={() => setType(`${item.name}`)}
                type="button"
                value={item.name}
              />
            </div>
          ))}
        </div>
        <button
          className="border rounded-lg px-5 py-2 mt-4 bg-green-500 text-white"
          onClick={() => createFood()}
        >
          Add
        </button>
        <button
          className="border rounded-lg px-5 py-2 mt-4 ml-2 bg-red-500 text-white"
          onClick={() => window.location.reload()}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default AddMenuPage;
