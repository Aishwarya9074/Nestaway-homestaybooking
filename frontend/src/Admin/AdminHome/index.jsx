import { useEffect, useState } from "react";
import axios from "../../utils/axios";

import { Table, Button } from "antd";
import "./adminhome.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AdminHome = () => {
  const [hostlist, setHostlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHosts = async () => {
      try {
        const response = await axios.get(`/admin/hosts/`);
        setHostlist(response.data.hosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hosts:", error);
        setLoading(false);
      }
    };

    fetchHosts();
  }, []);

  
  const columns = [
    {
      title: "S.No",
      dataIndex: "serialNumber",
      key: "serialNumber",
      render: (text, record, index) => index + 1
    },
    {
      title: "Host Name",
      dataIndex: "hostname",
      key: "hostname"
    },
    {
      title: "Email",
      dataIndex: "hostemail",
      key: "hostemail"
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber"
    },

    {
      title: "Delete", // Delete column
      key: "delete",
      render: (text, record) => (
        <i onClick={() => handleDelete(record._id)} className="fa-solid fa-trash"></i>
      )
    }
  ];



  const handleDelete = async (id) => {
    try {
      await axios.delete(`/admin/hosts/${id}`);
      setHostlist(hostlist.filter(host => host._id !== id));
    } catch (error) {
      console.error("Error deleting host:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  <div>
    <Navbar/>
      <div className="host-home">
      
      <Table className="table" dataSource={hostlist} columns={columns} />
    </div>
    <Footer/>
    </div>

  );
};

export default AdminHome;
