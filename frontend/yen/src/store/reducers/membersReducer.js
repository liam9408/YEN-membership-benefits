import * as membersActionsTypes from "../actions/members/membersActionTypes";

const initialState = {
  membersRootReducer: [
    {
      user_type: "pending",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case membersActionsTypes.GETMEMBER:
      return {
        membersRootReducer: [
          {
            user_type: action.user_type,
          },
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
