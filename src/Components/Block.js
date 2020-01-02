import React from 'react';
import '../custom.scss';


const Block = props => (
  <div className={`row ${props.small ? "py-4" : "py-5"} px-5 ${props.theme} ${props.className}`}>
    {props.children}
  </div>
)


export default Block;
