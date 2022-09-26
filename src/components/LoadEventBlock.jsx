import React from "react";
import styled from "styled-components/macro";

const LoadEventBlock = () => {
  return (
    <EventBlockWrapper>
      <EventPoster className="event-poster">
        <div className="event-poster-image" />
      </EventPoster>

      <EventInfo>
        <div className="event-title" />
        <div className="event-description">
          <div className="event-description-element" />
          <div className="event-description-element" />
          <div className="event-description-element" />
        </div>

        <div className="view-event" />
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

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .event-poster {
    border-radius: 0.5rem 0 0 0.5rem;
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
  background-color: #3d3d3d;

  display: flex;
  align-items: center;
  justify-content: center;

  .event-poster-image {
    height: 100%;
    display: block;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
    background-color: #313131;
    width: 24rem;
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
    height: 2.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
    width: 40%;
    background-color: #3d3d3d;
  }

  .event-description {
    .event-description-element {
      height: 1.8rem;
      margin-bottom: 1rem;
      background-color: #3d3d3d;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
        width: 80%;
      }
    }
    margin-bottom: 2.5rem;
  }

  .view-event {
    background: #3d3d3d;
    width: 12rem;
    height: 4.4rem;
    color: #fff;
    padding: 1rem 1.8rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    .event-title {
      height: 2rem;
      margin-bottom: 1rem;
    }

    .event-description {
      .event-description-element {
        height: 1.4rem;
      }
      margin-bottom: 2.5rem;
    }
  }
`;

export default LoadEventBlock;
