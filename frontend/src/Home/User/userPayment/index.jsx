import { Button } from "antd/es/radio";
import "./userpayment.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../../Components/Navbar/index";
import Footer from "../../../Components/Footer/index"
import axios from "../../../utils/axios";

const UserPayment = () => {
    const { id } = useParams(); 
    const [input, setInput] = useState({amount: '', currency: '', paymentMethod: '', transactionId: '', metadata: ''});
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [roomType, setRoomType] = useState('');
    const [amount, setAmount] = useState('');

    const paymentChange = (e, key) => {
        setInput({ ...input, [key]: e.target.value });
        console.log({ ...input, [key]: e.target.value })
    };

    const handleRoomTypeChange = (e) => {
        const selectedRoomType = e.target.value;
        setRoomType(selectedRoomType);
        // Set the amount based on the selected room type
        let amountValue = '';
        if (selectedRoomType === 'single') {
            amountValue = '3000';
        } else if (selectedRoomType === 'double') {
            amountValue = '6000';
        } else if (selectedRoomType === 'multi') {
            amountValue = '8000';
        }
        setAmount(amountValue);
        setInput(prevInput => ({ ...prevInput, amount: amountValue }));
    };
    
    const makePayment = async () => {
        // Check if the amount is provided
        if (!input.amount) {
            // Show error notification if amount is not set
            toast.error('Amount is required.');
            return;
        }
    
        if (paymentCompleted) {
            // If payment is already completed, show a notification
            toast.info('You have already made the payment.');
            return;
        }
    
        try {
            const response = await axios.post(`/payment/${id}`, input);
            console.log(response.data);
            // Show success notification
            toast.success('Payment successful!');
            // Disable the "Pay" button after successful payment
            setPaymentCompleted(true);
        } catch (error) {
            console.error("Error while processing payment:", error);
            // Show error notification
            toast.error('Payment failed. Please try again.');
        }
    };
    

    return (
       <div className="pay-body">
        <Navbar/>
         <div className="user-payment">
            <h1 style={{color:'black'}}>Payment</h1>
            <ToastContainer/>
            <div className="form-payment">
                <div className="payments">
                    <label htmlFor="roomType">Room Type:</label>
                    <select id="roomType" onChange={handleRoomTypeChange}>
                        <option value="">Select Room Type</option>
                        <option value="single">Single Room - INR3000</option>
                        <option value="double">Double Room - INR6000</option>
                        <option value="multi">Multi Rooms - INR8000</option>
                    </select>
                </div>
                <div className="payments">
                    <label htmlFor="">Amount:</label>
                    <input type="text" value={amount} disabled />
                </div>
                <div className="payments">
                    <label htmlFor="currency">Currency:</label>
                    <select id="currency" onChange={(e) => paymentChange(e, 'currency')}>
                        <option value="">Select Currency</option>
                        <option value="USD">United States Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">British Pound Sterling (GBP)</option>
                        <option value="JPY">Japanese Yen (JPY)</option>
                        <option value="CAD">Canadian Dollar (CAD)</option>
                        <option value="AUD">Australian Dollar (AUD)</option>
                        <option value="CHF">Swiss Franc (CHF)</option>
                        <option value="CNY">Chinese Yuan Renminbi (CNY)</option>
                        <option value="INR">Indian Rupee (INR)</option>
                        <option value="BRL">Brazilian Real (BRL)</option>
                    </select>
                </div>
                <div className="payments">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select id="paymentMethod" onChange={(e) => paymentChange(e, 'paymentMethod')}>
                        <option value="">Select Payment Method</option>
                        <option value="debitcard">Debit Card</option>
                        <option value="creditcard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="stripe">Stripe</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="payments">
                    <label htmlFor="">Transaction ID:</label>
                    <input type="text" onChange={(e) => paymentChange(e, 'transactionId')} />
                </div>
                <div className="payments">
                    <label htmlFor="">Metadata:</label>
                    <input type="text" onChange={(e) => paymentChange(e, 'metadata')} />
                </div>
                <div className="pay">
                    <button onClick={makePayment}>Pay</button>
                </div>
            </div>
        </div>
        <Footer/>
       </div>
    );
};

export default UserPayment;
