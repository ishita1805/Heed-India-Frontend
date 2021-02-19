import React from 'react'
import './footer.css'
import { NavLink } from "react-router-dom";
import footer from '../../assets/logo_footer.png'
import {useState} from 'react'
import axios from 'axios'
import url from '../../url'

const Footer = () => {

    const [email,setEmail]= useState('');
    const [buttonLabel,setButtonLabel] = useState('Join our Newsletter');

    const Email=e=>{
        setEmail(e.target.value)
    }

    const onSubmit=()=>{
        if(email){
            setButtonLabel('Processing')
            const letter = {
                newemail:email
            }
            axios.post(url+'/newsletter/email',letter)
            .then(()=>{
                    setButtonLabel('Thank You')
                    setTimeout(() => {
                        setButtonLabel('Join our Newsletter')
                    }, 3000);
            })
            .catch(()=>{
                setButtonLabel('An Error Occured')
            })
            setEmail('');
        }
        else{
            setButtonLabel('Please Add Email')
        }
        
        
        

        
    }
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
                    <NavLink exact to="/donate">Donate</NavLink><br/>
                    {/* <NavLink exact to="/raise-money">Raise Money</NavLink><br/> */}
                    <NavLink exact to="/our-mission">Our Mission</NavLink><br/>
                </span>
                <h4>Contact Us</h4>
                <span>
                    +91(22)-4971 6399 / +91-97697 96370
                </span>
            </div>

            <div className="footer-inner">
                <h4>Helpful Links</h4>
                <span>
                    <a target='__blank' href="/">Privacy Policy</a><br/>
                    <a target='__blank' href="/">Terms and Conditions</a><br/>
                </span>
                <h4>Developers</h4>
                <span>
                    <a target='__blank' href="https://github.com/ishita1805">Ishita Kabra</a><br/>
                    <a target='__blank' href="https://github.com/milanmandal">Milan Mandal</a><br/>
                    <a target='__blank' href="https://github.com/daredevil2020">Ritwik Ojha</a><br/>
                    <a target='__blank' href="https://github.com/KKapoor0801">Keshav Kapoor</a><br/>
                </span>
            </div>

            <div className="footer-buttons">
                <div className="footer-button"><i class="fa fa-envelope"></i><input value={email} onChange={Email} type="text" placeholder="jon@example.com"/></div>
                <button onClick={onSubmit} className="button-footer">{buttonLabel}</button>
            </div>
        </div>

        <div className="footer-sec-2">
            <a target='__blank' href="https://www.facebook.com/heedindia1/"> <i class="fa fa-facebook footer-icon" aria-hidden="true" ></i></a>
            <a target='__blank' href="https://www.instagram.com/heedindia.ngo/"> <i class="fa fa-instagram footer-icon" aria-hidden="true" ></i></a>
            <a target='__blank' href="https://twitter.com/heed_india?lang=en"> <i class="fa fa-twitter footer-icon" aria-hidden="true" ></i></a>
            <a target='__blank' href="https://www.linkedin.com/company/heed-india/about/"> <i class="fa fa-linkedin footer-icon" aria-hidden="true" ></i></a>
        </div> 

        <div className="footer-sec-1">
            Copyright © 2020 Heed India<br/>
            All Rights Reserved
        </div>
    </div>
    )
}

export default Footer