import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as membersActions from "../../store/actions/members/membersActions";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Title = styled.h1``;

const SubTitle = styled.h3``;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin-left: 50px;
`;

const SubmitButton = styled.button`
  width: 430px;
  height: 40px;
  margin-top: 20px;
`;

const FormBody = styled.div`
  margin-right: 50px;
`;

const Forms = styled.div`
  display: flex;
  flex-direction: row;
`;

const Admin = (props) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    props.verifyMDP(token);
  }, [props, token]);

  let isAdmin = props.membersMSP && props.membersMSP[0].user_type;

  const addBenefits = (values) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_SERVER}/benefits/add-benefit`,
      data: values,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        toast.success("Benefit added successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addUser = (values) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_SERVER}/benefits/add-benefit`,
      data: values,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        toast.success("User added successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //   if (isAdmin !== "admin") {
  //     return (
  //       <React.Fragment>
  //         <Title>You don't have access to this page</Title>
  //       </React.Fragment>
  //     );
  //   } else {
  return (
    <Container>
      <ToastContainer />
      <Title>YEN Admin</Title>
      <Forms>
        <FormBody>
          <SubTitle>Add Benefit</SubTitle>
          <Formik
            initialValues={{
              company: "",
              benefitTitle: "",
              benefitDesc: "",
              category: "",
              files: "",
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => addBenefits(values));
            }}
          >
            <StyledForm>
              <Field placeholder="Company" name="company" type="text" />
              <Field placeholder="Title" name="benefitTitle" type="text" />
              <Field placeholder="Description" name="benefitDesc" type="text" />
              <Field placeholder="Category" name="category" type="text" />
              <Field placeholder="Files" name="files" type="text" />
              <SubmitButton type="submit">Submit</SubmitButton>
            </StyledForm>
          </Formik>
        </FormBody>

        <FormBody>
          <SubTitle>Add User</SubTitle>
          <Formik
            initialValues={{
              fName: "",
              lName: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => addUser(values));
            }}
          >
            <StyledForm>
              <Field placeholder="First Name" name="fName" type="text" />
              <Field placeholder="Last Name" name="lName" type="text" />
              <Field placeholder="Email" name="email" type="text" />
              <Field placeholder="Password" name="password" type="password" />
              <SubmitButton type="submit">Submit</SubmitButton>
            </StyledForm>
          </Formik>
        </FormBody>
      </Forms>
    </Container>
  );
  //   }
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
