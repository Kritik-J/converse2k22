import React from "react";
import styled from "styled-components/macro";
import EventBlock from "../../components/EventBlock";

const Event = () => {
  const [eventToogle, setEventToogle] = React.useState(0);

  const handleEventToogle = (index) => {
    setEventToogle(index);
  };

  return (
    <EventSection id="#events">
      <EventHeader>
        <EventToogle eventToogle={eventToogle}>
          <div id="btn" />

          <button
            type="button"
            className="toggle-btn"
            onClick={() => handleEventToogle(0)}
          >
            Tech
          </button>

          <button
            type="button"
            className="toggle-btn"
            onClick={() => handleEventToogle(1)}
          >
            Non-Tech
          </button>
        </EventToogle>
      </EventHeader>

      <EventContainer>
        {eventToogle === 0 ? (
          <>
            <EventBlock />
            <EventBlock />
            <EventBlock />
            <EventBlock />
          </>
        ) : (
          <div></div>
        )}
      </EventContainer>
    </EventSection>
  );
};

const EventSection = styled.div`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.6rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1540px) {
    min-height: 768px;
  }
`;

const EventHeader = styled.div`
  margin-bottom: 4rem;
`;

const EventToogle = styled.div`
  width: 37.4rem;
  position: relative;
  border-radius: 4rem;
  background: #212121;

  .toggle-btn {
    padding: 1rem 4rem;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 700;
    color: #fff;
  }

  #btn {
    left: 0;
    top: 0;
    position: absolute;
    height: 100%;
    background: #e135a8;
    border-radius: 4rem;
    transition: 0.5s;

    width: ${(props) => (props.eventToogle === 0 ? "150px" : "224px")};

    left: ${(props) => (props.eventToogle === 0 ? " 0" : "150px")};
  }

  @media (max-width: 768px) {
    width: 32rem;
    .toggle-btn {
      font-size: 2.4rem;
    }

    #btn {
      width: ${(props) => (props.eventToogle === 0 ? "130px" : "190px")};

      left: ${(props) => (props.eventToogle === 0 ? " 0" : "130px")};
    }
  }
`;

const EventContainer = styled.div`
  width: 100%;
`;

export default Event;
