import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 90% !important;
  }

  @media only screen and (max-width: 400px) {
    width: 90% !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
    width: 90% !important;
  }
`;

const SearchBar = ({ searchText, setSearchText, ...props }) => {
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchText}
      />
    </form>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
