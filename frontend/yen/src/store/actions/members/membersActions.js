import axios from "axios";
import * as memberActionTypes from "./memberActionTypes";

export function refreshMembersThunk(member) {
  return {
    type: memberActionTypes.GETMEMBER,
    fName: member,
    lName: member,
  };
}

export function loadMember(userId) {
  return (dispatch) => {
    console.log("ran");
    return axios(`${process.env.REACT_APP_API_SERVER}/members/info/${userId}`)
      .then((res) => {
        console.log(res);
        dispatch(refreshMembersThunk(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
