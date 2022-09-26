import React from "react";
import styled from "styled-components/macro";
import Poster from "../../assets/posters/Codathon.png";

const EventPage = () => {
  return (
    <EventScreen>
      <EventPoster src={Poster} alt="" />

      <EventInfo>
        <h1 className="event-title">Codathon</h1>

        <p className="event-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          iure consequuntur doloribus nisi accusantium possimus ducimus dolorum
          aut, vel vitae labore mollitia a enim maxime animi impedit, maiores,
          dolorem cum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates iure consequuntur doloribus nisi accusantium possimus
          ducimus dolorum aut, vel vitae labore mollitia a enim maxime animi
          impedit, maiores, dolorem cum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates iure consequuntur doloribus nisi
          accusantium possimus ducimus dolorum aut, vel vitae labore mollitia a
          enim maxime animi impedit, maiores, dolorem cum?
        </p>
      </EventInfo>
    </EventScreen>
  );
};

const EventScreen = styled.div`
  min-height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem;
  padding-top: 11.2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 9.2rem;
    grid-template-columns: 1fr;
  }
`;

const EventPoster = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

const EventInfo = styled.div`
  .event-title {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .event-description {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    .event-title {
      font-size: 2.4rem;
    }

    .event-description {
      font-size: 1.4rem;
    }
  }
`;

export default EventPage;
