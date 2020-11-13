import React, {useEffect} from 'react'
import Header from '../../components/header/Header'

const Branches = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <Header title = "Our Branches"/>
        </div>
    )
}

export default Branches
