import React, {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import Typewriter from 'typewriter-effect'
import './donate.css'
import url from '../../url'
import logo from "../../assets/logo.png"
const axios = require('axios');

const Donate = () => {
    const { register, handleSubmit, errors  } = useForm();
    const [content,setContent] = useState({
        title:'',
        media:'',
        hashtag:'',
        cards:[{
            title:'',
            description:''
        }]
    });

    const colours = [
        {
            bg:'rgba(0, 0, 0, 0.507)',
            col:'#FF3880'
        },
        {
            bg:'rgba(0, 0, 0, 0.1)',
            col:'#FFC961'
        },
        {
            bg:'rgba(0, 0, 0, 0.907)',
            col:'#54ADFF'
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post(`${url}/page/get`, { id: '60b37de928d8fb7a24fb8e39' })
        .then((resp) => { 
            console.log(resp.data.resp);
            setContent(resp.data.resp);
         })
        .catch((e) => { console.log(e); })
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
    
    const onSubmit = async (data)=>{

        try{
            data.amt = parseInt(data.amt)*100
            console.log(data.amt);
            const res = await loadScript();
            if(!res){
                alert('An error occured!')
                return
            }
            const dta = await axios.post(`${url}/payments/make-payment`,{
                data
            })
            
            const options = {
                "key": "rzp_test_PsxGKItWtb7jwL",
                "amount": dta.data.response.amount*100, 
                "currency": dta.data.response.currency,
                "name": "Heed India",
                "description": "Test Transaction",
                "image": {logo},
                "order_id": dta.data.response.id, 
                "handler": function (){
                    // Add verification endpoint here
                    alert("Thankyou!");
                },
                "theme": {
                    "color": "#80ffaa"
                }
            };
            const paymentObject = new window.Razorpay(options)
            paymentObject.open();
        } catch(e) {
            console.log(e)
        }
        
    }
    

    return (
        <>
        <div className="donate-main" style={{ backgroundImage:`url("${content.media}")`}}>
             <div className='donate-cont'>
                <h1>
                    <span className="green-home">
                        {content.title.substring(0,content.title.indexOf(' '))}
                    </span>
                    {` ${content.title.substring(content.title.indexOf(' ')+1)}`}   
                </h1>
                <h2 className="green-home">
                    <Typewriter 
                        options={{
                            strings: content.hashtag.split(' '),
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 50
                        }}
                    />
                </h2>
                <form className='donate-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-inputs'>
                        <input type='text' placeholder='Enter Name' name='name'  ref={register({ required: true })}/>
                        <input type='text' placeholder='Enter PAN Number' name='pan'  ref={register({ required: true })}/>
                        <input type='number' placeholder='Enter Contact Number' name='contact'  ref={register({ required: true })}/>
                        <input type='number' placeholder='Enter Amount' name='amt'  ref={register({ required: true })}/>
                        <textarea type='text' placeholder='Enter Address' name='address'  ref={register({ required: true })}/>
                    </div> 
                    
                    {
                        errors.name ||
                        errors.pan || 
                        errors.contact ||
                        errors.amt ||
                        errors.address
                        ?<p className='e-t-admin'>Please fill all fields</p>:null
                    }
        
                    <button>Donate Now</button>
                </form>

             </div>
        </div>

        <div className='donate-tags'>
            {
                content.cards.map((item,index) => {
                let col;
                if(colours[index]) col=colours[index];
                else col=colours[index%colours.length];
                   return <div className='donate-card' style={{ backgroundColor:`${col.bg}`}}>
                        <div className='donate-card-header' style={{ backgroundColor:`${col.col}`}}></div>
                        <div className='donate-card-cont'>
                            <h3>{item.title}</h3>
                            <div className='underline-donate' style={{backgroundColor:`${col.col}`}}></div>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                })
            }
            
        </div>
        </>
    )
}

export default Donate
