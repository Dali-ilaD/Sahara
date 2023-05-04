import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignUpFormPage';
import Navigation from "./components/Navigation";
import ProductShowItem from './components/ProductShowItem';
import ProductIndex from './components/ProductIndex';
import CartItems from './components/CartItems/index';

function App() {

  return (
    <>
      <Navigation />
      <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/products/:productId">
        <ProductShowItem />
      </Route>
      <Route path="/products">
        <ProductIndex />
      </Route>
      <Route path="/cart_items">
        <CartItems />
      </Route>
      
      </Switch>
    </>
  );
}

export default App;
