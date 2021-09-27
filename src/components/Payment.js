import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <React.Fragment>
      <div className="container p-5">
        <div>
          <h1 className="mb-4 text-center"> PAYMENT </h1>
          <hr></hr>
        </div>

        <div className="row create-account-wrapper">
          <div className="form-holder">
            <div className="form-content">
              <div className="create-account-form col-lg-7 col-12">
                <div className="form-label">Name: </div>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formState.name}
                  onChange={updateFormField}
                />
                <div className="form-error-text">{errorState["nameError"]}</div>
              </div>
              <div className="create-account-form col-lg-7 col-12">
                <div className="form-label">Email: </div>
                <input
                  className="form-control"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={formState.email}
                  onChange={updateFormField}
                />
                <div className="form-error-text">
                  {errorState["emailError"]}
                </div>
              </div>

              <div className="create-account-form col-12">
                <div className="form-label">Address: </div>
                <input
                  className="form-control"
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={formState.address}
                  onChange={updateFormField}
                />
                <div className="form-error-text">
                  {errorState["addressError"]}
                </div>
              </div>
              <div className="mt-3">
                <button className="btn allbtn" onClick={createAccount}>
                  Create Account
                </button>

                <Link className="btn allbtn mx-3" to="/products">
                  {" "}
                  Cancel{" "}
                </Link>
                <p
                  className="form-error-text"
                  style={{ display: registerError === true ? "block" : "none" }}
                >
                  Register Error, Please check error messages and try again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
