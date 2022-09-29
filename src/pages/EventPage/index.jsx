import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import techEvents from "../../tech-events.json";

const EventPage = () => {
  const { id } = useParams();

  const event = techEvents.find((event) => event.slug === id);

  return (
    <EventScreen>
      <EventPoster>
        <img src={event.poster} alt="" />

        <Register>Register for {event.name}</Register>
      </EventPoster>

      <EventInfo>
        <h1 className="event-title">{event.name}</h1>

        <div className="event-description">
          <h2 className="event-description-title">Description</h2>
          {event.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              <p className="event-description-line">{line}</p>
            </React.Fragment>
          ))}
          <Break />
        </div>

        {event.rounds && (
          <EventRounds>
            <h2 className="event-rounds-title">Rounds</h2>
            {event.rounds.map((round) => (
              <div className="event-round" key={round.id}>
                <h3 className="event-round-title">
                  Round {round.id}
                  {round.name ? `) ${round.name}` : ""}
                </h3>
                <p className="event-round-description">{round.description}</p>
              </div>
            ))}
            <Break />
          </EventRounds>
        )}

        {event.rules && (
          <EventRules>
            <h2 className="event-rules-title">Rules</h2>

            {event.rules.map((rule, index) => (
              <p className="event-rule" key={index}>
                {rule.id} - {rule.rule}
              </p>
            ))}
            <Break />
          </EventRules>
        )}

        {event.facultyCoordinator && (
          <EventFacultyCoordinator>
            <h2 className="event-faculties-title">Faculty Coordinators</h2>
            {event.facultyCoordinator.map((faculty) => (
              <p className="event-faculty" key={faculty.id}>
                {faculty.name} {faculty.number ? ` - (${faculty.number})` : ""}
              </p>
            ))}
            <Break />
          </EventFacultyCoordinator>
        )}

        {event.eventHeads && (
          <EventHeads>
            <h2 className="event-heads-title">Event Heads</h2>
            {event.eventHeads.map((head) => (
              <p className="event-head" key={head.id}>
                {head.name} {head.number ? ` - (${head.number})` : ""}
              </p>
            ))}
            <Break />
          </EventHeads>
        )}

        {event.eventVolunteers && (
          <EventVolunteer>
            <h2 className="event-volunteers-title">Event Volunteer</h2>
            {event.eventVolunteers.map((volunteer) => (
              <p className="event-volunteer" key={volunteer.id}>
                {volunteer.name}{" "}
                {volunteer.number ? ` - (${volunteer.number})` : ""}
              </p>
            ))}
          </EventVolunteer>
        )}
      </EventInfo>
    </EventScreen>
  );
};

const Register = styled.button`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--tertiary);

  &:hover {
    cursor: pointer;
    background-color: #f26ec6;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Break = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #3d3d3d;
  margin: 2rem 0;
`;

const EventScreen = styled.div`
  min-height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem;
  padding-top: 11.2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 9.2rem;
    grid-template-columns: 1fr;
  }
`;

const EventPoster = styled.div`
  width: 100%;
  height: max-content;
  position: sticky;
  top: 2rem;
  left: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    position: static;
  }
`;

const EventInfo = styled.div`
  .event-title {
    font-size: 4.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--tertiary);
  }

  .event-description {
    .event-description-title {
      font-size: 2.4rem;
      font-weight: 600;
      margin: 2rem 0 1.5rem;
      text-decoration: underline;

      color: #f26ec6;
    }

    .event-description-line {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    .event-title {
      font-size: 3.2rem;
    }

    .event-description {
      .event-description-title {
        font-size: 1.8rem;
      }

      .event-description-line {
        font-size: 1.4rem;
      }
    }
  }
`;

const EventRounds = styled.div`
  .event-rounds-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 2rem 0 1.5rem;
    text-decoration: underline;
    color: #f26ec6;
  }

  .event-round {
    margin: 1rem 0;

    .event-round-title {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
      color: #ffb6e7;
    }

    .event-round-description {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    .event-rounds-title {
      font-size: 1.8rem;
    }

    .event-round {
      .event-round-title {
        font-size: 1.6rem;
      }

      .event-round-description {
        font-size: 1.4rem;
      }
    }
  }
`;

const EventRules = styled.div`
  margin: 1rem 0;

  .event-rules-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 2rem 0 1.5rem;
    text-decoration: underline;
    color: #f26ec6;
  }

  .event-rule {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    .event-rules-title {
      font-size: 1.8rem;
    }

    .event-rule {
      font-size: 1.4rem;
    }
  }
`;

const EventFacultyCoordinator = styled.div`
  margin: 1rem 0;

  .event-faculties-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 2rem 0 1.5rem;
    text-decoration: underline;
    color: #f26ec6;
  }

  .event-faculty {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    .event-faculties-title {
      font-size: 1.8rem;
    }

    .event-faculty {
      font-size: 1.4rem;
    }
  }
`;

const EventHeads = styled.div`
  margin: 1rem 0;

  .event-heads-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 2rem 0 1.5rem;
    text-decoration: underline;
    color: #f26ec6;
  }

  .event-head {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    .event-heads-title {
      font-size: 1.8rem;
    }

    .event-head {
      font-size: 1.4rem;
    }
  }
`;

const EventVolunteer = styled.div`
  margin: 1rem 0;

  .event-volunteers-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 2rem 0 1.5rem;
    text-decoration: underline;
    color: #f26ec6;
  }

  .event-volunteer {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    .event-volunteers-title {
      font-size: 1.8rem;
    }

    .event-volunteer {
      font-size: 1.4rem;
    }
  }
`;

export default EventPage;
