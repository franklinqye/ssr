import React from 'react';
import '../custom.scss';
import Block from './Block.js';
import ContactBlock from './ContactBlock.js';


const Footer = props => {

  const { title, theme="secondary"  } = props;

  return (
    <Block theme={theme}>
      <div className="col-12 text-left mb-4">
        <h4 className="text-primary font-weight-bold">{title}</h4>
      </div>
      <div className="col-12 col-md-6 text-left">
        <ContactBlock
          direction="horizontal"
          />
      </div>
    </Block>
  );
}


export default Footer;
