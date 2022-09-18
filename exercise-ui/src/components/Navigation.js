import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../create">Create Exercise</Link>
    </nav>
  );
}

export default Nav;
