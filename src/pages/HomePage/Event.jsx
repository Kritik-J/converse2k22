import React from "react";
import styled from "styled-components/macro";
import LoadEventBlock from "../../components/LoadEventBlock";
import techEvents from "../../tech-events.json";
import nonTechEvents from "../../nontech-events.json";

const EventBlock = React.lazy(() => import("../../components/EventBlock"));

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
            {techEvents.map((event) => (
              <React.Suspense fallback={<LoadEventBlock />} key={event.id}>
                <EventBlock event={event} nonTeach={false} />
              </React.Suspense>
            ))}
          </>
        ) : (
          <>
            <h2 className="notech__note">
              <span>Note - </span>
              Registration for non technical events will be done from IT
              registration desk near mechanical workshop.
            </h2>

            {nonTechEvents.map((event) => (
              <React.Suspense fallback={<LoadEventBlock />} key={event.id}>
                <EventBlock event={event} nonTeach={true} />
              </React.Suspense>
            ))}
          </>
        )}
      </EventContainer>
    </EventSection>
  );
};

const EventSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.6rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
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
  display: flex;
  align-items: center;
  display: -webkit-flex;

  .toggle-btn {
    padding: 0.6rem 4rem;
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
    background: var(--tertiary);
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

  .notech__note {
    font-size: 1.8rem;
    font-style: italic;
    margin-bottom: 3rem;

    span {
      color: var(--tertiary);
    }
  }
`;

export default Event;
