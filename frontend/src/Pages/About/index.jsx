import React from "react";
import Navbar from "../../Components/Navbar";
import "./about.css"; // Import your CSS file
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div className="about">
      <Navbar />
     
      <div className="about-content">
                <div className="image-container">

                  <img src="/home2.jpg" alt="" />
                

                </div>
                <div className="text-container">
                    <h1 style={{color: "blue"}}>Welcome to Nestaway: Your Home Away from Home</h1>
                    <br />
                    <h3 style={{color:'black '}}>At Nestaway, we understand the importance of finding the perfect accommodation that feels like home, even when you're away. Whether you're traveling for business, leisure, or any other reason, we're here to make your stay comfortable, convenient, and memorable.</h3>
                    <br />
                    <h4 style={{color:	"blue"}}>Our Story:</h4>
                    <br />
                    <p style={{color:"black"}}>Nestaway was founded with a simple yet profound vision: to revolutionize the way people experience temporary accommodation. Our journey began with a passion for hospitality and a commitment to providing travelers with a seamless booking experience. Over the years, we've grown into a trusted platform connecting hosts with guests from around the world.</p>
                    <br />
                    <h4 style={{color:'blue'}}>What We Offer</h4>
                    <br />
                    <ul >
                        <li style={{color:'black'}}><strong style={{color:'black'}}>Quality Assurance: </strong> We handpick each accommodation listed on our platform to ensure that it meets our high standards of quality, comfort, and safety.</li>
                        <li style={{color:'black'}}><strong style={{color:'black'}}>Convenience:</strong> With our user-friendly platform and hassle-free booking process, finding and booking your perfect accommodation is quick, easy, and convenient.</li>
                        <li style={{color:'black'}}><strong style={{color:'black'}}>Community:</strong> At Nestaway, we're more than just a booking platform  we're a community of hosts and guests who share a passion for travel, hospitality, and creating meaningful connections.</li>
                    </ul>
                    <h4 style={{color:'blue'}}>Get in touch:</h4>
                    <br />
                    <p style={{color:'black'}}>Ready to experience the comfort and convenience of Nestaway? Explore our range of accommodation options and start planning your next adventure today. Have questions or need assistance? Our friendly support team is always here to help.</p>
                    <p style={{color:'black'}}>Welcome to Nestaway – where every stay feels like home.</p>
                
                </div>
           
            </div>
            <Footer/>

    </div>

  );
};

export default About;
