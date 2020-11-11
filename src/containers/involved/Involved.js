import React, {useEffect} from 'react'
import './involved.css'

const Involved = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">
            <h1 className = "involved-heading">Get Involved</h1>
        </div>
    )
}

export default Involved
