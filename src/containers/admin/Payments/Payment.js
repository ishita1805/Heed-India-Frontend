import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { CSVLink } from "react-csv";
import PaymentCard from '../../../components/paymentCard/PaymentCard'
import url from '../../../url'
import './payment.css'
import '../ViewBlogs/viewBlogs.css'

const Payment = () => {
    const [payments,setPayments] = useState([]);
    const [loading,setLoading] = useState(true);

    const headers = [
        { label: "Razorpay Order ID", key: "offerId" },
        { label: "Name", key: "name" },
        { label: "Amount", key: "amount" },
        { label: "CURRENCY", key: "currency" },
        { label: "Address", key: "address" },
        { label: "State", key: "state" },
        { label: "City", key: "city" },
        { label: "Pincode", key: "pincode" },
        { label: "Remarks", key: "remarks" },
        { label: "Receipt No.", key: "receipt" },
        { label: "Payment Status", key: "status" },
        { label: "Payment Date", key: "createdAt" },
        { label: "Bank", key: "bank" },
        { label: "Wallet", key: "wallet" },
        { label: "Card Name", key: "card.name" },
        { label: "Card ID", key: "card.id" },
        { label: "Card Network", key: "card.network" },
        { label: "Card Type", key: "card.type" },
        { label: "Card Last 4 Digits", key: "card.last4" },
        { label: "Card Issuer", key: "card.issuer" },
        { label: "Card EMI", key: "card.emi" }
      ];

    useEffect(() => {
       axios.get(`${url}/payments/get-payments`)
       .then((resp) => {
           console.log(resp.data)
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
                null:
                
                <button className='excel-download'>
                    <CSVLink 
                    className='excel-a' 
                    data={payments}
                    headers={headers}
                    filename={"Heed-India-Donations.csv"}
                    >
                        Download CSV
                    </CSVLink>
                    </button>
            }
            {
                loading?
                <h3>Loading ....</h3>:
                payments.map((item) => (
                   <PaymentCard
                   name={item.name}
                   amount={item.amount}
                   currency={item.currency}
                   pan={item.pan}
                   address={`${item.address}, - ${item.pincode}, ${item.city}, ${item.state}`}
                   mode='Online'
                   email={item.email}
                   contact={item.contact}
                   status={item.status}
                   receipt={item.receipt}
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
