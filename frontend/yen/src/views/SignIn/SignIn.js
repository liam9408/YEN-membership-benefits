import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

import * as authActions from "../../store/actions/auth/authActions";
import { connect } from "react-redux";

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128,
    },
  },
};

const SignIn = (props) => {
  const { history } = props;

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const handleSignIn = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    props.loginDispatch(email, password);
  };

  return (
    <>
      <h1>Sign In</h1>
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

// export default withRouter(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
