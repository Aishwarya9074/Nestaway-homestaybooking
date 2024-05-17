import { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import { isAuthenticated, saveCreds } from "../../../utils";
import "./hosthome.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
const HostHome = () => {
  const [homestaylist, setHomestaylist] = useState([]);
  const navigate=useNavigate()
  const edithome=useNavigate()
  const confirm=useNavigate()
  const payments=useNavigate()

  useEffect(() => {
    const hostHome = async () => {
      try {
        const response = await axios.get(`/homestay/host/${localStorage.getItem('id')}`);
        setHomestaylist(response.data);
        console.log(response.data); 
      } catch (error) {
        console.error("Error fetching homestays:", error);
      }
    };
    

    hostHome()
  }, []); 
  isAuthenticated()
  const addHomestayClick=()=>{
    navigate(`/homestay/${localStorage.getItem('id')}`)
  }
  const deleteHomestay=async(homestayId)=>{
    axios.delete(`/homestay/${homestayId}`)
    setHomestaylist(homestaylist.filter(homestay=>homestay._id!=homestayId))

  }
  const editClick=(homestay)=>{

      edithome(`/homestay/edit/${homestay._id}`); // Pass the homestay ID to the navigation function
   
    
  }
  const confirmClick=(id)=>{
    confirm(`/host/confirmation/${id}`)

  }



  return (
    
<div>
  <Navbar/>
<div className="hosthome">
      {/* <h1>Host Home</h1> */}
     
      <div className="homestay-cards">
        {homestaylist.map((homestay) => (
          <div className="homestay-card"  onClick={()=>confirmClick(homestay._id)}  key={homestay._id}>
          <div className="deletecard">
          <i onClick={() => editClick(homestay)} className="fa-solid fa-pen-to-square"></i>
          <i onClick={()=>deleteHomestay(homestay._id)} style={{'cursor':'pointer'}} class="fa-solid fa-trash"></i>
          </div>
              <img src={homestay.image} alt="" />
            <h3><strong>title:</strong>{homestay.title}</h3>
            <p><strong>Description:</strong> {homestay.description}</p>
            <p><strong>Location:</strong> {homestay.location}</p>
            <p><strong>Price: </strong>{homestay.price}</p>
            <p><strong>Amenities: </strong>{homestay.amenities}</p>
           <div className="payment-btn">
          
          
           </div>
          </div>
        ))}

      </div>
      <div className="host-btn">
      <button onClick={addHomestayClick}>Add Homestay</button>
      <br/>
      </div>
     <Footer/>
    </div>
</div>
  );
};

export default HostHome;
