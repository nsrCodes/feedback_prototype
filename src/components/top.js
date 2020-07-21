import React from 'react';
import {Link} from 'react-router-dom'
import Home from '../images/home.png'

function Top({text}){
  return (
  <div className="top">
    <h1> {text}</h1>

    <Link to="/" ><img src={Home} alt="home"/></Link>
  </div>
  );
}

export default Top