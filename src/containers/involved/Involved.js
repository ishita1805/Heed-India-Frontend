import React, {useEffect} from 'react'
import './involved.css'
import Header from '../../components/header/Header'

const Involved = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">
            <Header title = "Get Involved"/>
        </div>
    )
}

export default Involved
