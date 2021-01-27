import React, { useContext, useState, useEffect } from "react";
import './app.css'
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Navigation from './components/navigation/Navigation'
import Home from "./containers/home/Home"
import About from "./containers/about/About"
import Initiatives from "./containers/initiatives/Initiatives"
import Work from "./containers/work/Work"
import Sports from './containers/sports/Sports'
import Branches from './containers/branches/Branches'
import Donate from './containers/donate/Donate'
import Money from './containers/money/Money'
import Mission from './containers/mission/Mission'
import PopUp from './components/popUp/PopUp'
import CenterIcon from './components/centerIcon/CenterIcon'
import Blog from './containers/blog/Blog'
import Footer from './components/footer/Footer'
import CreateBlog from './containers/createBlog/CreateBlog'
import Contact from './components/contactUs/Contact'
import list from './data/centerList'

function App() {
  const [center,setCenter]=useState(true);
  const [state,setState]=useState('Mumbai')
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0.3, transform: "translate(0, 0)", transition:"ease-in-out" },
    enter: { opacity: 1, transform: "translate(0, 0)", transition:"ease-in-out" },
    leave: { opacity: 0.3, transform: "translate(0, 0)", transition:"ease-in-out" },
    config: {
      duration: 350 
    }
  });
  useEffect(() => {
  //  pop up won't show for any page but the home page
  //  --- uncomment the next line for getting pop up again ---- 
  //  if(location.pathname === "/") setCenter(false);
  }, [location.pathname])
  
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
      {list.map((item) => (
        <CenterIcon
        src={item.imgPath}
        label={item.label}
        onClick={()=>{setState(item.label);closePopUp()}}
        />
      ))}
      </div>
    </div>
    }
    />:null}

    <div className="body">
     
        <Navigation loc={location.pathname}/>
        <Contact/>
        <div className="inner-body">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>

                <Route path="/" exact >
                  <Home state={state}/>
                </Route>

                <Route path="/about-us" exact >
                  <About state={state}/>
                </Route>

                <Route path="/initiatives" exact >                  
                  <Initiatives state={state}/>
                </Route>

                <Route  path="/events" exact >
                  <Work state={state}/>
                </Route>

                <Route path="/sports" exact >                  
                  <Sports state={state}/>
                </Route>

                <Route path="/our-branches" exact >                  
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

                <Route path="/blog" exact >
                  <Blog state={state}/>
                </Route>

                <Route path="/admin/createBlog" exact >
                  <CreateBlog state={state}/>
                </Route>
              
            </Switch>
          </animated.div>
        ))}
        <Footer/>
        </div>

    </div>

  </>
  );
}

export default App;
