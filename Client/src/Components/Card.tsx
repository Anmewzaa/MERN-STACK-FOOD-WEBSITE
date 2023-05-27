import { FoodType } from "../Types/FoodType";
import { useNavigate } from "react-router-dom";

const Card = ({ foodId, foodName, foodImage }: FoodType) => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer" onClick={() => navigate(`menu/${foodId}`)}>
      <div>
        <img
          src={foodImage}
          alt={`${foodName} picture`}
          className="md:h-[300px] h-[200px] w-[100%] object-cover rounded-lg bg-center bg-cover"
        />
      </div>
      <div className="font-bold md:text-2xl text-xl mt-2 mb-4">
        <h2>{foodName}</h2>
      </div>
    </div>
  );
};

export default Card;
