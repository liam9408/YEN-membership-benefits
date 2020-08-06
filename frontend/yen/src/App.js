import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

const browserHistory = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter
          history={browserHistory}
          basename={"/"}
          // basename={"https://yenhk-member.surge.sh/"}
        >
          <Routes />
        </BrowserRouter>
      </>
    );
  }
}
