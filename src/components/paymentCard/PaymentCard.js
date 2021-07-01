import React from 'react'

const PaymentCard = (props) => {
    const [expand,setExpand] = React.useState(false)
    return (
        <div className='payment-item'>
        {!expand?
        <i className='fa fa-chevron-down expand-payment' onClick={()=>setExpand(!expand)}></i>:
        <i className='fa fa-chevron-up expand-payment' onClick={()=>setExpand(!expand)}></i>
        }
        <p><b>Name: </b>&ensp;{props.name}</p>
        <p><b>Amount: </b>&ensp;{props.amount}</p>
        {
            !expand?
            <p><b>. . .</b></p>:null
        }
        {
            expand?
            <>
            <p><b>Currency: </b>&ensp;{props.currency}</p>
            <p><b>PAN Number: </b>&ensp;{props.pan}</p>
            <p><b>Address: </b>&ensp;{props.address}</p>
            <p><b>Email: </b>&ensp;{props.email}</p>
            <p><b>Contact Number: </b>&ensp;{props.contact}</p>
            <p><b>Payment Status: </b>&ensp;{props.status}</p>
            <p><b>Payment Mode: </b>&ensp;{props.mode}</p>
            <p><b>Receipt No.: </b>&ensp;{props.receipt}</p>
            <p><b>Payment Date: </b>&ensp;{props.createdAt}</p>
            </>:null
        }
    </div>
    )
}

export default PaymentCard
