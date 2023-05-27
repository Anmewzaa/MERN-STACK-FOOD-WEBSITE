import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { checkToken } from "../Services/Authorize";
import Swal from "sweetalert2";

interface foodMeterialType {
  name: string;
}

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

const EditPage = () => {
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      await Axios.get(`${import.meta.env.VITE_API}/get/${id}`).then((res) => {
        setImageURL(res.data.foodImage);
        setName(res.data.foodName);
        setDescription(res.data.foodDescription);
        setType(res.data.foodType);
      });
    };
    getData();
  }, [id]);
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    if (!checkToken()) {
      navigate("404");
    }
  }, [navigate]);

  const updateFood = async () => {
    if (!(imageURL && name && description && type)) {
      return console.log("Input required");
    }
    await Axios.put(
      `${import.meta.env.VITE_API}/update/${id}`,
      {
        foodName: name,
        foodDescription: description,
        foodImage: imageURL,
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
          className="w-[100%] rounded-lg md:h-[80vh] max-h-[50vh] bg-center bg-cover"
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
          onClick={() => updateFood()}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPage;
