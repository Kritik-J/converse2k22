import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const EventBlock = () => {
  return (
    <EventBlockWrapper>
      <EventPoster
        src="https://images.unsplash.com/photo-1542423348-821c6bb30fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="event poster"
      />

      <EventInfo>
        <h1 className="event-title">Event Name</h1>
        <p className="event-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptas quos quas. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptas quos quas. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
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
  max-width: 110rem;
  background: #212121;
  border-radius: 1rem;
  display: flex;
  margin-bottom: 2.4rem;
  padding: 1.5rem;

  img {
    margin-right: 2.4rem;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    img {
      margin-left: 2.4rem;
      margin-right: 0;
    }
  }
`;

const EventPoster = styled.img`
  min-width: 28rem;
  max-height: 32rem;
  border-radius: 0.5rem;
  display: block;
`;

const EventInfo = styled.div`
  color: #fff;

  .event-title {
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .event-description {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 3.2rem;
  }

  .event-cta {
    display: flex;
    align-items: center;

    .view-event,
    .participate-event {
      background: #f2385a;
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
`;

export default EventBlock;
