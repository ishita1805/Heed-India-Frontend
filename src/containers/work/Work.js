import React, {useEffect} from 'react'

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">
            <h1>Our Work</h1>
        </div>
    )
}

export default Work
