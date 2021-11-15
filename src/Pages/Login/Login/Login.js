import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../image/login1.png";
import "./Login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleloginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <h1>This is log in</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-5">Login</h4>
                <form onSubmit={handleloginSubmit}>
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
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Your Password"
                      onChange={handleOnChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-danger mb-3 mt-3 input-width"
                  >
                    Login
                  </button>
                  <Link to="/register" className="register-button">
                    <a href="">New User? Please Register.</a>
                  </Link>
                  {isLoading && (
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                  {user?.email && (
                    <div class="alert alert-primary" role="alert">
                      Login successfully!
                    </div>
                  )}
                  {authError && (
                    <div class="alert alert-primary" role="alert">
                      {authError}
                    </div>
                  )}
                </form>
                <button
                  type="submit"
                  className="btn btn-warning mb-3 mt-3 input-width"
                  onClick={handleGoogleSignIn}
                >
                  Google signin
                </button>
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

export default Login;
