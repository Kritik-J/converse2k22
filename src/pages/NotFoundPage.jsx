import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <NotFoundScreen>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/">Go to home page</Link>
    </NotFoundScreen>
  );
};

const NotFoundScreen = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 10rem;
    font-weight: 700;
    color: var(--tertiary);
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--secondary);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  a {
    font-size: 1.4rem;
    font-weight: 400;
    text-decoration: underline;
    color: var(--tertiary);
  }

  @media (min-width: 154rem) {
    min-height: 768px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 8rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }

    a {
      font-size: 1.25rem;
    }
  }
`;

export default NotFoundPage;
