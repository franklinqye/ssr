import React from 'react';
import '../custom.scss';
import {
  Link
} from "react-router-dom";


const Button = props => {

  const {title, dest=false, onClick=()=>null, height=false, width=false} = props;

  return (<Link 
    className="btn btn-primary px-5 py-3" 
    to={dest || onClick} 
    role="button">{title}
    </Link>
  );
}


export default Button;
