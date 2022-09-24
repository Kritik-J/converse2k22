import React from "react";
import styled from "styled-components/macro";
import BackAnimation from "../../components/BackAnimation";
import ConverseText from "../../components/ConverseText";

const Home = () => {
  return (
    <HomeSection id="home">
      <BackAnimation />

      <HomeContent>
        <ConverseText />
      </HomeContent>
    </HomeSection>
  );
};

const HomeSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (min-width: 1540px) {
    height: 768px;
  }
`;

const HomeContent = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
