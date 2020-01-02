import React from 'react';
import '../custom.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Block from './Block.js';


const dataTemp = {
  dataIDs: ["services", "team", "contact"],
  data: {
    services: {
      title: "Available Services",
      dest: "/available-services"
    },
    team: {
      title: "Our Team",
      dest: "/our-team"
    },
    contact: {
      title: "Contact Us",
      dest: "/contact-us"
    }
  }
}


const makeLink = (title, dest, theme) => (
  <div key={title} className="p-2">
    <NavLink to={dest} className={`navLink ${theme}`} activeClassName="font-weight-bold">{title}</NavLink>
  </div>
)

const NavBar = props => {
  const { title, data=dataTemp, theme} = props;

  return (
    <Block className="navBar" theme={theme} small >
      <div className="col-3 text-left">
        <Link to="/" className={`logo ${theme}`}>{title}</Link>
      </div>
      <div className="col-9">
        <div className="d-flex flex-row justify-content-end">
          {
            data && data.dataIDs && 
              data.dataIDs.map(id => makeLink(data.data[id].title, data.data[id].dest, theme))
          }
        </div>
      </div>
    </Block>
  );
}

export default NavBar;
