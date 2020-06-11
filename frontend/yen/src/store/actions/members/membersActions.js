import axios from "axios";
import * as memberActionTypes from "./membersActionTypes";

export function refreshMembersThunk(status) {
  return {
    type: memberActionTypes.GETMEMBER,
    user_type: status,
  };
}

// export function loadMember(userId) {
//   return (dispatch) => {
//     console.log("ran");
//     return axios(`${process.env.REACT_APP_API_SERVER}/members/info/${userId}`)
//       .then((res) => {
//         // console.log(res, "data");
//         dispatch(refreshMembersThunk(res.data));
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//
// }

export function isAdmin(token) {
  return (dispatch) => {
    return axios(`${process.env.REACT_APP_API_SERVER}/members/check-access`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => {
        let user_type = res.data[0].user_type;
        dispatch(refreshMembersThunk(user_type));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
