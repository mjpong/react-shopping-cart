import React from "react";
import { Route, Switch } from "react-router";

import Landing from "../components/Landing";
import ProductListing from "../components/ProductListing";
import ShoppingCart from "../components/ShoppingCart";
import CheckOut from "../components/CheckOut";
import Payment from "../components/Payment";
import Search from "../components/Search";

const Routes = ({ addToCart, removeFromCart, cartItems, added }) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/products">
          <ProductListing addToCart={addToCart} />
        </Route>
        <Route exact path="/shoppingcart">
          <ShoppingCart
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>
        <Route exact path="/checkout">
          <CheckOut />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
