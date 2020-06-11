import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as membersActions from "../../store/actions/members/membersActions";

const Admin = (props) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    props.verifyMDP(token);
  }, [props, token]);

  let isAdmin = props.membersMSP && props.membersMSP[0].user_type;

  if (isAdmin !== "admin") {
    return (
      <>
        <div>
          <h1>You don't have access to this page</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>Admin Page</h1>
        </div>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    membersMSP: state.members.membersRootReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyMDP: (token) => dispatch(membersActions.isAdmin(token)),
  };
};

Admin.propTypes = {
  className: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
