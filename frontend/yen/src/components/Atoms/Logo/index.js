import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-color: grey;
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-right: 40px;
  margin-left: 20px;
  margin-bottom: 20px;

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
    margin-left: 10px !important;
    margin-right: 20px !important;
  }

  @media only screen and (max-width: 400px) {
    margin-left: 10px !important;
    margin-right: 20px !important;
  }
`;

const Logo = ({ ...props }) => {
  return <Image />;
};

export default Logo;
