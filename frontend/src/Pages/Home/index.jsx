import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "./home.css";
import Footer from "../../Components/Footer";


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleButtonClick = () => {
    console.log("Button clicked");
    toast.info('Please login or list a rooms')
  };
  
  

  return (
    <div className="home-page">
            <ToastContainer />
      <Navbar />

      <div className="image">
        <img className="homeimg" src="/homenest.jpg" alt="" />
        <div className="centered-content">
          <div className={`home-div ${isVisible ? "fade-in" : ""}`}>
            <h1>Welcome to my Website!</h1>
            <br />
            <h3>Experience a cozy and memorable stay with us</h3>
            <br />
            <br />
            <button
  className={`btn animated ${isVisible ? 'slide-in' : ''}`}
  onClick={handleButtonClick}
>
  Get Started
</button>

          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-wrapper">
          <div className="text">
            <h3>"Experience More Than Just a Stay – Live It!"</h3>
            <br/>
            <p>
              Don't just visit – immerse yourself in the heart of local culture with Nestaway. Our mission is to connect travelers with authentic homestay experiences that go beyond mere accommodation. We believe in offering more than just a place to rest your head – we offer the opportunity to truly live like a local and discover the essence of your destination.
            </p>
          </div>
          <div className="image-wrapper">
            <img className="back" src="/imagehome.jpg" alt="Your Image" />
            <img className="top" src="/home3.jpg" alt="Your Image" />
          </div>
        </div>
      </div>
      <div className="offers">
  <article className="card">
    <header className="card__thumb">
      <a href="#"><img src="/travel.png" /></a>
    </header>
    <date className="card__date">
      <span className="card__date__day">new</span>
      <br/>
      <span className="card__date__month"> offer!</span>
    </date>
    <div className="card__body">
      <div className="card__category"><a href="#">homestay!</a></div>
      <h2 className="card__title"><a href="#">Weekend Getaway Package</a></h2>
      {/* <div className="card__subtitle">an ice cream sundae party！</div> */}
      <p className="card__description">Escape the hustle and bustle of city life with our Weekend Getaway Package! Enjoy two nights of accommodation in our luxurious rooms, complimentary breakfast each morning, and a guided tour of the local area. Book now and make the most of your weekend!</p>
    </div>
    {/* <footer className="card__footer">
      <span className="icon ion-clock"></span> 10 mins ago
      <span className="icon ion-chatbox"></span><a href="#"> 145 comments</a>
    </footer> */}
  </article>
  <article className="card">
    <header className="card__thumb">
      <a href="#"><img src="/family.webp" /></a>
    </header>
    <date className="card__date">
      <span className="card__date__day">new</span>
      <br/>
      <span className="card__date__month">offer!</span>
    </date>
    <div className="card__body">
      <div className="card__category"><a href="#">homestay!</a></div>
      <h2 className="card__title">Family Fun Package</h2>
      {/* <div className="card__subtitle">an ice cream sundae party！</div> */}
      <p className="card__description">Make unforgettable memories with our Family Fun Package! Treat your loved ones to a relaxing stay with us, complete with family-friendly activities such as hiking, biking, and picnicking. Kids stay and eat for free! Reserve your family getaway today.</p>
    </div>
    {/* <footer className="card__footer">
      <span className="icon ion-clock"></span> 10 mins ago
      <span className="icon ion-chatbox"></span><a href="#"> 145 comments</a>
    </footer> */}
  </article>
  <article className="card">
    <header className="card__thumb">
      <a href="#"><img src="/couple.jpg" /></a>
    </header>
    <date className="card__date">
      <span className="card__date__day">new</span>
      <br/>
      <span className="card__date__month">offer!</span>
    </date>
    <div className="card__body">
      <div className="card__category"><a href="#">homestay!</a></div>
      <h2 className="card__title">Romantic Retreat Package</h2>
      {/* <div className="card__subtitle">an ice cream sundae party！</div> */}
      <p className="card__description">Reignite the spark with our Romantic Retreat Package! Surprise your partner with a romantic weekend escape filled with champagne, chocolates, and candlelit dinners. Indulge in a couples massage and enjoy breathtaking views of the sunset. Fall in love all over again!</p>
    </div>
    {/* <footer className="card__footer">
      <span className="icon ion-clock"></span> 10 mins ago
      <span className="icon ion-chatbox"></span><a href="#"> 145 comments</a>
    </footer> */}
  </article>
</div>
<div className="roomquality">

<div className="quality">

<img src="/room.webp" alt="" />
  <p>
Room quality refers to the standard of comfort, functionality, and aesthetic appeal of a room. It includes factors like cleanliness, comfort of furnishings, layout efficiency, technological amenities, safety measures, and overall customer experience.</p>

<button className="q-btn">List Room</button>
</div>

</div>
<Footer/>

    </div>
  );
};

export default Home;
