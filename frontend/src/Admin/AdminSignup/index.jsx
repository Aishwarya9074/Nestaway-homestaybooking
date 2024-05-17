import { useState } from "react";
import "./adminsignup.css";
import axios from "../../utils/axios"
import Password from "antd/es/input/Password";
import Navbar from "../../Components/Navbar";

const AdminSignup=()=>{
    const [AdminSignup,setAdminSignup]=useState({adminname:'',email:'',Password:'', confirmPassword:''})
    const adminChange=(e,key)=>{
        console.log({...AdminSignup,[key]:e.target.value})
        setAdminSignup({...AdminSignup,[key]:e.target.value})
    }
    const adminSignClick=async()=>{
        try{
            const response=await axios.post("/admin/signup/",AdminSignup)
          console.log(response.data)


        }
        catch(error){
            console.error("signup failed",error)
        }
    }
    return (
        <div>
            <Navbar/>
            <div className="adminsign">
                <div className="form-adminsign">
                    <div className="sign-admin-login">
                        <img src="/logo1.png" alt="" />
                        <h2>Signup</h2>
                    </div>
                    <div className="signup-admin">
                        <input type="text" required placeholder="enter name" onChange={e=>adminChange(e,'adminname')} />

                        <div className="icon-signup">
                        <i class="fa-solid fa-user"></i>

                        </div>


                    </div>
                    <div className="signup-admin">
                        <input type="email" required placeholder="emailId:" onChange={(e)=>adminChange(e,'email')} />
                        <div className="icon-signup">
                        <i class="fa-solid fa-envelope"></i>

                        </div>
                    </div>
                    <div className="signup-admin">
                        <input type="password" placeholder="password" required onChange={(e)=>adminChange(e,'password')}/>
                        <div className="icon-signup">
                        <i class="fa-solid fa-lock"></i>
                        </div>
                    </div>
                    <div className="signup-admin">
                        <input type="password" required placeholder="confirmPassword" onChange={(e)=>adminChange(e,'confirmPassword')}/>
                        <div className="icon-signup">
                        <i class="fa-solid fa-lock"></i>
                        </div>
                    </div>
                    <button onClick={adminSignClick}>Signup</button>


                </div>
            </div>
        </div>
    )


}

export default AdminSignup;