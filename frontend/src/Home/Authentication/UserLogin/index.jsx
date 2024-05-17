// UserLogin Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userlogin.css';
import axios from "../../../utils/axios"
import { Link } from 'react-router-dom';
import Navbar from "../../../Components/Navbar"
import { saveCreds } from '../../../utils';

const UserLogin = () => {
  const [login, setLogin] = useState({ username: '', userpassword: '' });
  const navigate = useNavigate();

  const userInput = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const userLoginClick = async () => {
    try {
      const response = await axios.post('/user/login/', login);
      // Save user credentials (token, ID, role) in local storage
      saveCreds(response.data.token);
      navigate('/user/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="signup-wrapper">
        <div className="user-login">
          <div className="logo-login">
            <img src="/logo1.png" alt="" />
            <h2>Login</h2>
          </div>
          <div className="input-user">
            <input
              type="text"
              placeholder='username'
              required
              value={login.username}
              onChange={(e) => userInput(e, 'username')}
            />
            <div className="icons">
              <i  class="fa-solid fa-user"></i>
            </div>
          </div>
          <div className="input-user">
            <input
              type="password"
              placeholder='password'
              required
              value={login.userpassword}
              onChange={(e) => userInput(e, 'userpassword')}
            />
            <div className="icons">
              <i class="fa-solid fa-lock"></i>
            </div>
          </div>
          <button type="button" onClick={userLoginClick}>Log In</button>
          <div className="register">
            <p>Don't have an account? <Link to="/user/signup" >Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
