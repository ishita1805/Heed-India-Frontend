import React, { useContext, useState } from "react";
import './app.css'
import {
  Switch,
  Route,
  __RouterContext
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import Home from "./containers/home/Home"
import About from "./containers/about/About"
import Initiatives from "./containers/initiatives/Initiatives"
import Work from "./containers/work/Work"
import Involved from './containers/involved/Involved'
import Branches from './containers/branches/Branches'
import Donate from './containers/donate/Donate'
import Money from './containers/money/Money'
import Mission from './containers/mission/Mission'
import PopUp from './components/popUp/PopUp'
import CenterIcon from './components/centerIcon/CenterIcon'
import mumbai from './assets/mumbai.png'
import delhi from './assets/delhi.png'
import agra from './assets/agra.png'

function App() {
  const [center,setCenter]=useState(false);
  const [state,setState]=useState('Mumbai')
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(0, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(0, 0)" },
    config: {
      duration: 600 
    }
  });

  const closePopUp = ()=>setCenter(true);

  return (
  <>

    {!center?
    <PopUp
    onClick={closePopUp}
    label="Hello, Welcome To Heed India"
    children={
    <div>
      <p className="sub-head-popup">Please select the centre closest to you</p>
      <div className="cities-row">
      <CenterIcon
      src={mumbai}
      label="Mumbai"
      onClick={()=>{setState("Mumbai");closePopUp()}}
      />
       <CenterIcon
      src={delhi}
      label="Delhi"
      onClick={()=>{setState("Delhi");closePopUp()}}
      />
      <CenterIcon
      src={agra}
      label="Agra"
      onClick={()=>{setState("Agra");closePopUp()}}
      />
      </div>
    </div>
    }
    />:null}

    <div className="body">
        <Navigation/>
        <div className="inner-body">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>

                <Route path="/" exact >
                  <Home state={state}/>
                </Route>

                <Route path="/about-us" exact >
                  <Header title = "About Us"/>
                  <About state={state}/>
                </Route>

                <Route path="/initiatives" exact >
                  <Header title = "Initiatives"/>
                  <Initiatives state={state}/>
                </Route>

                <Route  path="/our-work" exact >
                  <Header title = "Our Work"/>
                  <Work state={state}/>
                </Route>

                <Route path="/get-involved" exact >
                  <Header title = "Get Involved"/>
                  <Involved state={state}/>
                </Route>

                <Route path="/our-branches" exact >
                  <Header title = "Our Branches"/>
                  <Branches state={state}/>
                </Route>

                <Route path="/donate" exact >
                  <Donate state={state}/>
                </Route>
                
                <Route path="/raise-money" exact >
                  <Money state={state}/>
                </Route>

                <Route path="/our-mission" exact >
                  <Mission state={state}/>
                </Route>
              
            </Switch>
          </animated.div>
        ))}
        </div>

    </div>

  </>
  );
}

export default App;
