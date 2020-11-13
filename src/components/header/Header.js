import React, {useEffect} from 'react'
import './header.css'

const Header = (props) => {    

    return (
        <div className = "in-header">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header