import React from "react";
import styled from "styled-components/macro";
import EventBlock from "./EventBlock";

const Event = () => {
  return (
    <EventContainer>
      <EventHeader>
        <h1>Technical Events</h1>
      </EventHeader>

      <EventBlock />
      <EventBlock />
      <EventBlock />
      <EventBlock />
      <EventBlock />
    </EventContainer>
  );
};

const EventContainer = styled.div`
  padding: 4rem;
  min-height: 100vh;
  background: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const EventHeader = styled.div`
  margin-bottom: 4rem;
  color: #fff;

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.4rem;
    }
  }
`;

export default Event;
