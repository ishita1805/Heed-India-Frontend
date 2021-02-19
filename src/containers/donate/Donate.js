// import Header from '../../components/header/Header'
import { Redirect } from 'react-router-dom'
import P from '../../components/paragraph/Paragraph'
import Button from '../../components/button/Button'
import './donate.css'
import React, {useState,useEffect} from 'react'
import logo from "../../assets/logo.png"
const axios = require('axios');



const Donate = () => {
    const [amt,setAmt] = useState(10000)
    const [red,setRed] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const loadScript = ()=>{
        return new Promise(resolve =>{
            const script = document.createElement('script')
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            document.body.appendChild(script)
            script.onload =()=>{
                resolve(true)
            }
            script.onerror =()=>{
                resolve(false)
            }
        })
    }
    
    const displayRazorpay = async (amt)=>{
        const res = await loadScript()
        if(!res){
            alert('An error occured!')
            return
        }
        const data = axios.post('https://heed-india-backend.herokuapp.com/payments/make-payment',{
            amount:amt
        })
        .then(resp => console.log(resp))
        .catch(e=>console.log(e))

        const options = {
            "key": "rzp_test_PsxGKItWtb7jwL",
            "amount": amt, 
            "currency": data.currency,
            "name": "Heed India",
            "description": "Test Transaction",
            "image": {logo},
            "order_id": data.id, 
            "handler": function (response){
                alert("Payment successful");
            },
            "theme": {
                "color": "#80ffaa"
            }
        };

        const paymentObject = new window.Razorpay(options)
        paymentObject.open();
    }
    

    return (
        <div className = "donate-main">
             {red?<Redirect to="/initiatives" exact />:null}
        <div className="in-body donate-container">
            <div className="donate-content">
                <h1><span className = "donate-header-1">Donate</span> and help a child</h1>         
                <div className="donate-text">
                    <P text="No amount is small. 
                    Let us show you how we can make every rupee 
                    count and help you be a part of this revolution." />
                    <h2><span className = "hashtag-1">#responsible</span><span className = "hashtag-2">Living</span></h2>
                    <div className="hbut"><Button className="success" label="Support Our Initiatives" onClick={()=>setRed(true)}/></div>
                </div>
            </div>

        <div className = "donate-box">
                <div className="amount-donate">
                    <button  onClick={()=>{displayRazorpay(10000)}}  className="amt-donate">₹ 100 <br/><span className="donate-button-text">feed a child</span> </button>
                    <button  onClick={()=>{displayRazorpay(40000)}}  className="amt-donate">₹ 400 <br/><span className="donate-button-text">feed a child</span> </button>
                    <button  onClick={()=>{displayRazorpay(60000)}}  className="amt-donate">₹ 600 <br/><span className="donate-button-text">feed a child</span> </button>
                    <button  onClick={()=>{displayRazorpay(100000)}} className="amt-donate">₹ 1000 <br/><span className="donate-button-text">feed a child</span> </button>
                </div>
                <div className="col-bottom">
                    <input type="number" placeholder="Enter amount in ₹" className="amt-donate-custom" onChange={e=>setAmt((e.target.value)*100)}/>
                    <button 
                    onClick={()=>{displayRazorpay(amt)}}
                    className="button-donate">
                        Donate
                    </button>
                </div>
            </div>
        </div>

        <div className = "donate-info">
                <div className = "d-header"><h2>A small act of kindness can go a long way</h2></div>
                <div className = "donate-infobox">
                    <div className = "d-info">
                        <P className = "infobox-headings" text = "Help a child"/>
                        <P text = "Our child focus programmes have thrust areas like Education, Health, Youth and Sports. Your donation will help provide critical support to children living in dire poverty through programmes, such as:"/>
                        <P text = "​Education: Scholarships for vocational training and college for qualified youth, as well as supplies, books and tuition to help support secondary school students."/>
                    </div>
                    <div className = "d-info">
                        <P className = "infobox-headings" text = "Make the planet green"/>
                        <P text = "Your donation will help us plant more and more trees. For every donation you make, our CSR partners will contribute exactly the same amount towards the Planet Green project."/>
                        <P className = "para23" text = "We would also love to have you as a volunteer for our tree plantation drive where you can experience the satisfaction of engaging with the project, on ground. For plantation drive schedules please drop us an email at info@heedindia.org"/>
                        <P className = "para23-short" text = "We would also love to have you as a volunteer for our tree plantation drive where you can experience the satisfaction of engaging with the project, on ground." />    
                    </div>
                    <div className = "d-info">
                        <P className = "infobox-headings" text = "Help a community" />
                        <P text = "One of the most effective ways to help children is to improve the communities in which they live. You contributions will help us with:"/> 
                        <P className = "para32" text = "Community Centre Campaign: Our community centres, medical and dental clinics, playgrounds and sports fields are built right in the communities we serve."/>
                        <P className = "para33" text = "Building clean-water sources in impoverished communities is one of the surest ways to change lives dramatically"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate

