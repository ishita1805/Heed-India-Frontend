/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect, Suspense } from "react";
import './App.css'
import { Switch, Route, __RouterContext } from "react-router-dom";
import { LoadContext } from './context/load'
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import Nav from './components/navigation/Navigation'
import Home from './containers/home/Home'
import About from './containers/about/About'
import ConactUs from './components/contactUs/Contact'
import axios from 'axios';
import url from './url';
import Loader from './components/loader/Loader';
import Banner from "./components/banner/Banner";
import Footer  from './components/footer/Footer';

const Contacts = React.lazy(()=> import('./containers/admin/Contacts/Contacts'));
const Support = React.lazy(()=> import('./containers/admin/Support/Support'));
const Payment = React.lazy(()=> import('./containers/admin/Payments/Payment'));
const Content = React.lazy(()=> import('./containers/admin/ChangeContent/Content'));
const Privacy = React.lazy(()=> import('./containers/footerLinks/PrivacyPolicy'));
const Terms = React.lazy(()=> import('./containers/footerLinks/TermsConditions'));
const People = React.lazy(()=> import('./containers/people/People'));
const Tournaments = React.lazy(()=> import('./containers/tournaments/Tournaments'));
const Mission = React.lazy(() => import('./containers/mission/Mission'));
const Events = React.lazy(() => import('./containers/events/Events'));
const Initiatives = React.lazy(() => import('./containers/initiatives/Initiatives'));
const Donate = React.lazy(() => import('./containers/donate/Donate'));
const Sports = React.lazy(() => import('./containers/sports/Sports'));
const Error = React.lazy(() => import('./containers/error/Error'));
const Admin = React.lazy(() => import('./containers/admin/Admin/Admin'));
const CreatedBlog = React.lazy(() => import('./containers/admin/CreateBlog/CreateBlog'));
const ViewBlogs = React.lazy(() => import('./containers/admin/ViewBlogs/ViewBlogs'));
const Blog = React.lazy(() => import('./containers/blog/Blog'));


const App = () => {
  const state = 'Mumbai'
  // const [load,setLoad]=useState(true);
  const { load, setLoad } = useContext(LoadContext);
  const [ab, setAb] = useState({
    title: '',
    para: '',
    media: '',
    hashtag: '',
    cards: [],
    stats: [],
    donors: [],
  });
  const [event, setEvent] = useState({
    title: '',
    subtitle: '',
    media: '',
  });
  const [initiatives, setInitiatives] = useState({
    cards: [{
      title: '',
      description: '',
      media: '',
    },
    {
      title: '',
      description: '',
      media: '',
    },
    {
      title: '',
      description: '',
      media: '',
    }],
    title: '',
    subtitle: '',
    hashtag: '',
    media: '',
  });

  useEffect(() => {
    axios.post(`${url}/page/get`, { id: '609c2b89a0996a0bec3f4a45' })
      .then((resp) => {
        setAb(resp.data.resp);
      })
      .catch((e) => { console.log(e); })

    axios.post(`${url}/page/get`, { id: '609c2be2a0996a0bec3f4a47' })
      .then((resp) => {
        setEvent(resp.data.resp);
      })
      .catch((e) => { console.log(e); })

    axios.post(`${url}/page/get`, { id: '609c2c12a0996a0bec3f4a48' })
      .then((resp) => {
        setInitiatives(resp.data.resp);
      })
      .catch((e) => { console.log(e); })

  }, [])

  window.onload = () => {
    if (window.location.pathname !== '/' || window.location.pathname !== '/initiatives') {
      setLoad(false);
    }
  }


  return (
    <div>
      {load ? <Loader /> : null}
      {window.location.pathname === '/' ? <Banner /> : null}
      <Nav loc={window.location.pathname} />
      <Switch>
        <Route path="/" exact >
          <Home loaded={() => setLoad(false)} state={state} />
        </Route>

        <Route path="/about-us" exact >
            <About content={ab} state={state} />
        </Route>

        <Route path="/sports" exact >
          <Suspense fallback={ <Loader /> }>
            <Sports state={state} />
          </Suspense>
        </Route>

        <Route path="/events" exact >
          <Suspense fallback={ <Loader /> }>
            <Events content={event} state={state} />
          </Suspense>
        </Route>

        <Route path="/initiatives" exact >
          <Suspense fallback={ <Loader /> }>
            <Initiatives loaded={() => setLoad(false)} content={initiatives} state={state} /></Suspense>
        </Route>

        <Route path="/donate" exact >
          <Suspense fallback={ <Loader /> }>
            <Donate state={state} /></Suspense>
        </Route>

        <Route path="/our-mission" exact >
          <Suspense fallback={ <Loader /> }>
            <Mission state={state} /></Suspense>
        </Route>

        <Route path="/people-behind" exact >
          <Suspense fallback={ <Loader /> }>
            <People state={state} /></Suspense>
        </Route>

        <Route path="/tournaments" exact >
          <Suspense fallback={ <Loader /> }>
            <Tournaments state={state} />
          </Suspense>
        </Route>

        <Route
          path='/blog/:id'
          exact
          render={(props) => <Suspense fallback={ <Loader /> }><Blog state={state} {...props} /></Suspense>}
        />

        <Route path="/admin" exact>
        <Suspense fallback={ <Loader /> }>
          <Admin />
          </Suspense>
        </Route>

        <Route path="/privacy-policy" exact >
        <Suspense fallback={ <Loader /> }>
          <Privacy />
          </Suspense>
        </Route>

        <Route path="/terms&conditions" exact >
        <Suspense fallback={ <Loader /> }>
          <Terms />
          </Suspense>
        </Route>

        <Route path="/refunds&cancellations" exact >
        <Suspense fallback={ <Loader /> }>
          <Terms />
          </Suspense>
        </Route>

        <ProtectedRoute path="/admin/createBlog" Component={CreatedBlog} />
        <ProtectedRoute path="/admin/view" Component={ViewBlogs} />
        <ProtectedRoute path="/admin/messages" Component={Contacts} />
        <ProtectedRoute path="/admin/support" Component={Support} />
        <ProtectedRoute path="/admin/payments" Component={Payment} />
        <ProtectedRoute path="/admin/change-content" Component={Content} />

        <Route path="/*">
        <Suspense fallback={ <Loader /> }>
          <Error state={state} />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
      <ConactUs loc={window.location.pathname} />
    </div>
  )

}

export default App

