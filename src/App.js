import React, { useContext } from "react";
import './app.css'
import {
  Switch,
  Route,
  __RouterContext
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Navigation from './components/navigation/Navigation'
import Home from "./containers/home/Home"
import About from "./containers/about/About"
import Initiatives from "./containers/initiatives/Initiatives"
import Work from "./containers/work/Work"
import Involved from './containers/involved/Involved'
import Branches from './containers/branches/Branches'
import Donate from './containers/donate/Donate'
import Money from './containers/money/Money'
import Mission from './containers/mission/Mission'

function App() {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(0, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(0, 0)" },
    config: {
      duration: 600 
    }
  });


  return (
    <>
    <div className="body">
        <Navigation/>
        <div className="inner-body">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
            <Route 
            path="/" 
            exact 
            component={Home} 
            />
             <Route 
            path="/about-us" 
            exact 
            component={About} 
            />
             <Route 
            path="/initiatives" 
            exact 
            component={Initiatives} 
            />
             <Route 
            path="/our-work" 
            exact 
            component={Work} 
            />
            <Route 
            path="/get-involved" 
            exact 
            component={Involved} 
            />
             <Route 
            path="/our-branches" 
            exact 
            component={Branches} 
            />
            <Route 
            path="/donate" 
            exact 
            component={Donate} 
            />
             <Route 
            path="/raise-money" 
            exact 
            component={Money} 
            />
             <Route 
            path="/our-mission" 
            exact 
            component={Mission} 
            />
            </Switch>
          </animated.div>
        ))}
        </div>
    </div>
    </>
  );
}

export default App;
