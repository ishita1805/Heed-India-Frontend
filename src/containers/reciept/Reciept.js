import React,{ useState } from 'react'
import './reciept.css'
import converter from 'number-to-words'
import axios from 'axios'
import PDF from './PDF'
import url from '../../url'

const Reciept = () => {
  const [gensate, setGenState] = useState(0);
  const [inp,setInp] = useState(null);

  const [doc,setDoc] = useState({
    name: 'Ishita Kabra',
    amt: '13',
    date: '12th June 2021',
    mode:'Online',
    amt_word: converter.toWords(13).toLocaleUpperCase(),
    remark:'For raising money for books',
    address: 'B-608, Kenwood Towers, Charmwood Village. Faridabad, Surajkund Rd. 121009, Haryana.',
    num: '9003783680',
    email:'ishitakabra18@gmail.com',
    pan:'AA34GDS22Q'
  })


  const generateRec = () => {
    
    if(inp==='' || inp===null) setGenState(2);
    else {
      axios.get(`${url}/payments/get-payment`, { params: { receipt: inp } })
      .then((resp) => {
        setGenState(1);
        setDoc({
          name: resp.data.name,
          amt: resp.data.amount,
          date: resp.data.createdAt,
          mode: 'Online',
          amt_word: converter.toWords(resp.data.amount).toLocaleUpperCase(),
          remark: resp.data.remarks,
          address: `${resp.data.address}, ${resp.data.city}, ${resp.data.state} `,
          num: resp.data.contact,
          email: resp.data.email,
          pan: resp.data.pan
        });
      })
      .catch(() => {
        setGenState(2);
      }) 
    }
  }
  

  return (
    <div className='receipt'>
      <div className='receipt-cont'>
        <h1>Thank you for your donation</h1>
        <h3>Each act of kindness matters</h3>
        <div>
          <input value={inp} onChange={(e)=>setInp(e.target.value)} name='reciept' type="number" placeholder="Enter Reciept Number" />
          <button onClick={generateRec}>{gensate===1?'Generate New':'Generate'}</button>
        </div>
        {gensate===2?<p>Invalid receipt number. <br/> Please contact us at <a href='mailto:info@heedindia.org'>info@heedindia.org</a> if you think this is a mistake.</p>:null}
      </div>
      <div className='demo'>
        {gensate===1?
        <>
        <PDF
        name={doc.name}
        amt={doc.amt}
        date={doc.date}
        amt_word={doc.amt_word}
        mode={doc.mode}
        remark={doc.remark}
        address={doc.address}
        num={doc.num}
        email={doc.email}
        pan={doc.pan}
        />
        <br/><br/>
        <br/><br/>
        </>:null}
      </div>
    </div>
  )
}

export default Reciept
