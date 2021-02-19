import React, {useEffect, useState} from 'react'
import BottomNav from '../../components/bottomNav/BottomNav'
import './home.css'
import Button from '../../components/button/Button'
import { Redirect } from 'react-router-dom'

const Home = ({state,...props}) => {
    const [red,setRed] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
    <div className="col in-body-2">
        {red?<Redirect to="/donate" exact />:null}
        <div className="grow">
          
            <h1><span className="green-home">Heed</span> India</h1>
            <p>Facilitating health and education for children across the globe.</p>
            <h2><span className="green-home">#be</span><span className="green-home-1">the</span><span className="green-home-2">change</span></h2>
            
            <Button
            className="success"
            label="Donate"
            onClick={()=>setRed(true)}/>
            <div className="bottom-nav-home">
                <BottomNav/>
            </div> 
        </div>
           
    </div>
    )
}

export default Home
