import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="appheader-container">
      <div className="logo">
        <p>Anmewza</p>
      </div>
      <ul className="navbar">
        <li className="item mg-right">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="item mg-right">
          <Link to={"/"}>About Me</Link>
        </li>
        <li className="item">
          <Link to={"/"}>Login</Link>
        </li>
      </ul>
      <div className="search">
        <p>Search</p>
      </div>
    </div>
  );
};

export default AppHeader;
