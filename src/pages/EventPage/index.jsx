import React from "react";
import styled from "styled-components/macro";
import Poster from "../../assets/Codathon.svg";

const EventPage = () => {
  return (
    <EventScreen>
      <img src={Poster} alt="" />
    </EventScreen>
  );
};

const EventScreen = styled.div`
  min-height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem;
  padding-top: 11.2rem;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 9.2rem;
  }
`;

export default EventPage;
