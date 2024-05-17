import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./usersignup.css";
import axios from "../../../utils/axios";
import Navbar from "../../../Components/Navbar";


const UserLogin = () => {
  const [signup, setSignup] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const userInput = (e, key) => {
    setSignup({ ...signup, [key]: e.target.value });
    console.log({ ...signup, [key]: e.target.value });
  };

  const userSignClick = async () => {
    try {
      const response = await axios.post("/user/signup/", signup);
      console.log(response.data);
      navigate("/user/login");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="usersign">
        <div className="formsign">
        
         <div className="sign-login">
              <img src="/logo1.png" alt="" />
              <h2>Signup</h2>
            </div> 

            <div className="signupfield">
              <input
                type="text"
                required
                placeholder="username"
                value={signup.username}
                onChange={e => userInput(e, "username")}
              />
               <div className="icon">
              <i class="fa-solid fa-user"></i>
              </div>
           
            </div>
            <div className="signupfield">
              <input
                type="email"
                required
                placeholder="email id"
                value={signup.email}
                onChange={e => userInput(e, "useremail")}
              />
                 <div className="icon">    <i class="fa-solid fa-envelope"></i></div>
         
            </div>
            <div className="signupfield">
              <input
                type="password"
                placeholder="password"

                required
                value={signup.userpassword}
                onChange={e => userInput(e, "userpassword")}
              />
               <div className="icon">  <i class="fa-solid fa-lock"></i></div>
           
        
            </div>
            <div className="signupfield">
              <input
                type="password"
                placeholder="confirmPassword"
                required
                value={signup.confirmPassword}
                onChange={e => userInput(e, "confirmPassword")}
              />
                <div className="icon">  <i class="fa-solid fa-lock"></i></div>
            </div>
            <button onClick={userSignClick}>Signup</button>
     
        </div>
      </div>
    </div>
  );

};

export default UserLogin;
