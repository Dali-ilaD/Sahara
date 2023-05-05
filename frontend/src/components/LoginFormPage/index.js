import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginFormPage () {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/products" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  const handleDemoUser = (e) =>{
    e.preventDefault();
    return dispatch(sessionActions.login({credential:'Demo-lition', password:'password'}))

  }

  return (
    <div className='login-form-container'>
    <form onSubmit={handleSubmit} className='login-form'>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <label className='login-credential'>
        Username or Email
        <br/>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className='login-password'>
        Password 
        <br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className='submit-button'>Log In</button>
      <br/>
      <button onClick={handleDemoUser} className='demo-user'>Demo Log in</button>
    </form>
    </div>
  );
}

export default LoginFormPage;