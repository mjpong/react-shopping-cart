import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="container p-5">
        <div>
          <h1 className="mb-4 text-center"> WELCOME TO SHOP BACK </h1>
          <hr></hr>
        </div>
        <div>
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." Section
            1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
            BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>
          <h5 className="m-3 text-center">ABOUT US</h5>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
            explain to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No one rejects,
            dislikes, or avoids pleasure itself, because it is pleasure, but
            because those who do not know how to pursue pleasure rationally
            encounter consequences that are extremely painful. Nor again is
            there anyone who loves or pursues or desires to obtain pain of
            itself, because it is pain, but because occasionally circumstances
            occur in which toil and pain can procure him some great pleasure.
          </p>
        </div>
        <Link className="btn add-product-cart continue-browsing" to="/products">
          OUR PRODUCTS
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Landing;
