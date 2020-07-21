import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
  return(
    <nav className="main">
      <ul>
        <li> <Link to='/admin'> Admin </Link></li>
        <li> <Link to='/feedback'> Client </Link></li>
      </ul>
    </nav>
  )
}

export default Nav;