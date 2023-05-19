import { FoodType } from "../Types/FoodType";

const Category = (menu: FoodType) => {
  // const navigate = useNavigate();

  return (
    <div>
      {JSON.stringify(menu)}
      {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-5">
        {foods.map((food) => (
          <div key={food.foodId} className="cursor-pointer">
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="md:h-[300px] h-[200px] w-[100%] object-cover rounded-lg"
            />
            <h2 className="font-bold my-4">{food.foodName}</h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Category;
