import { useState } from "react";
import "./hostbooking.css";
import { useEffect } from "react";
import axios from "../utils/axios"

const HostBooking=()=>{
    const [booking,setBooking]=useState([])

    
    return <div className="hostbooking">
        <h1>Booking List</h1>
    </div>

}
export default HostBooking;
