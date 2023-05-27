import React from "react";
import { Link } from "react-router-dom";
import { userData } from "../redux/userSlice";

const Navbar = () => {
  return (
    <div className="NavWrapper">
      <div className="NavLeft">Header</div>
      <div className="NavRight">
        <Link to={"/"}>Sign up</Link>
        {userData ? <Link to={"/profile"}>Profile</Link> : <Link>Profile</Link>}
      </div>
    </div>
  );
};

export default Navbar;
