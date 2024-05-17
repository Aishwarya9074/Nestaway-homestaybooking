// UserHome Component
import { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import "./userhome.css";
import Footer from "../../../Components/Footer/index";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import { Button } from "antd";
import { isAuthenticated } from "../../../utils";

const UserHome = () => {
  const [homelist, setHomelist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  
  // Retrieve user token, ID, and role from local storage
  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("id");
  const userRole = localStorage.getItem("role");

  const getHomestaysWithReviews = async () => {
    try {
      const response = await axios.get(`/homestay`);
      const homestays = response.data;
      // Fetch reviews for each homestay
      const homestaysWithReviews = await Promise.all(
        homestays.map(async (homestay) => {
          const reviewsResponse = await axios.get(`/review/${homestay._id}`);
          const reviews = reviewsResponse.data;
          return { ...homestay, reviews };
        })
      );
      setHomelist(homestaysWithReviews);
    } catch (error) {
      console.error("Error fetching homestay data:", error);
    }
  };

  useEffect(() => {
    getHomestaysWithReviews();
  }, []);

  const cardClick = (id) => {
    navigate(`/user/homestay/${id}`);
  };

  const filteredHomelist = homelist.filter((item) => {
    return item.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const languageChange = (value) => {
    setLanguage(value);
  };

  return (
    <div className="userhome">
      <Navbar />
      <br />
      <div className="whole-card">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="language-container">
            <label htmlFor="language">Select language:</label>
            <select
              id="language"
              value={language}
              onChange={(e) => languageChange(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Russian">Russian</option>
              <option value="Turkish">Turkish</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>
        </div>
      </div>
      <div className="homelist">
        {filteredHomelist.map((item) => (
          <div className="listcard" key={item._id}>
            <div className="imgcontain">
              <img src={item.image} alt="" />
            </div>
            <div className="texts">
              <h3>{item.title}</h3>
              <p>
                <strong>Description:</strong>
                {item.description}
              </p>
              <p>
                <strong>Location:</strong>
                {item.location}
              </p>
              <p>
                <strong>Price:</strong>
                {item.price}
              </p>
              <p>
                <strong>Amenities:</strong>
                {item.amenities}
              </p>
              <div>
                <h4>Reviews:</h4>
                {item.reviews &&
                  item.reviews.map((review) => (
                    <div className="reviewmore" key={review._id}>
                      <p>User:{review.reviewText}</p>
                    </div>
                  ))}
              </div>
              <button
                className="more-btn"
                onClick={() => cardClick(item._id)}
              >
                View more details
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default UserHome;
