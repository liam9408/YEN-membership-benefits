import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { RouteWithLayout } from "./components";

import {
  Home as HomeView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from "./views";
import { Normal as NormalLayout } from "./layouts";

import * as authActions from "../src/store/actions/auth/authActions";

const Routes = (props) => {
  if (props.isLoggedIn) {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <RouteWithLayout
          component={HomeView}
          exact
          layout={NormalLayout}
          path="/home"
        />
        <RouteWithLayout
          component={NotFoundView}
          exact
          layout={NormalLayout}
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  } else {
    return (
      <>
        <RouteWithLayout
          component={SignInView}
          exact
          layout={NormalLayout}
          path="/sign-in"
        />
        <Redirect to="/sign-in" />
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  logoutDispatch: () => {
    dispatch(authActions.logoutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
