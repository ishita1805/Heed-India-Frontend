import React, {useEffect} from 'react'
import './initiatives.css'
import Button from '../../components/button/Button'

const Initiatives = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='in-body background-initiate'>
            <div className='init-land'>
                    <h1><span className="green-home">Join Our</span> Initiative</h1>
                    <p>Do we have a moral obligation to help people we do not know? If so, why?</p>
                    <h2><span className="green-home">#be</span><span className="green-home-1">the</span><span className="green-home-2">change</span></h2>
                    <Button
                    className="success"
                    label="Donate Now"/>
            </div>
            <div className='init-secs'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='init-whitesec'>
                
            </div>
        </div>
    )
}

export default Initiatives
