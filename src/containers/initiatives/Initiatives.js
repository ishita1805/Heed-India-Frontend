import React, {useEffect} from 'react'

const Initiatives = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">
            <h1>Initiatives</h1>
        </div>
    )
}

export default Initiatives
