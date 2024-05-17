import Navbar from "../../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./adminlogin.css";
import { saveCreds } from "../../utils";
import { useState } from "react";
import Password from "antd/es/input/Password";
import axios from "../../utils/axios"


const AdminLogin=()=>{
    const[adminLogin,setAdminLogin]=useState({adminname:'',Password:''})
    const navigate=useNavigate()

    const adminChange=(e,key)=>{
        console.log({...adminLogin,[key]:e.target.value})
        setAdminLogin({...adminLogin,[key]:e.target.value})
    }
    const adminLoginClick=async()=>{
        try{
            const response=await axios.post('/admin/login',adminLogin)
            console.log(response.data)
            saveCreds(response.data.token)
            navigate('/admin/home')
        }
        catch(error){
            console.error('login failed',error)
        }

    }

    return (
        <div>
            <Navbar/>
            <div className="admin-wrapper">
                <div className="admin-login">
                    <div className="logoadmin-login">
                        <img src="/logo1.png" alt="" />
                        <h2>Login</h2>
                    </div>
                    <div className="admin-user">
                        <input type="text" placeholder="Adminname"
                        onChange={(e)=>{adminChange(e,'adminname')}}
                        // value={adminLogin.adminname}
                        required

                        />
                        <div className="icons-admin">
                        <i  class="fa-solid fa-user"></i>
                            

                        </div>
                    </div>
                    <div className="admin-user">
                        <input type="password" placeholder="password"
                        onChange={(e)=>{adminChange(e,'password')}}
                        // value={adminLogin.Password}
                        required

                        />
                        <div className="icons-admin">
                        <i class="fa-solid fa-lock"></i>
                            

                        </div>
                    </div>
                    <button onClick={adminLoginClick}>Log In</button>
                   <div className="register-admin">
                   <h5>dont have an account<a style={{color:'black'}} href="/admin/signup">signup</a></h5>
                   </div>

                </div>
            </div>
        </div>

    )
}

export default AdminLogin
