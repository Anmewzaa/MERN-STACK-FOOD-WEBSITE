import { useEffect } from "react";
import { checkToken } from "../Services/Authorize";
import { useNavigate } from "react-router-dom";

const AddMenuPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkToken()) {
      navigate("404");
    }
  }, [navigate]);

  return <div>AddMenuPage</div>;
};

export default AddMenuPage;
