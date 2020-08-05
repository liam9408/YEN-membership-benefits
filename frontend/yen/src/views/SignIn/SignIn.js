import React from "react";
import PropTypes from "prop-types";

import * as authActions from "../../store/actions/auth/authActions";
import { connect } from "react-redux";

const SignIn = (props) => {
  const handleSignIn = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    props.loginDispatch(email, password);
  };

  return (
    <>
      <div id="sign-in-body">
        <div id="yen-logo-main"></div>
        <h1>YEN HK</h1>
        <form onSubmit={handleSignIn} className="form-container">
          <input label="Email address" name="email" placeholder="email"></input>
          <input
            label="Password"
            name="password"
            placeholder="password"
          ></input>
          <button id="sign-in-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

SignIn.propTypes = {
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email, password) => {
    dispatch(authActions.loginThunk(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
