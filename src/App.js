/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import './App.css'
import { Switch, Route, __RouterContext } from "react-router-dom";
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
import Refund from './containers/footerLinks/RefundsCancellation'

const App = () => {
  const state='Mumbai'
  const { location } = useContext(__RouterContext);

  return (
    <div>
      <Nav loc={location.pathname}/>
      <Switch>

        <Route path="/" exact >
          <Home state={state}/>
        </Route>

        <Route path="/about-us" exact >
          <About state={state}/>
        </Route>

        <Route path="/sports" exact >
          <Sports state={state}/>
        </Route>

        <Route path="/events" exact >
          <Events state={state}/>
        </Route>

        <Route path="/initiatives" exact >
          <Initiatives state={state}/>
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
          <Refund/>
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

