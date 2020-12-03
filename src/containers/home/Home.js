import React, {useEffect} from 'react'
import BottomNav from '../../components/bottomNav/BottomNav'
import './home.css'
import Button from '../../components/button/Button'

const Home = ({state,...props}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
    <div className="col in-body-2">
        <div className="grow">
            {/* content comes here remove H1 tag */}
            <h1><span className="green-home">Heed</span> India</h1>
            <p>Facilitating health and education for children across the globe.</p>
            <h2><span className="green-home">#be</span><span className="green-home-1">the</span><span className="green-home-2">change</span></h2>
            {/* <button className="button-green">Contact Us</button> */}
            <Button
            className="success"
            label="Contact Us"/>
            <div className="bottom-nav-home">
                <BottomNav/>
            </div> 
        </div>
           
    </div>
    )
}

export default Home
