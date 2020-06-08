import * as benefitsActionsTypes from "../actions/benefits/benefitsActionsTypes";

const initialState = {
  benefitsRootReducer: [
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case benefitsActionsTypes.REFRESH:
      return {
        benefitsRootReducer: action.benefits,
      };
    default:
      return state;
  }
};

export default rootReducer;
