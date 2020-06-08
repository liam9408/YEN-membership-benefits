import React from "react";
import { Card } from "./Card";
import { Benefits } from "./Benefits";

const Home = (props) => {
  return (
    <>
      <div className="home-body">
        <Card />
        <Benefits />
      </div>
    </>
  );
};

export default Home;
