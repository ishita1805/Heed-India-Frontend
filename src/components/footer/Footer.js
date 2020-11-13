import React from 'react'
import './footer.css'
import footer from '../../assets/logo_footer.png'

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-sec">
                <img src={footer} className="logo-footer"/>
                <h4>Find Us</h4>
                <p>
                19, Unique Ind Estate,VS Marg,<br/>
                Prabhadevi,Mumbai - 400025, India<br/>
                </p>
            </div>

            <div className="footer-sec">
                <h4>Make a change</h4>
                <a>Donate Now</a>
                <a>Raise Money</a>
                <a>Get Involved</a>
                <h4>Contact Us</h4>
                <p>+91(22)-4971 6399 / +91 - 97697 96370</p>
            </div>

            <div className="footer-sec">
                <h4>Designed & Developed By</h4>
                <a target="__blank" href="https://github.com/ishita1805">Ishita Kabra</a>
                <a>Milan Mandal</a>
                <a>Ritwik Ohja</a>
                <a>Keshav Mandal</a>
                <button className="footer-button"><i class="fa fa-envelope"></i>&ensp; Join Our News Letter</button>
            </div>

            <div className="footer-sec-2">
                <i class="fa fa-facebook footer-icon" aria-hidden="true"></i>
                <i class="fa fa-instagram footer-icon" aria-hidden="true"></i>
                <i class="fa fa-twitter footer-icon" aria-hidden="true"></i>
                <i class="fa fa-linkedin footer-icon" aria-hidden="true"></i>
            </div>

        </div>
    )
}

export default Footer
