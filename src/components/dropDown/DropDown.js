/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React,{ useState } from 'react'
import './dropDown.css'

const Dropdown = ({value,values,returnVal,...props}) => {

    const [switchh,setSwitch] = useState(false);
    const [val,setVal] = useState(value);
    const openCloseHandler = () => {
        setSwitch(!switchh);
    }
   
    return (
        <>
            <div className='dropdown' onClick={openCloseHandler}>
               <div className='dropdown-head'> {val} &nbsp;&nbsp;<i class="fa fa-chevron-down"></i></div>
                {switchh?
                    <div className='dropdown-table'>
                        {values.map((item)=>(
                            <div className='db-tbl-opt' onClick={()=>{setVal(item);returnVal(item)}}>{item}</div>
                        ))}
                    </div>
                :null}
            </div>
        </>
    )
}

export default Dropdown
