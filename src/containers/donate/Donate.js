import React, {useState,useEffect} from 'react'
import logo from "../../assets/logo.png"
const axios = require('axios');

const Donate = () => {
    const [amt,setAmt] = useState(100)
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
    
    const displayRazorpay = async ()=>{
        const res = await loadScript()
        if(!res){
            alert('An error occured!')
            return
        }

        const data = axios.post('http://localhost:3001/payments/make-payment',{
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
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "notes": {
                "address": "Heed India NGO, Mumbai"
            },
            "theme": {
                "color": "#F37254"
            }
        };

        const paymentObject = new window.Razorpay(options)
        paymentObject.open();
    }
    

    return (
        <div className="in-body">
            <h1>Donate Now</h1>
            <h3>Select amount to donate</h3>
            <div className="amount-donate">
                <button value="10000" onClick={e=>setAmt(e.target.value)} className="amt-donate">₹ 100</button>
                <button value="40000" onClick={e=>setAmt(e.target.value)} className="amt-donate">₹ 400</button>
                <button value="60000" onClick={e=>setAmt(e.target.value)} className="amt-donate">₹ 600</button>
                <button value="100000" onClick={e=>setAmt(e.target.value)} className="amt-donate">₹ 1000</button>
            </div>
            <a 
            onClick={displayRazorpay}
            target="_blank"
            className="button"
            rel="noopener noreferrer">
                Donate 
            </a>
        </div>
    )
}

export default Donate
