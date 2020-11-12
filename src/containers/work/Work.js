import React, {useEffect} from 'react'
import Header from '../../components/header/Header'

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">            
            <Header title = "Our Work"/>
        </div>
    )
}

export default Work
