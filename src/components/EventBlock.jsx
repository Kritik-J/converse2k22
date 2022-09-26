import React from "react";
// import { Link } from "react-router-dom";s
import styled from "styled-components/macro";
import Bg from "../assets/bg.png";

const EventBlock = ({ event }) => {
  return (
    <EventBlockWrapper>
      <EventPoster
        className="event-poster"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <img src={event.poster} alt="poster" />
      </EventPoster>

      <EventInfo>
        <h1 className="event-title">{event.name}</h1>
        <p className="event-description">{event.description}</p>

        <div className="event-cta">
          <a href={event.link} className="view-event">
            View More
          </a>
        </div>
      </EventInfo>
    </EventBlockWrapper>
  );
};

const EventBlockWrapper = styled.div`
  background: #212121;
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);

  .event-poster {
    border-radius: 0.5rem 0 0 0.5rem;

    img {
      &:hover {
        transform: scale(1.05);
        transition: all 0.25s;
      }
    }
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    .event-poster {
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .event-poster {
      border-radius: 1rem 1rem 0 0;
    }

    &:nth-child(odd) {
      flex-direction: column;

      .event-poster {
        border-radius: 1rem 1rem 0 0;
      }
    }
  }
`;

const EventPoster = styled.div`
  width: 50%;
  height: 36rem;
  padding: 2rem;
  position: relative;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    display: block;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EventInfo = styled.div`
  width: 50%;
  color: #fff;
  padding: 2rem;

  .event-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .event-description {
    font-size: 1.6rem;
    margin-bottom: 2.5rem;
  }

  .event-cta {
    display: flex;
    align-items: center;

    .view-event,
    .participate-event {
      background: var(--tertiary);
      color: #fff;
      padding: 1rem 1.8rem;
      border-radius: 0.5rem;
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: 1.5rem;
      text-decoration: none;

      transition: all 0.25s ease-in-out;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        background: #212121;
        color: #e135a8;
        border: 0.2rem solid #e135a8;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .event-title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .event-description {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    .event-cta {
      .view-event,
      .participate-event {
        padding: 0.8rem 1.5rem;
        font-size: 1.25rem;
      }
    }
  }
`;

export default EventBlock;
