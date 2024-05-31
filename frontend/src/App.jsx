import "./App.css";
import {Routes,Route} from 'react-router-dom'
import HostLogin from "./Home/Authentication/HostLogin";
import HostHome from "./Home/Host/HostHome";
import HostSignup from "./Home/Authentication/HostSignup";
import UserLogin from "./Home/Authentication/UserLogin"
import UserHome from "./Home/User/UserHome";
import UserSignup from "./Home/Authentication/UserSignup";
import HostBooking from "./HostBooking";
import UserBookingDetail from "./UserBookingDetails";
import About from "./Pages/About/index"
import Contact from "./Pages/Contact";
import Service from "./Pages/Services";
import Home from "./Pages/Home";
import HostHomestay from "./Home/Host/HostHomestay";
import ConfirmationBooking from "./Home/Host/ConfirmationBooking";
import EditHomestay from "./Home/Host/EditHomestay";
import AdminLogin from "./Admin/Admin-login";
import AdminSignup from "./Admin/AdminSignup";
import AdminHome from "./Admin/AdminHome";
import UserPayment from "./Home/User/userPayment";
import PrivateRoute from "./Components/PrivateRoutes";
import Dashboard from "./Admin/Dashboard";

const App=()=>{
  return <div className="mainpage">
    <Routes>
      <Route path="/admin/signup" element={<AdminSignup/>}/>
      <Route path="/admin/login" element={<AdminLogin/>}/>
      <Route path="/host/login" element={<HostLogin/>} />
      <Route path="/host/signup" element={<HostSignup/>} />
      <Route path="/user/login" element={<UserLogin/>} />
      <Route path="/user/signup" element={<UserSignup/>} />
      <Route path="/admin/home" element={<AdminHome/>}/>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      {/* private routes */}
     <Route element={<PrivateRoute role="HOST" />} > 
     <Route path="/homestay/:hostId" element={<HostHomestay/>} />
      <Route path="/homestay/host/:id" element={<HostHome/>} />
      <Route path="/host/booking/:id" element={<HostBooking/>} />
      <Route path="/host/confirmation/:id" element={<ConfirmationBooking/>} />
      <Route path="/homestay/edit/:id" element={<EditHomestay/>} />

     </Route>


{/*       
     privateroutes for user */}
     <Route element={<PrivateRoute role="USER" />}>
      
     <Route path="/user/home" element={<UserHome/>} /> 
      <Route path="/user/homestay/:id" element={<UserBookingDetail/>} />
      <Route path="/payment/:id" element={<UserPayment/>} />
     </Route>
      
      <Route path="/" element={<Home/>} />

      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/service" element={<Service/>} />
     
      








     








    </Routes>
    
  </div>

}
export default App;