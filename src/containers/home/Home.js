import React, {useEffect} from 'react'
import BottomNav from '../../components/bottomNav/BottomNav'
import './home.css'

const Home = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
    <div className="in-body-2 col">
        <div className="grow">
            {/* content comes here remove H1 tag */}
            <h1><span className="green-home">HEED</span> INDIA</h1>
            <p>Do we have a moral obligation to help people we do not know? If so, why?</p>
            <h2><span className="green-home">#be</span><span className="green-home-1">the</span><span className="green-home-2">change</span></h2>
            <button className="button-green">Contact Us</button>
        </div>
        <div className="small-screen-bot-nav">
            <BottomNav/>
        </div>
        
    </div>
    )
}

export default Home
