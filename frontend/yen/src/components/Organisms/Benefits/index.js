import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BenefitsBody from "../../Molecules/BenefitsBody";
import SearchBar from "../../Atoms/SearchBar";
import FilterBar from "../../Atoms/FilterBar";

const BenefitsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Title = styled.h4`
  text-align: left;
`;

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

const Benefits = ({ benefits, ...props }) => {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("All");

  return (
    <BenefitsCard>
      <AlignContainer>
        <FilterBar setFilterText={setFilterText} />
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <BenefitsBody
          filterText={filterText}
          searchText={searchText}
          benefits={benefits}
        />
      </AlignContainer>
    </BenefitsCard>
  );
};

Benefits.propTypes = {
  benefits: PropTypes.array,
};

export default Benefits;
