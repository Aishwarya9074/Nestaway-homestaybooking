import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./terms.css";

const Terms=()=>{
    const termsContent = `
    <h2>Terms of Service</h2>
    <p>Welcome to our homestay booking service. By using our service, you agree to the following terms and conditions:</p>
    
    <h3>1. Acceptance of Terms</h3>
    <p>By accessing or using our service, you agree to be bound by these terms. If you do not agree to these terms, please do not use our service.</p>
    
    <h3>2. Changes to Terms</h3>
    <p>We reserve the right to modify these terms at any time. We will provide notice of changes by posting the new terms on our website. Your continued use of the service after the changes will constitute your acceptance of the new terms.</p>
    
    <h3>3. User Responsibilities</h3>
    <p>You are responsible for your use of the service and for any content you provide. You agree not to misuse the service in any way.</p>
    
    <h3>4. Booking Policies</h3>
    <p>All bookings are subject to availability and our booking policies. Please review our policies before making a booking.</p>
    
    <h3>5. Privacy</h3>
    <p>We are committed to protecting your privacy. Please review our privacy policy for information on how we collect, use, and disclose your personal information.</p>
    
    <h3>6. Contact Us</h3>
    <p>If you have any questions about these terms, please contact us at support@homestaybooking.com.</p>
    
    <p>Last updated: May 30, 2024</p>
`;

return (
    <div>
        <Navbar/>
        <div className="terms-of-service">
        <div dangerouslySetInnerHTML={{ __html: termsContent }}></div>
    </div>
    <Footer/>

    </div>
);
};




export default Terms;
