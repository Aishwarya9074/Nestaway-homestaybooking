import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dash">
        <h1>Admin Dashboard</h1>
        <div className="dash-container">
          <div className="dash-card">
            <h3>Manage Hosts</h3>
            <p>View and manage all registered hosts.</p>
            <Link to="/admin/home">Go to Hosts</Link>
          </div>
          <div className="dash-card">
            <h3>Manage Users</h3>
            <p>View and manage all users.</p>
            <Link to="/admin/users">Go to Users</Link>
          </div>
          <div className="dash-card">
            <h3>Statistics</h3>
            <p>View platform statistics and metrics.</p>
            <Link to="/admin/statistics">View Statistics</Link>
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
