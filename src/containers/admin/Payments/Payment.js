import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import PaymentCard from '../../../components/paymentCard/PaymentCard'
import url from '../../../url'
import './payment.css'

const Payment = () => {
    const [payments,setPayments] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
       axios.get(`${url}/payments/get-payments`)
       .then((resp) => {
         setPayments(resp.data);
         setLoading(false);
       })
       .catch((e) => {
           console.log(e)
       })
    }, [])

    return (
        <div className="in-body padding-t-12 arrange-center-blogs">
            <h1>Payments Dashboard</h1>
            {
                loading?
                <h3>Loading ....</h3>:
                payments.map((item) => (
                   <PaymentCard
                   name={item.name}
                   amount={item.amount}
                   currency={item.currency}
                   pan={item.pan}
                   address={item.address}
                   contact={item.contact}
                   status={item.status}
                   createdAt={item.createdAt}/>
                ))
            }
            {
                !loading && payments.length === 0?
                <h3>No payments to show</h3>:
                null
            }
        </div>
    )
}

export default Payment
