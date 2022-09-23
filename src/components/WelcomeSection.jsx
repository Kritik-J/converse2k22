import React from "react";
import styled from "styled-components/macro";
import BackAnimation from "./BackAnimation";
import "../UI/homepage.css";

const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <BackAnimation />

      <div className="homepage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="con_ani"
        >
          {/* Symbol */}
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              Converse
            </text>
          </symbol>
          {/* Duplicate symbols */}
          <use xlinkHref="#s-text" className="text" />
          <use xlinkHref="#s-text" className="text" />
          <use xlinkHref="#s-text" className="text" />
          <use xlinkHref="#s-text" className="text" />
          <use xlinkHref="#s-text" className="text" />
        </svg>
      </div>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (min-width: 1540px) {
    height: 768px;
  }
`;

export default WelcomeSection;
