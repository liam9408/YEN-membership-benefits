import React from "react";
import YenLogo from "./yenlogo.PNG";
import { connect } from "react-redux";

const cardBody = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "50px",
  marginTop: "50px",
};

const yenLogo = {
  width: "80px",
  height: "80px",
  marginTop: "20px",
  marginLeft: "20px",
};

const memberName = {
  fontSize: "20px",
  fontWeight: "600",
  color: "white",
  marginLeft: "20px",
  marginBottom: "80px",
};

const membershipCardContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // alignContent: "space-between",
};

const Card = (props) => {
  return (
    <>
      <div style={cardBody} className="card-body">
        <div id="membershipCard" style={membershipCardContainer}>
          <img id="yenLogo" style={yenLogo} src={YenLogo} alt="yenLogo"></img>
          <span style={memberName}>Chan Tai Ming</span>
        </div>
      </div>
    </>
  );
};

export default Card;
