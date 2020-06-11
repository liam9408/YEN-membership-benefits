import React from "react";
import { Card } from "./Card";
import { Benefits } from "./Benefits";

const Home = (props) => {
  const fName = localStorage.getItem("fName");
  const lName = localStorage.getItem("lName");

  return (
    <>
      <div className="home-body">
        <Card fName={fName} lName={lName} />
        <Benefits />
      </div>
    </>
  );
};

export default Home;
