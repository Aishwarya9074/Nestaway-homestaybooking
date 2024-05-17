import { useEffect, useState } from "react";
import axios from "../../../utils/axios"
import "./edithomestay.css";
import { useParams } from "react-router-dom";
import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/Navbar";

const EditHomestay=()=>{
    const[homestay,setHomestay]=useState({title:'',description:'',location:'',price:'',amenities:'',image:''})
    const[edit,setEdit]=useState({})
    const {id}=useParams()
    const addInput=(e,key)=>{
        console.log({...homestay,[key]:e.target.value})
        setHomestay({...homestay,[key]:e.target.value})
        setEdit({...edit,[key]:e.target.value})
       

    }
    const getHome=async()=>{
        const response=await axios.get(`/homestay/${id}`)
        console.log(response.data)
        setHomestay({...homestay,...response.data})
    }
    useEffect(()=>{
        getHome()
    },[])
    const editClick = async () => {
        try {
            await axios.patch(`/homestay/${homestay._id}`, edit);
        } catch (error) {
            console.error("Error editing homestay:", error);
        }
    };
    
    return (
        <div>
            <Navbar/>
            <div className="edithomestay">
        {/* <h1>EditHomestay</h1> */}

        <div className="editform">
            <div className="edits">
                <label htmlFor="">Title:</label>
                <input type="text" value={homestay.title} onChange={(e)=>{addInput(e,'title')}} />
            </div>
            <div className="edits">
                <label htmlFor="">Description:</label>
                <input type="text" value={homestay.description} onChange={(e)=>{addInput(e,'description')}} />
            </div>
            <div className="edits">
                <label htmlFor="">Location</label>
                <input type="text" value={homestay.location} onChange={(e)=>{addInput(e,'location')}} />
            </div>
            <div className="edits">
                <label htmlFor="">Price:</label>
                <input type="Number" value={homestay.price} onChange={(e)=>{addInput(e,'price')}} />
            </div>
            <div className="edits">
                <label htmlFor="">Amenitites:</label>
                <input type="text" value={homestay.amenities} onChange={(e)=>{addInput(e,'amenities')}} />
            </div>
            <div className="edits">
                <label htmlFor="">Images:</label>
                <input type="file"  onChange={(e)=>{addInput(e,'image')}} />
            </div>
            <button onClick={editClick}>Edit</button>
        </div>
        <Footer/>
    </div>
        </div>
    )

}
export default EditHomestay;