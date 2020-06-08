import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as benefitsActions from "../../../store/actions/benefits/benefitsActions";

const BenefitsList = (props) => {
  useEffect(() => {
    props.refreshMDP();
  }, []);

  return (
    <>
      <div id="benefits-list-card">
        <h5>This is the benefit card</h5>
        {props.benefitsMSP.map((item, index) => {
          console.log(item);
          return (
            <>
              <h5>{item.company}</h5>
              <h5>{item.benefit_title}</h5>
              <p>{item.benefits_description}</p>
            </>
          );
        })}
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
    refreshMDP: (method) => dispatch(benefitsActions.loadBenefits(method)),
  };
};

BenefitsList.propTypes = {
  className: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitsList);
