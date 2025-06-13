import React from "react";
import Banner from "../components/Banner";
import Company from "../components/Company";
import Workflow from "../components/Workflow";
import Solution from "../components/Solution";
import Plan from "../components/Plan";
import Clients from "../components/Clients";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <>
      <Banner />
      <Company />
      <Workflow />
      <Solution/>
      <Plan/>
      <Clients />
      <Questions/>
    </>
  );
};

export default Home;
