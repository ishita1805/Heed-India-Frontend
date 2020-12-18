import React from 'react'
import './footer.css'
import footer from '../../assets/logo_footer.png'

const Footer = () => {
    return (
        <div className="footer-container">
        <div className="footer">
            <div className="footer-inner">
                <img src={footer} alt="" className="logo-footer"/>
                <h4>Find Us</h4>
                <span>
                19, Unique Ind Estate, VS Marg,<br/>
                Prabhadevi,Mumbai - 400025, India<br/>
                </span>
            </div>

            <div className="footer-inner">
                <h4>Make a change</h4>
                <span>
                    <a href="/">Donate Now</a><br/>
                    <a href="/">Raise Money</a><br/>
                    <a href="/">Get Involved</a><br/>
                </span>
                <h4>Contact Us</h4>
                <span>
                    +91(22)-4971 6399 / +91-97697 96370
                </span>
            </div>

            <div className="footer-inner">
                <h4>Helpful Links</h4>
                <span>
                    <a href="/">Privacy Policy</a><br/>
                    <a href="/">Terms and Conditions</a><br/>
                </span>
                <h4>Developers</h4>
                <span>
                    <a href="/">Ishita Kabra</a><br/>
                    <a href="/">Milan Mandal</a><br/>
                    <a href="/">Ritwik Ojha</a><br/>
                    <a href="/">Keshav Kapoor</a><br/>
                </span>
            </div>

            <div className="footer-buttons">
                <div className="footer-button"><i class="fa fa-envelope"></i><input type="text" placeholder="jon@example.com"/></div>
                <button className="button-footer">Join our Newsletter</button>
            </div>
        </div>
            <div className="footer-sec-2">
                <i class="fa fa-facebook footer-icon" aria-hidden="true"></i>
                <i class="fa fa-instagram footer-icon" aria-hidden="true"></i>
                <i class="fa fa-twitter footer-icon" aria-hidden="true"></i>
                <i class="fa fa-linkedin footer-icon" aria-hidden="true"></i>
            </div> 
            <div className="footer-sec-1">
                Copyright © 2020 Heed India<br/>
                All Rights Reserved
            </div>
        </div>
    )
}

export default Footer