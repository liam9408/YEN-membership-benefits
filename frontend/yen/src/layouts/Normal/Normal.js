import React from "react";
import PropTypes from "prop-types";

const Normal = (props) => {
  const { children } = props;

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

Normal.propTypes = {
  children: PropTypes.node,
};

export default Normal;
