import React, {useEffect} from 'react'
import Header from '../../components/header/Header'
import './initiatives.css'

const Initiatives = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body padding-t-12 padding-l-2">
            <Header title = "Initiatives"/>
        </div>
    )
}

export default Initiatives
