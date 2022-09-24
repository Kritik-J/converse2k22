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
  display: grid;
`;

export default EventPage;
