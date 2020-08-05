import React from "react";
import styled from "styled-components";
import Logo from "../Logo";

const BenefitsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: space-between;
  width: 100%;
`;

const BenefitDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const BenefitsTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const BenefitsTitle = styled.h1`
  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
`;

const BenefitsText = styled.h5`
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 15px;
`;

const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 300;
  line-height: 20px;
`;

const BenefitsCardBody = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const BenefitItem = ({ item, ...props }) => {
  return (
    <CardBody>
      <BenefitsCardBody>
        <BenefitsContent>
          <Logo />
          <BenefitDetails>
            <BenefitsTop>
              <BenefitsTitle>{item.company}</BenefitsTitle>
              <BenefitsText>{item.benefit_title}</BenefitsText>
            </BenefitsTop>
            <Description>{item.benefits_description}</Description>
          </BenefitDetails>
        </BenefitsContent>
      </BenefitsCardBody>
    </CardBody>
  );
};

export default BenefitItem;