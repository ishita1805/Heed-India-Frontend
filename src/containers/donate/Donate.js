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
            const res = await loadScript();
            if(!res){
                alert('An error occured!')
                return
            }
            const dta = await axios.post(`${url}/payments/make-payment`,{
                data
            })
            console.log(dta.data)
            const options = {
                "key": dta.data.key,
                "amount": dta.data.response.amount*100, 
                "currency": dta.data.response.currency,
                "name": "Heed India",
                "description": "Donate for a cause",
                "image": {logo},
                "order_id": dta.data.response.offerId, 
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
                        <input type='text' maxLength='10' placeholder='Enter PAN Number' name='pan'  ref={register({ required: true,maxLength:10 })}/>
                        <input type='number' maxLength='10' placeholder='Enter Contact Number' name='contact'  ref={register({ required: true ,maxLength:10})}/>
                        <input type='text' placeholder='Enter Address' name='address'  ref={register({ required: true })}/>
                        <input type='text' placeholder='Email' name='email'  ref={register({ required: true })}/>
                        
                        <input type='text' placeholder='Enter State' name='state'  ref={register({ required: true })}/>
                        <input type='text' placeholder='Enter City' name='city'  ref={register({ required: true })}/>
                        
                        
                        <input type='number' placeholder='Enter Pin Code' name='pincode'  ref={register({ required: true })}/>
                        <input className='width-input'  type='number' placeholder='Enter Amount' name='amt'  ref={register({ required: true })}/>
                        <input type='text' placeholder='Remarks' name='remarks'  ref={register({ required: true })}/>
                    </div> 
                    
                    {
                        errors.name ||
                        errors.amt ||
                        errors.address||
                        errors.city||
                        errors.state||
                        errors.pincode||
                        errors.email
                        ?<p className='e-t-donate'>Please fill all fields</p>:null
                    }
                    {errors.contact && errors.contact.type === "maxLength" ?<p className='e-t-donate'>max length 10 digits</p>:null }
                    {errors.pan && errors.pan.type === "maxLength" ?<p className='e-t-donate'>max length 10 alphanumeric</p>:null }
        
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


// email
// rec
// pincode
// state
// city
// remarks