import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <div>
      <header className="header">
        <div>
          <h1>
            <Link to="/" className="shop-back">
              SHOP BACK
            </Link>
          </h1>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/products"> Products </Link>
            </li>
            <li>
              <Link to="/shoppingcart">
                <i class="fas fa-shopping-cart"></i>
                SHOPPING CART ({cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
