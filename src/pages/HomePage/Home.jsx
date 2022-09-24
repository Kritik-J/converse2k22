import React from "react";
import styled from "styled-components/macro";
import BackAnimation from "../../components/BackAnimation";
import ConverseText from "../../components/ConverseText";

const Home = () => {
  return (
    <HomeSection id="home">
      <BackAnimation />

      <ConverseText />
    </HomeSection>
  );
};

const HomeSection = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  @media (min-width: 154rem) {
    min-height: 768px;
  }
`;

export default Home;
