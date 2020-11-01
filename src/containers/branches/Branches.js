import React, {useEffect} from 'react'

const Branches = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <h1>Our Branches</h1>
        </div>
    )
}

export default Branches
