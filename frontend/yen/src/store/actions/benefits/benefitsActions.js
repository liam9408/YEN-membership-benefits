import axios from "axios";
import * as benefitsActionTypes from "./benefitsActionsTypes";

export function refreshBenefitsThunk(benefits) {
  return {
    type: benefitsActionTypes.REFRESH,
    benefits: benefits,
  };
}

export function loadBenefits(token) {
  return (dispatch) => {
    return axios(`${process.env.REACT_APP_API_SERVER}/benefits/list/all/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        dispatch(refreshBenefitsThunk(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
