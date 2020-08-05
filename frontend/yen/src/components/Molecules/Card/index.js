import React from "react";
import YenLogo from "./yenlogo.PNG";
import styled from "styled-components";

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const MembershipCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 480px;
  height: 280px;
  background: rgb(159, 133, 124);
  background: linear-gradient(
    128deg,
    rgba(159, 133, 124, 1) 0%,
    rgba(201, 177, 168, 1) 100%
  );
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.08);
  transition: ease-in-out 0.3s;

  :hover {
    width: 513px;
    height: 300px;
    -webkit-box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.08);
    transition: ease-in-out 0.3s;
  }

  @media only screen and (max-width: 768px) {
    width: 400px !important;
    height: 235px !important;
  }

  @media only screen and (max-width: 400px) {
    width: 300px !important;
    height: 170px !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
    width: 300px !important;
    height: 170px !important;
  }
`;

const YENLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 20px;
  margin-left: 20px;
`;

const MemberInfo = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-left: 20px;
  margin-bottom: 80px;

  @media only screen and (max-width: 400px) {
    font-size: 15px !important;
    margin-bottom: 40px !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
    font-size: 15px !important;
    margin-bottom: 40px !important;
  }
`;

const MembershipCardTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 70px;

  @media only screen and (max-width: 400px) {
    font-size: 15px !important;
    margin-top: 10px !important;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 30px !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
    font-size: 15px !important;
    margin-top: 20px;
  }
`;

const Card = ({ fName, lName, ...props }) => {
  return (
    <>
      <CardBody>
        <MembershipCard>
          <YENLogo src={YenLogo} alt="yenLogo"></YENLogo>
          <MembershipCardTitle>
            YEN Hong Kong Membership Card
          </MembershipCardTitle>
          <MemberInfo>{fName + " " + lName}</MemberInfo>
        </MembershipCard>
      </CardBody>
    </>
  );
};

export default Card;
