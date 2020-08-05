import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BenefitItem from "../../Atoms/BenefitItem";

const AlignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 80% !important;
  }

  @media only screen and (max-width: 400px) {
    width: 90% !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
    width: 90% !important;
  }
`;

const Title = styled.h4`
  text-align: left;
`;

const BenefitsBody = ({ benefits, ...props }) => {
  return (
    <AlignContainer>
      <Title>All membership benefits</Title>
      {benefits.map((item, index) => {
        return (
          <React.Fragment>
            <BenefitItem item={item} />
          </React.Fragment>
        );
      })}
    </AlignContainer>
  );
};

BenefitsBody.propTypes = {
  benefits: PropTypes.array,
};

BenefitsBody.defaultProps = {
  benefits: [
    {
      id: "loading",
      company: "loading",
      company_logo: "loading",
      benefit_title: "loading",
      benefits_description: "loading",
      category: "loading",
    },
  ],
};

export default BenefitsBody;
