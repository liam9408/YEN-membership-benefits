import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchBar = ({ ...props }) => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" /> Only show products in stock
      </p>
    </form>
  );
};

Benefits.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
