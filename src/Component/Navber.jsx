import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

const Navber = () => {

  return (
    <div className='navbar'>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/Owner'><li>Owner</li></NavLink>
        </ul>
    </div>
  )
}

export default Navber;