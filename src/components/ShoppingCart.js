import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cartItems, addToCart, removeFromCart }) => {
  const totalCost = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <React.Fragment>
      <div className="cart-items">
        <div className="cart-items-header">
          <h1>Your Shopping Cart</h1>
        </div>
        {cartItems.length === 0 && (
          <div className="no-items">
            <h5>
              <strong>Your Cart is Empty</strong>
            </h5>
            <p>Add something to make me happy!</p>
          </div>
        )}
        <div>
          {cartItems.map((item) => (
            <div className="row">
              <div key={item.id} className="cart-items-list">
                <div className="col-5">
                  <div className="cart-items-name">{item.title}</div>
                </div>
                <div className="col-3">
                  <div className="cart-items-function">
                    <button
                      className="cart-items-add"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="cart-items-remove"
                      onClick={() => removeFromCart(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="cart-items-price">
                    {item.quantity} @ ${item.price} ea
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr></hr>
        <div className="subtotal">SUBTOTAL: ${totalCost.toFixed(2)}</div>

        <Link className="btn checkout-btn" to="/checkout">
          Checkout
        </Link>

        <Link className="btn add-product-cart continue-browsing" to="/products">
          Continue Browsing
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
