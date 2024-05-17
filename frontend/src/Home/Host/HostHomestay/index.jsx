import { useState } from "react";
import "./hosthomestay.css";
import axios from "../../../utils/axios";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const HostHomestay = ({hostId}) => {
  const [homeChange, setHomeChange] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    amenities: "",
    image: ""
  });

  const homeInput = (e, key) => {
    setHomeChange({ ...homeChange, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/homestay/${localStorage.getItem('id')}`, homeChange);
      console.log("Homestay added:", data);
      // You can add further handling after successful addition of homestay
    } catch (error) {
      console.error("Error adding homestay:", error);
      // You can add error handling here
    }
  };

  return (
    <div>
      <Navbar/>
   <div className="mainhomestay">
     <div className="hosthomes">
      {/* <h1>Homestay Management</h1> */}
      <div className="form-homestay">
        <form onSubmit={handleSubmit}>
          <div className="homeform">
            {/* <label htmlFor="title">Title</label> */}
            <input
              type="text"
              id="title"
              placeholder="title..."
              required
              onChange={(e) => homeInput(e, "title")}
            />
          </div>
          <div className="homeform">
            {/* <label htmlFor="description">Description</label> */}
            <textarea
              id="description"
              required placeholder="Description"
              onChange={(e) => homeInput(e, "description")}
            />
          </div>
          <div className="homeform">
            {/* <label htmlFor="location">Location</label> */}
            <input
              type="text"
              id="location"
              required
              placeholder="location..."
              onChange={(e) => homeInput(e, "location")}
            />
          </div>
          <div className="homeform">
            {/* <label htmlFor="price">Price</label> */}
            <input
              type="number"
              placeholder="price..."
              id="price"
              required
              onChange={(e) => homeInput(e, "price")}
            />
          </div>
          <div className="homeform">
            {/* <label htmlFor="amenities">Amenities</label> */}
            <input
              type="text"
              placeholder="amenities..."
              id="amenities"
              required
              onChange={(e) => homeInput(e, "amenities")}
            />
          </div>
          <div className="homeform">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              accept="image/*" 
              onChange={(e) => homeInput(e, "image")}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
   </div>
   <Footer/>
   </div>
  );
};

export default HostHomestay;
