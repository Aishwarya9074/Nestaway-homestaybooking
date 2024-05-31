import "./footer.css";


const Footer=()=>{
    return <div className="footer">
        <div className="sb_footer section-padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links-div">
                    <h4>For company</h4>
                    <a href="/">
                        <p>Home</p>
                    </a>
                    <a href="/about">
                        <p>About us</p>
                    </a>
                    <a href="/contact us">
                        <p>Contact</p>
                    </a>
                    <a href="">FAQs</a>
                    <a href="/terms">Terms of Services</a>
                </div>
                <div className="sb_footer-links-div">
                    <p>Email:info@nestawayhomestaybooking.com</p>
                    <p>phone:+917487448794</p>
                </div>
              
                <div className="sb_footer-links-div">
                <p>you can find us at</p>
                    <div className="socialmedia">
                   
                    <i class="fa-brands fa-square-whatsapp"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-below">
                <div className="footer-copyright">
                    <p>@{new Date().getFullYear()}Nestaway.All rights Reserved</p>
                </div>
            </div>
            <div className="footer-below-links">
                <a href="/terms"><div><p>Terms and conditions</p></div></a>
                <a href="/terms"><div><p>Privacy</p></div></a>
                <a href="/terms"><div><p>Security</p></div></a>
                <a href="/terms"><div><p>Cookies Declaration</p></div></a>



            </div>
        </div>
    </div>

}

export default Footer;