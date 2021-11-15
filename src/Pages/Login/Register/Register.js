import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../image/login1.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };

    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const handleloginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    e.preventDefault();
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-5">Register</h4>
                {!isLoading && (
                  <form onSubmit={handleloginSubmit}>
                    <div className="mb-3">
                      <label for="formGroupExampleInput" className="form-label">
                        Name:
                      </label>
                      <input
                        name="name"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Your Name"
                        onBlur={handleOnBlur}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="formGroupExampleInput" className="form-label">
                        Email:
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Your Email"
                        onBlur={handleOnBlur}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        Password:
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Your Password"
                        onBlur={handleOnBlur}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        Password Confirm:
                      </label>
                      <input
                        type="password"
                        name="password2"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Retype Your Password"
                        onBlur={handleOnBlur}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-danger mb-3 mt-3 input-width"
                    >
                      Register
                    </button>
                    <Link to="/login" className="register-button">
                      <a href="">Already Register?please Login</a>
                    </Link>
                  </form>
                )}
                {isLoading && (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                {user?.email && (
                  <div class="alert alert-primary" role="alert">
                    User Created successfully!!
                  </div>
                )}
                {authError && (
                  <div class="alert alert-primary" role="alert">
                    {authError}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={login} alt="" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
