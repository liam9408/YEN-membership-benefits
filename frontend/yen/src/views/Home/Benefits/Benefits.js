import React from "react";
import BenefitsList from "./BenefitsList";
import { connect } from "react-redux";

const Benefits = (props) => {
  return (
    <>
      <div id="benefits-body">
        <BenefitsList />
      </div>
    </>
  );
};

export default Benefits;
