import React, {useEffect} from 'react'
import './sports.css'
import Header from '../../components/header/Header'

const Sports = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="in-body padding-t-12 padding-l-2">
            <Header title = "Sports"/>
        </div>
    )
}

export default Sports
