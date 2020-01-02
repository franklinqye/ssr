import React from 'react';
import './custom.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home, AvailableServices, OurTeam, ContactUs } from './Pages'

class App extends React.Component {
  render() {
    return (
      <div id="root">
        <head>
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Raleway&display=swap" rel="stylesheet"/>
        </head>
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
