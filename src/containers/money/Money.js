import React, {useEffect} from 'react'

const Money = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <h1>Raise Money</h1>
        </div>
    )
}

export default Money

