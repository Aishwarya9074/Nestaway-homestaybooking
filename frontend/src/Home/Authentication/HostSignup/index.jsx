import { useState } from "react";
import Button from "../../../Components/Button";
import axios from "../../../utils/axios"
import  "./hostsignup.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Components/Navbar";

const HostSignup = () => {
    const [signup, setSignup] = useState({ hostname: '', hostemail: '', hostpassword: '', confirmPassword: '', phonenumber: '' });
    const navigate = useNavigate();

    const signInput = (e, key) => {
        setSignup({ ...signup, [key]: e.target.value });
    };

    const signupClick = async () => {
        try {
            const response = await axios.post('/host/signup/', signup);
            navigate('/host/login');
            console.log(response.data);
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="hostsign">
            <div className="form-sign">
             <div className="host-signlogo">
                <img src="/logo1.png" alt="" />
                <h1>Host Signup</h1>
             </div>
              <div className="sign-input"> 
               <input type="text" placeholder="Hostname" value={signup.hostname} onChange={(e) => signInput(e, 'hostname')} />
              <div className="icon">
              <i class="fa-solid fa-user"></i>
              </div>
              </div>
               <div className="sign-input">
               <input type="email" placeholder="Hostemail" value={signup.hostemail} onChange={(e) => signInput(e, 'hostemail')} />
           <div className="icon">    <i class="fa-solid fa-envelope"></i></div>
               </div>
              <div className="sign-input">  <input type="password" placeholder="Password" value={signup.hostpassword} onChange={(e) => signInput(e, 'hostpassword')} />
            <div className="icon">  <i class="fa-solid fa-lock"></i></div>
              </div>
              <div className="sign-input">
              <input type="password" placeholder="Confirm Password" value={signup.confirmPassword} onChange={(e) => signInput(e, 'confirmPassword')} />
            <div className="icon">
            <i class="fa-solid fa-lock"></i>
            </div>
              </div>
               <div className="sign-input"> 
               <input type="text" placeholder="Phone Number" value={signup.phonenumber} onChange={(e) => signInput(e, 'phonenumber')} />
              <div className="icon">
              <i class="fa-solid fa-phone"></i>
              </div>
               </div>
                <Button onClick={signupClick}>Signup</Button>
            </div>
        </div>
        </>
    );
};

export default HostSignup;
