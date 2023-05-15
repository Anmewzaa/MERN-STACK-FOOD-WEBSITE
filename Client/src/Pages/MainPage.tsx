import Category from "../Components/Category";

const MainPage = () => {
  return (
    <div>
      <div className=" my-3">
        <h1 className="text-4xl py-6 ">อาหารเช้า</h1>
        <Category type="อาหารเช้า" />
      </div>
      <div className=" my-3">
        <h1 className="text-4xl py-6">อาหารคลีน</h1>
        <Category type="อาหารคลีน" />
      </div>
    </div>
  );
};

export default MainPage;
