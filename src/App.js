import React from 'react';
import './custom.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home, AvailableServices, OurTeam, ContactUs } from './Pages'

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>SSR Supports</title>
          <meta name="description" content="SSR Supports has the expertise to prepare your company for full compliance to the regulations imposed by US and European regulatory authorities. We provide quality services for both drug and medical device developers from product design, confirmation, validation, registration to post-market surveillance. Our goals are to save time and money for mature and larger device and drug companies, and to guide less mature and smaller companies through all the regulatory pathways to product registration." />
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Raleway&display=swap" rel="stylesheet"/>

          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
          <meta name="theme-color" content="#e9e9ed" />
        </Helmet>
        <Router>
          <Switch>
            <Route path="/available-services">
              <AvailableServices />
          </Route>
            <Route path="/our-team">
              <OurTeam />
          </Route>
            <Route path="/contact-us">
              <ContactUs />
          </Route>
            <Route path="/">
              <Home />
          </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
