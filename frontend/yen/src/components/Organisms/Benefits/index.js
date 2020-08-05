import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BenefitsBody from "../../Molecules/BenefitsBody";

const BenefitsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Benefits = ({ benefits, ...props }) => {
  return (
    <BenefitsCard>
      <BenefitsBody benefits={benefits} />
    </BenefitsCard>
  );
};

Benefits.propTypes = {
  benefits: PropTypes.array,
};

export default Benefits;
