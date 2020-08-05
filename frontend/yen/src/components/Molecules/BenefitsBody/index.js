import React from "react";
import PropTypes from "prop-types";

import BenefitItem from "../../Atoms/BenefitItem";

const BenefitsBody = ({ benefits, searchText, filterText, ...props }) => {
  if (searchText.length) {
    const param = searchText.toLowerCase();
    const arr = [...benefits];
    const data = arr.filter(function (item) {
      return item.company.toLowerCase().includes(param);
    });
    benefits = data;
  }

  if (filterText !== "All") {
    const param = filterText.toLowerCase();
    const arr = [...benefits];
    const data = arr.filter(function (item) {
      return item.category.toLowerCase().includes(param);
    });
    benefits = data;
  }

  return (
    <React.Fragment>
      {benefits.map((item, index) => {
        return (
          <>
            <BenefitItem item={item} />
          </>
        );
      })}
    </React.Fragment>
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
