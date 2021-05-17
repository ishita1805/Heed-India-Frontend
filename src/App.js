/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import './App.css'
import { Switch, Route, __RouterContext } from "react-router-dom";
import {LoadContext} from './context/load'
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import Nav from './components/navigation/Navigation'
import Home from './containers/home/Home'
import About from './containers/about/About'
import Mission from './containers/mission/Mission'
import Events from './containers/events/Events'
import Initiatives from './containers/initiatives/Initiatives'
import Donate from './containers/donate/Donate'
import Sports from './containers/sports/Sports'
import Error from './containers/error/Error'
import Admin from './containers/admin/Admin/Admin'
import CreatedBlog from './containers/admin/CreateBlog/CreateBlog'
import ViewBlogs from './containers/admin/ViewBlogs/ViewBlogs'
import Footer from './components/footer/Footer'
import ConactUs from './components/contactUs/Contact'
import Blog from './containers/blog/Blog'
import Contacts from './containers/admin/Contacts/Contacts'
import Support from './containers/admin/Support/Support'
import Content from './containers/admin/ChangeContent/Content'
import Donations from './containers/admin/Donations/Donate'
import Privacy from './containers/footerLinks/PrivacyPolicy'
import Terms from './containers/footerLinks/TermsConditions'
import Loader from './components/loader/Loader'
import axios from 'axios'
import url from './url'

const App = () => {
  const state='Mumbai'
  // const [load,setLoad]=useState(true);
  const {load, setLoad} = useContext(LoadContext);
  const [ab,setAb] = useState({
      title:'',
      para:'',
      media:'',
      hashtag:'',
      cards:[],
      stats:[],
  });
  const [event,setEvent] = useState({
      title:'',
      subtitle:'',
      media:'',
  });
  const [initiatives,setInitiatives] = useState({
    cards:[{
        title:'',
        description:'',
        media:'',
    },
    {
        title:'',
        description:'',
        media:'',
    },
    {
        title:'',
        description:'',
        media:'',
    }],
    title:'',
    subtitle:'',
    hashtag:'',
    media:'',
});

  useEffect(() => {
    axios.post(`${url}/page/get`, { id: '609c2b89a0996a0bec3f4a45' })
        .then((resp) => { 
            console.log(resp.data.resp);
            setAb(resp.data.resp);
         })
        .catch((e) => { console.log(e); })

    axios.post(`${url}/page/get`, { id: '609c2be2a0996a0bec3f4a47' })
    .then((resp) => { 
        console.log(resp.data.resp);
        setEvent(resp.data.resp);
      })
    .catch((e) => { console.log(e); })

    axios.post(`${url}/page/get`, { id: '609c2c12a0996a0bec3f4a48' })
    .then((resp) => { 
        console.log(resp.data.resp);
        setInitiatives(resp.data.resp);
     })
    .catch((e) => { console.log(e); })

  }, [])

  window.onload = () => {
    if(window.location.pathname !== '/' || window.location.pathname !== '/initiatives'){
      setLoad(false);
    } 
  }


 return (
    <div>
      { load?<Loader/>:null }
      <Nav loc={window.location.pathname}/>
      <Switch>

        <Route path="/" exact >
          <Home loaded={()=>setLoad(false)}  state={state}/>
        </Route>

        <Route path="/about-us" exact >
          <About  content={ab} state={state}/>
        </Route>

        <Route path="/sports" exact >
          <Sports state={state}/>
        </Route>

        <Route path="/events" exact >
          <Events content={event} state={state}/>
        </Route>

        <Route path="/initiatives" exact >
          <Initiatives loaded={()=>setLoad(false)}  content={initiatives} state={state}/>
        </Route>

        <Route path="/donate" exact >
          <Donate state={state}/>
        </Route>

        <Route path="/our-mission" exact >
          <Mission state={state}/>
        </Route>

        <Route 
        path='/blog/:id' 
        exact
        render={(props) => <Blog state={state} {...props}/> }
        />

        <Route path="/admin" exact>
          <Admin/>
        </Route>

        <Route path="/privacy-policy" exact >
          <Privacy/>
        </Route>
        <Route path="/terms&conditions" exact >
          <Terms/>
        </Route>
        <Route path="/refunds&cancellations" exact >
          <Terms/>
        </Route>

        <ProtectedRoute path="/admin/createBlog" Component={CreatedBlog}/>
        <ProtectedRoute path="/admin/view" Component={ViewBlogs}/>
        <ProtectedRoute path="/admin/messages" Component={Contacts}/>
        <ProtectedRoute path="/admin/support" Component={Support}/>
        <ProtectedRoute path="/admin/donations" Component={Donations}/>
        <ProtectedRoute path="/admin/change-content" Component={Content}/>

        <Route path="/*">
          <Error state={state}/>
        </Route>
      </Switch>
      <Footer/>
      <ConactUs loc={window.location.pathname}/>
    </div>
  )
 
}

export default App

