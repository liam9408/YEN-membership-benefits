import * as membersActionsTypes from "../actions/members/membersActionTypes";

const initialState = {
  benefitsRootReducer: [
    {
      f_name: "pending",
      l_name: "pending",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case membersActionsTypes.GETMEMBER:
      return {
        benefitsRootReducer: [
          {
            f_name: action.fName,
            l_name: action.lName,
          },
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
