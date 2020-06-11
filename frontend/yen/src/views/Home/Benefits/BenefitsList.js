import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as benefitsActions from "../../../store/actions/benefits/benefitsActions";

// ---- styling
const cardBody = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  // width: "50%",
};

const benefitsCard = {
  backgroundColor: "white",
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  borderRadius: "10px",
  // webkitBoxShadow: "0px 0px 13px 3px rgba(0, 0, 0, 0.08)",
  // mozBoxShadow: "0px 0px 13px 3px rgba(0, 0, 0, 0.08)",
  // boxShadow: "0px 0px 13px 3px rgba(0, 0, 0, 0.08)",
};

const benefitsContent = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  alignContent: "space-between",
  width: "100%",
};

const benefitsTop = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
};

const benefitsDetails = {
  display: "flex",
  flexDirection: "column",
};

const benefitsTitle = {
  marginRight: "20px",
  marginBottom: "10px",
  marginTop: "20px",
  fontSize: "15px",
  fontWeight: "400",
};

const benefitsTitleText = {
  marginBottom: "10px",
  marginTop: "10px",
  fontSize: "15px",
};

const benefitsDescriptionText = {
  marginTop: "0px",
  marginBottom: "20px",
  fontSize: "13px",
  fontWeight: "300",
};

const lineStyle = {
  border: "0.5px solid #DCDCDC",
  width: "100%",
};

const image = {
  backgroundColor: "grey",
  width: "100px",
  height: "100px",
  marginTop: "20px",
  marginRight: "40px",
  marginLeft: "20px",
  marginBottom: "20px",
};

const benefitsListBody = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
};

const alignContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "50%",
};

const leftText = {
  textAlign: "left",
};

const BenefitsList = (props) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    props.refreshMDP(token);
  }, [props, token]);

  return (
    <>
      <div id="benefitsListCard" style={benefitsListBody}>
        <div id="alignContainer" style={alignContainer}>
          <h4 id="leftText" style={leftText}>
            All membership benefits
          </h4>
          {props.benefitsMSP.map((item, index) => {
            return (
              <>
                <div id="cardBody" style={cardBody}>
                  <div id="benefitsCard" style={benefitsCard}>
                    {/* <img src={item.logo}></img> */}
                    <div id="benefitsContent" style={benefitsContent}>
                      <div style={image}></div>
                      <div id="benefitDetails" style={benefitsDetails}>
                        <div style={benefitsTop}>
                          <h1 style={benefitsTitle}>{item.company}</h1>
                          <h5 style={benefitsTitleText}>
                            {item.benefit_title}
                          </h5>
                        </div>
                        <p style={benefitsDescriptionText}>
                          {item.benefits_description}
                        </p>
                      </div>
                    </div>
                    <hr style={lineStyle} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    benefitsMSP: state.benefits.benefitsRootReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshMDP: (token) => dispatch(benefitsActions.loadBenefits(token)),
  };
};

BenefitsList.propTypes = {
  className: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitsList);
