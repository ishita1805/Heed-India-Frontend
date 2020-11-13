import React, {useEffect} from 'react'
import Header from '../../components/header/Header'

const Initiatives = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body">
            <Header title = "Initiatives"/>
        </div>
    )
}

export default Initiatives
