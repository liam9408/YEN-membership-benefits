import React from "react";
import { Card } from "./Card";
import { Benefits } from "./Benefits";

const Home = (props) => {
  const userId = localStorage.getItem("id");

  console.log(userId);

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
