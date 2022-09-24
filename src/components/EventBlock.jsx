import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Poster from "../assets/Codathon.svg";
import Bg from "../assets/bg.svg";

const EventBlock = () => {
  return (
    <EventBlockWrapper>
      <EventPoster
        className="event-poster"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <img src={Poster} alt="poster" />
      </EventPoster>

      <EventInfo>
        <h1 className="event-title">Event Name</h1>
        <p className="event-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus quidem voluptas quos quas. Quisquam, quae. Quisquam
          necessitatibus quidem voluptas quos quas. Quisquam, quae. Quisquam
          necessitatibus quidem voluptas quos quas. Quisquam, quae. Quisquam
        </p>

        <div className="event-cta">
          <Link to="/event/1" className="view-event">
            View Event
          </Link>

          <Link to="/event/1" className="participate-event">
            Participate
          </Link>
        </div>
      </EventInfo>
    </EventBlockWrapper>
  );
};

const EventBlockWrapper = styled.div`
  background: #212121;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;

  .event-poster {
    border-radius: 1rem 0 0 1rem;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    .event-poster {
      border-radius: 0 1rem 1rem 0;
    }
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
    line-height: 2.4rem;
    margin-bottom: 2.5rem;
  }

  .event-cta {
    display: flex;
    align-items: center;

    .view-event,
    .participate-event {
      background: #e135a8;
      color: #fff;
      padding: 1rem 1.8rem;
      border-radius: 0.5rem;
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: 1.5rem;
      transition: all 0.2s ease-in-out;
      text-decoration: none;

      &:last-child {
        margin-right: 0;
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
