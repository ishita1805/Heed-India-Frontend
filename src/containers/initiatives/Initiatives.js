import React, {useEffect} from 'react'
import Header from '../../components/header/Header'
import './initiatives.css'
import vid from '../../assets/1.5mb.mp4'
const Initiatives = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">
            {/* <Header title = "Initiatives"/> */}
            <div className="ini-main">
                <video autoPlay muted loop id="myVideo">
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="container-ini"></div>
            </div>
            <div className="sec-2-ini"></div>

        </div>
    )
}

export default Initiatives
