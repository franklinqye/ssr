import React from 'react';
import '../custom.scss';
import Block from './Block.js';


const Header = props => (
  <Block theme={props.theme} >
    <div className="col-12 text-left">
      <h1>{props.title}</h1>
    </div>
  </Block>
)


export default Header;
