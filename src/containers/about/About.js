import React, {useEffect} from 'react'
import Input from '../../components/inputBox/InputBox'
const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="in-body">
            <h1>About Us</h1>
            {props.state}
            <br/>
            <Input label="Test Input Box"/>
        </div>
    )
}

export default About
