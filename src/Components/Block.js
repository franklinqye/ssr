import React from 'react';
import '../custom.scss';


const Block = props => (
  <div className={`block row ${props.small ? "py-4" : ""} px-3 px-md-5 ${props.theme} ${props.className}`}>
    {props.children}
  </div>
)


export default Block;
