import React from "react";
import styled from "styled-components/macro";
import ConverseLogo from "../../assets/Converse2k22.png";

const About = () => {
  return (
    <AboutSection id="#about">
      <img src={ConverseLogo} alt="converse-logo" className="converse__logo" />

      <AboutText>
        <h1 className="about__title">About</h1>

        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptatum quos quas. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptatum quos quas. Quisquam, quae.
        </p>

        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptatum quos quas. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptatum quos quas. Quisquam, quae.
        </p>

        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptatum quos quas. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptatum quos quas. Quisquam, quae.
        </p>
      </AboutText>
    </AboutSection>
  );
};

const AboutSection = styled.div`
  min-height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .converse__logo {
    width: 50%;
    display: block;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
    justify-content: center;

    .converse__logo {
      width: calc(100% - 4rem);
      margin-bottom: 4rem;
    }
  }

  @media (min-width: 1440px) {
    min-height: 768px;
  }
`;

const AboutText = styled.div`
  color: #fff;
  margin-left: 4rem;
  width: 50%;

  .about__title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .about__text {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;

    .about__title {
      font-size: 2.4rem;
    }

    .about__text {
      font-size: 1.4rem;
    }
  }
`;

export default About;
