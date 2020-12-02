import Header from '../../components/header/Header'
import P from '../../components/paragraph/Paragraph'
import './donate.css'
import React, {useState,useEffect} from 'react'
import logo from "../../assets/logo.png"
const axios = require('axios');



const Donate = () => {
    const [amt,setAmt] = useState(10000)
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
        <div className="in-body donate-container">
            <div className="donate-content">
            <Header title="Give Little of You" />
            <div className="donate-text">
                <P text="Find out how your contribution to an individual and/or 
                a project in India can help transform the future. No amount is small. 
                Let us show you how we can make every rupee count and help you be a part of this revolution." />
            </div>
            <h3>Donate for a cause</h3>
            <div className="amount-donate">
                <button  onClick={()=>{displayRazorpay(10000)}}  className="amt-donate">₹ 100 <br/><span className="donate-button-text">feed a child</span> </button>
                <button  onClick={()=>{displayRazorpay(40000)}}  className="amt-donate">₹ 400 <br/><span className="donate-button-text">feed a child</span> </button>
                <button  onClick={()=>{displayRazorpay(60000)}}  className="amt-donate">₹ 600 <br/><span className="donate-button-text">feed a child</span> </button>
                <button  onClick={()=>{displayRazorpay(100000)}} className="amt-donate">₹ 1000 <br/><span className="donate-button-text">feed a child</span> </button>
            </div>
            <h3>Or, Enter a custom amount</h3>
            <div className="col-bottom">
                <input type="number" placeholder="Enter amount in ₹" className="amt-donate-custom" onChange={e=>setAmt((e.target.value)*100)}/>
                <a 
                onClick={()=>{displayRazorpay(amt)}}
                onSelect={()=>{displayRazorpay(amt)}}
                target="_blank"
                className="button-donate"
                rel="noopener noreferrer">
                    Donate 
                </a>
            </div>
            </div>


        </div>
    )
}

export default Donate

