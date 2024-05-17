import React, { useState, useEffect } from "react";
import "./userbookingdetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel, Rate } from "antd";
import axios from "../utils/axios";
import { MessageOutlined } from "@ant-design/icons";
import Footer from "../Components/Footer/index"
import { Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { TextArea } = Input;
import Navbar from "../Components/Navbar/index";
import { Button } from "antd/es/radio";
// import Carousel from "antd";
import CarouselSlide from "../Components/Carousel-slide";

const UserBookingDetail = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    location: "",
    rooms: "",
  });
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(0); // State for rate value
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getReviews();
  }, [id]);

  const bookingChange = (e, key) => {
    setBookingData({ ...bookingData, [key]: e.target.value });
    console.log({ ...bookingData, [key]: e.target.value });
  };

  const reviewChange = e => {
    setReview(e.target.value);
  };

  const postReview = async () => {
    try {
      if (!review || !rate) {
        throw new Error("Review and rating are required");
      }

      const response = await axios.post(`/review/${id}`, {
        reviewText: review,
        rating: rate,
      });
      toast.success("Review submitted successfully!");
      setReview("");
      setRate(0);
      getReviews();
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.message || "Failed to submit review. Please try again later."
      );
    }
  };

  const getReviews = async () => {
    try {
      const response = await axios.get(`/review/${id}`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to fetch reviews. Please try again later.");
    }
  };

  const bookingHomestay = async () => {
    try {
      const { checkIn, checkOut, guests, location, rooms } = bookingData;
      if (!checkIn || !checkOut || !guests || !location || !rooms) {
        throw new Error("Please fill in all the required fields.");
      }

      const response = await axios.post(`/booking/${id}`, {
        checkIn,
        checkOut,
        guests,
        location,
        rooms,
      });
      console.log(response.data);

      if (response.data) {
        const { message } = response.data;
        alert(message);
      }

      toast.success("Homestay booked successfully!");
      setBookingData({
        checkIn: "",
        checkOut: "",
        guests: "",
        location: "",
        rooms: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.message || "Failed to book homestay. Please try again later."
      );
    }
  };
  const paymentClick = () => {
    navigate(`/payment/${id}`);
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Navbar />
      <div className="userbooking">
        <div className="room-book">
          <div className="book-room">
            <label htmlFor="">CheckIn</label>
            <Input
              type="date"
              value={bookingData.checkIn}
              onChange={e => bookingChange(e, "checkIn")}
            />
            <label htmlFor="">CheckOut</label>
            <Input
              type="date"
              value={bookingData.checkOut}
              onChange={e => bookingChange(e, "checkOut")}
            />
            <label htmlFor="">Guests:</label>
            <Input
              type="number"
              value={bookingData.guests}
              onChange={e => bookingChange(e, "guests")}
            />
            <label htmlFor="">Location:</label>
            <Input
              type="text"
              value={bookingData.location}
              onChange={e => bookingChange(e, "location")}
            />
            <label htmlFor="">Rooms:</label>
            <Input
              type="Number"
              value={bookingData.rooms}
              onChange={e => bookingChange(e, "rooms")}
            />
            <br />
            <button onClick={bookingHomestay}>Book</button>
            <div className="payment">
              <button onClick={paymentClick}>Payment Details</button>
            </div>
         
          </div>
  
          <br />
          <br />
    
        </div>
 <div className="slide">
 <Carousel autoplay={false} afterChange={onChange}>
          <CarouselSlide imagePath="/slidefi.webp" altText="Cinque Terre" />
          <CarouselSlide imagePath="/slidese.jpg" altText="Forest" />
          <CarouselSlide imagePath="/slideth.webp" altText="Northern Lights" />
          <CarouselSlide imagePath="/slidefo.webp" altText="Mountains" />
          <CarouselSlide imagePath="/slidesi.webp" altText="Scorrable Image" />
        </Carousel>
 </div>
   
       <div className="review-boxs">
         
       <div className="review">
       
       <Rate value={rate} onChange={setRate} />
         
         <TextArea
           value={review}
           onChange={reviewChange}
           placeholder="Write your review here..."
           
         />
         <br/>
       
         <button onClick={postReview}>Submit Review</button>
       </div>
     
       
       <ToastContainer />
       <div className="review-box">
         <h2>Reviews</h2>
         {reviews.map((review, index) => (
           <div key={index} className="review-item">
              <MessageOutlined />
             <p>{review.reviewText}</p>
           
             <Rate disabled value={review.rating} />
         
           </div>
         ))}
       </div>
     </div>
       </div>
       
      <Footer/>
    </div>
  );
};

export default UserBookingDetail;
