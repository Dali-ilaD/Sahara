import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Searchbar from './searchbar';
import './Sahara-06.png'
import { fetchCartItems } from '../../store/cartItem';
import { FiShoppingCart } from 'react-icons/fi';
import { RiHomeLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
// import { FiLogIn } from 'react-icons/fi'


function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionUser) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, sessionUser])


  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='nav-right'>
        <ProfileButton user={sessionUser} className='profile-button' />
      </div>
    );

  } else {
    sessionLinks = (
      <>
        {/* <div className='nav-right' >
        <NavLink to="/login" className='login-button'><FiLogIn className='login-icon'/></NavLink> */}
        {/* <NavLink to="/signup" className='signup-button'>Sign Up</NavLink> */}
        {/* </div> */}

        <div className='nav-right'
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div className='dropdown'>

            <div className='dropdown-toggle'>
              {/* <FiLogIn className='login-icon' /> */}
              <p className='dropdown-toggle-text'>
                <h3 className='hello-signin'>
                  Hello, sign in
                </h3>
              
              <h3 className='accounts'>
                Accounts
              </h3>
              </p>
            </div>
            {isOpen && (
              <div className='ui vertical menu' id='dropdown-menu'>
                <br/>
                <NavLink to="/login" className='signin-button'>Signin</NavLink> 
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <nav>
      <ul className='nav-items'>
        <div>
          <a href='https://github.com/Dali-ilaD'><BsGithub className='github-icon' /></a>
          <a href='https://www.linkedin.com/in/david-lai-506779206/'><FaLinkedin className='linkedin-icon' /></a>
        </div>
        {/* <Button class="ui toggle button" {addDarkmodeWidget
      window.addEventListener('load', addDarkmodeWidget);
      id='darkmodetoggle'}/> */}
        <li className='home'>
          <NavLink exact to="/products" > <RiHomeLine className='home-icon' /> </NavLink>

        </li>
        <li className='search-bar'>
          <Searchbar />
        </li>
        <li className='login-items'>
          {sessionLinks}
          <li className='cart-link'>
            <NavLink to='/cart_items' > <FiShoppingCart className='cart-icon' /> </NavLink> 
            Cart
          </li>
        </li>

      </ul>
    </nav>
  );
}

export default Navigation;