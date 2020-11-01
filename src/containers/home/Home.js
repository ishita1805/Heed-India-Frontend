import React, {useEffect} from 'react'
import BottomNav from '../../components/bottomNav/BottomNav'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
    <div className="in-body col">
        <div className="grow">
            {/* content comes here remove H1 tag */}
            <h1>Home</h1>
        </div>
        <BottomNav/>
    </div>
    )
}

export default Home
