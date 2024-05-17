import "./service.css";
import Navbar from "../../Components/Navbar/index"
import Footer from "../../Components/Footer";

const Service=()=>{
    return <div className="service">
        <Navbar/>
        <h1 > Our Service</h1>
        <div className="imagecontainer">
            <img className="centerimg" src="/hill.jpg" alt="" />
        </div>

        <div className="servicediv">
        <div className="servicecard">
        <h3><strong>Accomodation</strong></h3>
     
            <li>Discover a diverse range of accommodation options tailored to your preferences, including cozy rooms, spacious apartments, and charming cottages.</li>
            <br/>
  <li>Filter your search based on amenities, location, and budget to find the perfect homestay for your needs.
</li>

      
       
        </div>
        <div className="servicecard">
        <h3><strong>Booking Flexibility:</strong></h3>
   
          
            <li>Enjoy flexible booking options that cater to your schedule and preferences.</li>
            <li>Choose from daily, weekly, or monthly stays, with the ability to modify or cancel your reservation as needed.</li>
      
        </div>
        <div className="servicecard">
            <h3><strong>Secure Payments:</strong></h3>
           <li>Rest assured with our secure payment gateway, ensuring hassle-free transactions for your bookings.</li>
           <li>Pay conveniently using various payment methods, including credit/debit cards, net banking, and mobile wallets.</li>
        </div>
        <div className="servicecard">
            <h3><strong>Quality Assurance:</strong></h3>
            <li>Experience peace of mind knowing that all homestays listed on NestAway undergo thorough quality checks to ensure they meet our high standards of cleanliness, safety, and comfort.</li>
            <li>We continually monitor and review guest feedback to maintain the quality of our services.</li>
        </div>
        <div className="servicecard"><h3><strong>Exclusive Deals and Discounts:</strong></h3>
        <li>Take advantage of exclusive deals, discounts, and promotions available only to NestAway guests.</li>
        <li>Save on your bookings and enhance your homestay experience with special offers tailored just for you.</li>
        </div>
        <div className="servicecard"><h3><strong>Community Engagement:</strong></h3>
        <li>Join our vibrant community of travelers and hosts, sharing stories, tips, and recommendations to enrich your homestay experience.</li>
        <li>Connect with like-minded travelers and locals, fostering meaningful connections and friendships along the way.</li>
        </div>
        </div>
        <Footer/>
 

    </div>

}
export default Service;