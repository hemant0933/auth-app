import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../redux/userSlice";

const Signup = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmP, SetConfirmP] = useState("");
  const [success, SetSuccess] = useState("");
  const [error, SetError] = useState("");

  const ValidateForm = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "" || confirmP === "") {
      SetError("Please fill all the fields");
      SetSuccess("");
      return false;
    } else {
      if (password !== confirmP) {
        SetError("Passwords do not match");
        SetSuccess("");
        return false;
      } else {
        SetSuccess("Successfully Signed Up!");
        setTimeout(()=> {
         
          navigate('/profile');
        },1000)
          const accessToken = generateAccesToken();
          const user = { name, email, password,accessToken };
          localStorage.setItem("user", JSON.stringify(user));
          SetError("");
          dispatch(userData(user))
       
      }
    }
  };

  const generateAccesToken = () => {
    const accessTokens = Math.random().toString(36).substring(7);
    return accessTokens;
  };

  return (
    <div id="Signup">
      <form onSubmit={ValidateForm}>
        <p>Signup</p>
        <input
          placeholder="User Name"
          type="text"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          value={confirmP}
          onChange={(e) => SetConfirmP(e.target.value)}
        />
        <button type="submit">Submit</button>
        <p style={{ color: "lightgreen", fontSize: "20px" }}>{success}</p>
        <p style={{ color: "red", fontSize: "20px" }}>{error}</p>
      </form>
    </div>
  );
};

export default Signup;
