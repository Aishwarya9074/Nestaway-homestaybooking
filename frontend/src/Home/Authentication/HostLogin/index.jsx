import "./hostlogin.css";
import Button from "../../../Components/Button";
import axios from "../../../utils/axios.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveCreds } from "../../../utils/index.js";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";

const HostLogin = () => {
    const [cred, setCred] = useState({ hostname: '', hostpassword: '' });
    const navigate = useNavigate();

    const onChange = (e, key) => {
        setCred({ ...cred, [key]: e.target.value });
    };

    const loginClick = async () => {
        try {
            const response = await axios.post("/host/login", cred);
            const { token, hostid } = response.data; // Assuming the response contains hostid
            saveCreds(token);
            navigate(`/homestay/host/${localStorage.getItem('id')}`);
        } catch (error) {
            // Handle login error
            console.error("Login error:", error);
        }
    };

    return (
      <>
      <Navbar/>
        <div className="hostlogin">
            <div className="form-host">
                <div className="logo-host">
                <img src="/logo1.png" alt="" />
                <h1> Login</h1>
                </div>
            <div className="input-host">
            <input
                    type="text"
                    placeholder="Hostname"
                    value={cred.hostname}
                    onChange={(e) => onChange(e, 'hostname')}
                />
              <div className="icon">
              <i  class="fa-solid fa-user"></i>
              </div>
            </div>
            <div className="input-host">
              
            <input
                    type="password"
                    placeholder="Password"
                    value={cred.hostpassword}
                    onChange={(e) => onChange(e, 'hostpassword')}
                />
                <div className="icon">
                <i class="fa-solid fa-lock"></i>
                </div>
            </div>
                <Button onClick={loginClick}>Login</Button>
                <div className="register-link">
                  <p>dont have an account <Link to="/host/signup" >Register</Link></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default HostLogin;
