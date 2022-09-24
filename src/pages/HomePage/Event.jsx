import React from "react";
import styled from "styled-components/macro";
import EventBlock from "../../components/EventBlock";

const Event = () => {
  return (
    <EventSection id="#events">
      <EventHeader>
        <h1 className="header__title">Technical Events</h1>
      </EventHeader>

      <EventBlock />
      <EventBlock />
      <EventBlock />
      <EventBlock />
    </EventSection>
  );
};

const EventSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1440px) {
    min-height: 768px;
  }
`;

const EventHeader = styled.div`
  margin-bottom: 4rem;
  color: #fff;

  .header__title {
    font-size: 4rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    .header__title {
      font-size: 2.4rem;
    }
  }
`;

export default Event;
