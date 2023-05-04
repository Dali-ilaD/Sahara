import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Searchbar from './searchbar';
import {FiShoppingCart} from 'react-icons/fi';
import {RiHomeLine} from 'react-icons/ri'
import './Sahara-06.png' 
import { fetchCartItems } from '../../store/cartItem';


function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() =>{
    if(sessionUser){
      dispatch(fetchCartItems());
    }
},[dispatch, sessionUser])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='nav-right'>
      <ProfileButton user={sessionUser} className='profile-button'/>
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
        <NavLink exact to="/products" > <RiHomeLine className='home-icon'/> </NavLink>
        
      </li>
      <li className='search-bar'>
        <Searchbar/>
      </li>
      <li className='cart-link'>
        <NavLink to='/cart_items' > <FiShoppingCart className='cart-icon'/> </NavLink>
        
      </li>
      <li className='login-items'>
      {sessionLinks}
      </li>

    </ul>
    </nav>
  );
}

export default Navigation;