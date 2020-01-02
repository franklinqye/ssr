import React from 'react';
import '../custom.scss';
import Footer from './Footer.js';
import NavBar from './NavBar.js';

export default function PageTemplate(props) {

  const { navBarData={title: "SSR Supports"}, footerData, children, theme } = props;

  return (
    <div className="App">
      <NavBar 
        title={navBarData.title} 
        theme={theme}
        />
      {children}
      <Footer 
        title={"SSR Supports" || footerData.title}
        theme="secondary"
        />
    </div>
  );
}
