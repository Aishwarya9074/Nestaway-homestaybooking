import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import "./confirm.css";
import { useParams } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/Navbar";

const ConfirmationBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { id } = useParams(); // Use useParams() to get the id from the route params

  const getBooking = async () => {
    try {
      const response = await axios.get(`/booking/${id}`);
      console.log(response.data);
      setBookings(response.data.bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    getBooking();
  }, [id]); // Include id in the dependency array to re-fetch bookings whenever id changes
  const acceptBooking = async (bookingId) => {
    const response = await axios.post(`/booking/accept/${bookingId}`)
    toast.success("Booking accepted successfully!");
    getBooking()
    console.log(response.data)
  };
  const rejectBooking=async(bookingId)=>{
    const response=await axios.post(`/booking/reject/${bookingId}`)
    toast.error("Booking rejected!");
    getBooking()
    console.log(response.data)
  }

  return (
<div>
  <Navbar/>
<div className="confirm-home">
      <div className="confirm">
      <h1>Confirmation</h1>
      <ToastContainer />
      <div className="booking-cards">
        {bookings.map(booking => (
          <div className="booking-card" key={booking._id}>
            <h3>Booking ID: {booking._id}</h3>
            <p>Check-in Date: {booking.checkIn}</p>
            <p>Check-out Date: {booking.checkOut}</p>
            <p>guests:{booking.guests}</p>
            <p>location:{booking.location}</p>
            <p>rooms:{booking.rooms}</p>
            <p>Room details:</p>
            <ul>
              <li>Name:{booking.room.name}</li>
              <li>Amenitites:{booking.room.amenities.join(",")}</li>
              <li>capacity:{booking.room.capacity}</li>
              <li>description:{booking.room.description}</li>
              <li>roomNo:{booking.room.roomNo}</li>
              <li>price:{booking.room.price}</li>
            </ul>
            <button onClick={()=>acceptBooking(booking._id)}>Accept</button>
            <button onClick={()=>rejectBooking(booking._id)}>Reject</button>
          </div>
        ))}
      </div>
    </div>
   <div className="foot">
   <Footer/>
   </div>
  </div>
</div>
  );
};

export default ConfirmationBooking;
