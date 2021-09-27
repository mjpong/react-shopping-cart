import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const CheckOut = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [errorState, setErrorState] = useState({});

  const formValidation = () => {
    let formValid = true;
    let errorMessage = {};

    if (name === "") {
      formValid = false;
      errorMessage["nameError"] = "Please provide a valid name.";
    }

    if (address === "" || address.length > 255 || address.length < 10) {
      formValid = false;
      errorMessage["addressError"] = "Please provide your address.";
    }
    setErrorState(errorMessage);
    return formValid;
  };

  const proceedToPayment = () => {
    let valid = formValidation();
    if (!valid) {
      return;
    } else {
      history.push("/payment");
    }
  };

  return (
    <React.Fragment>
      <div className="container p-5">
        <div>
          <h1 className="mb-4 text-center"> DELIVERY ADDRESS </h1>
          <hr></hr>
        </div>
        <div className="row">
          <p> Sending a gift or delivery to a friend? </p>
          <p> Please fill out receiver details accordingly: </p>
          <div className="create-account-form col-lg-5 col-md-5 col-sm-12 mb-4">
            <div className="form-label">Name: </div>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <div className="form-error-text">{errorState["nameError"]}</div>
          </div>
          <div className="create-account-form col-12 mb-4">
            <div className="form-label">Address: </div>
            <input
              className="form-control"
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <div className="form-error-text">{errorState["addressError"]}</div>
          </div>
        </div>
        <button className="btn checkout-btn" onClick={proceedToPayment}>
          PROCEED TO PAYMENT
        </button>
      </div>
    </React.Fragment>
  );
};

export default CheckOut;
