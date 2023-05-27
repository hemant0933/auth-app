import React from "react";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  const RemoveData = () => {
    // localStorage.removeItem('user');
    dispatch(userLogout);
    Navigate("/");
  };

  return (
    <div className="profileDiv">
      <div className="innerDiv">
        <div>
          <p>name :- {data.name}</p>
        </div>
        <div>
          <p>email :- {data.email}</p>
        </div>
        <div>
          <p>password :- {data.password}</p>
        </div>

        <button onClick={RemoveData}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
