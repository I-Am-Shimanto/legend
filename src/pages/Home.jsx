import React from "react";
import Banner from "../components/Banner";
import Company from "../components/Company";
import Workflow from "../components/Workflow";
import Solution from "../components/Solution";
import Plan from "../components/Plan";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <Banner />
      <Company />
      <Workflow />
      <Solution/>
      <Plan/>
      <Clients/>
    </>
  );
};

export default Home;
