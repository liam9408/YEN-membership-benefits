import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const options = [
  { value: "All", disabled: false },
  { value: "Food & Drinks", disabled: true },
  { value: "Lifestyle", disabled: true },
  { value: "Travel", disabled: true },
  { value: "Business", disabled: true },
];

const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0px;
`;

const FilterOptionDisabled = {
  marginRight: "20px",
  cursor: "pointer",
  fontWeight: "400",
  fontSize: "20px",
};

const FilterOptionActivated = {
  marginRight: "20px",
  cursor: "pointer",
  fontWeight: "800",
  fontSize: "20px",
  textDecoration: "underline",
};

const FilterOption = styled.li`
  @media only screen and (max-width: 768px) {
    font-size: 15px !important;
  }

  @media only screen and (max-width: 400px) {
    font-size: 15px !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
    font-size: 15px !important;
  }
`;

const FilterBar = ({ filterText, setFilterText, ...props }) => {
  const [filteredOptions, setFilteredOptions] = useState([...options]);
  const handleChange = (value, index) => {
    setFilterText(value);
    let newOptions = [...filteredOptions];
    for (const item of filteredOptions) {
      item.disabled = true;
      newOptions[index].disabled = false;
      setFilteredOptions(newOptions);
    }
  };

  return (
    <React.Fragment>
      <OptionsContainer>
        {filteredOptions.map((item, index) => {
          return (
            <FilterOption
              type="text"
              value={item.value}
              style={
                item.disabled ? FilterOptionDisabled : FilterOptionActivated
              }
              onClick={() => handleChange(item.value, index)}
            >
              {item.value}
            </FilterOption>
          );
        })}
      </OptionsContainer>
    </React.Fragment>
  );
};

FilterBar.propTypes = {
  className: PropTypes.string,
};

export default FilterBar;
