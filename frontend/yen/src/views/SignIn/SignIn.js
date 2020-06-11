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
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input label="Email address" name="email" placeholder="email"></input>
        <input label="Password" name="password" placeholder="password"></input>
        <button type="submit">Log In</button>
      </form>
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
