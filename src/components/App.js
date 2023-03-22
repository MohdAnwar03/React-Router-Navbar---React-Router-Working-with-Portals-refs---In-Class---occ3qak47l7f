// कौन कहता है वक़्त किसी का नहीं होता, मैने मेरे ही वक़्त को मुझे बर्बाद करते देखा है।

import React from 'react'
import '../styles/App.css';
import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <div id='navbar'>
          <Link to='/home' id='home-link'>Home</Link>
          <Link to='/about-us' id='aboutus-link'>About Us</Link>
        </div>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/about-us'>
            <AboutUs />
          </Route>
          <Redirect from='/' to='/home' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
