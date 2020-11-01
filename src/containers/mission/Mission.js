import React, {useEffect} from 'react'

const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">
            <h1>Our Mission</h1>
        </div>
    )
}

export default Mission
