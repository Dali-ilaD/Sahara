import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Searchbar from './searchbar';


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='nav-right'>
      <ProfileButton user={sessionUser} />
      </div>
    );

  } else {
    sessionLinks = (
      <>
        <div className='nav-right' >
        <NavLink to="/login" className='login-button'>Log In</NavLink>
        <NavLink to="/signup" className='signup-button'>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <nav>
    <ul className='nav-items'>
      <li className='home'>
        <NavLink exact to="/"><a><img src='Sahara/frontend/src/components/Navigation/ProfileButton.js' alt=''/></a>Home</NavLink>
        
      </li>
      <li className='search-bar'>
        <Searchbar/>
      </li>
      <li className='login-items'>
      {sessionLinks}
      </li>

    </ul>
    </nav>
  );
}

export default Navigation;