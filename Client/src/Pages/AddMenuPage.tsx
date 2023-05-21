import { useEffect, useState } from "react";
import { checkToken } from "../Services/Authorize";
import { useNavigate } from "react-router-dom";

const AddMenuPage = () => {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState<string>(
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  );
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (!checkToken()) {
      navigate("404");
    }
  }, [navigate]);

  return (
    <div className="grid grid-cols-2">
      <img src={imageURL} alt="" />
      <div>
        <h2>test</h2>
      </div>
    </div>
  );
};

export default AddMenuPage;
