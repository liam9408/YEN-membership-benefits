import React, { useEffect, useState } from "react";
import Card from "../../components/Molecules/Card";
import Benefits from "../../components/Organisms/Benefits";
import styled from "styled-components";
import axios from "axios";

const HomeBody = styled.div``;

const Home = ({ ...props }) => {
  const fName = localStorage.getItem("fName");
  const lName = localStorage.getItem("lName");
  const token = localStorage.getItem("token");

  const [benefits, setBenefits] = useState([]);

  const loadBenefits = (token) => {
    return axios(`${process.env.REACT_APP_API_SERVER}/benefits/list/all/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res);
        setBenefits(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    loadBenefits(token);
  }, []);

  return (
    <>
      <HomeBody>
        <Card fName={fName} lName={lName} />
        <Benefits benefits={benefits} />
      </HomeBody>
    </>
  );
};

export default Home;
