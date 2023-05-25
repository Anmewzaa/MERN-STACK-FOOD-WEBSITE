import { useEffect, useState } from "react";
import { checkToken } from "../Services/Authorize";
import { useNavigate } from "react-router-dom";

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
  const [meterial, setMeterial] = useState<string[]>([]);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    if (!checkToken()) {
      navigate("404");
    }
  }, [navigate]);

  return (
    <div className="grid grid-cols-2 mt-4 gap-8">
      <div className="flex justify-center">
        <img
          src={imageURL}
          alt="food picture"
          className="w-[100%] rounded-lg max-h-[80vh] bg-center bg-cover"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit form");
        }}
      >
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
                    if (meterial.includes(`${item.name}`)) {
                      setMeterial(
                        meterial.filter((foodType) => {
                          return foodType !== `${item.name}`;
                        })
                      );
                    } else {
                      setMeterial([...meterial, `${item.name}`]);
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
                item.name === `${type}` ? "bg-green-300" : ""
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
        <button className="border">Add</button>
      </form>
    </div>
  );
};

export default AddMenuPage;
