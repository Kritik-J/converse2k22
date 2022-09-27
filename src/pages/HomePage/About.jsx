import React from "react";
import styled from "styled-components/macro";
import ConverseLogo from "../../assets/Converse2k22.png";

const About = () => {
  return (
    <AboutSection id="#about">
      <img src={ConverseLogo} alt="converse-logo" className="converse__logo" />

      <AboutText>
        <h1 className="about__title">About Us</h1>

        <p className="about__paragraph">
          Converse2k22 is a technical fest organised by the Department of
          Information Technology at Sarvajanik College of Engineering and
          Technology in Surat under the banner of Kshitij 2022.
        </p>

        <p className="about__paragraph">
          It will take place on September 30th and 1st October 2022, between 9
          AM and 4 PM. There are two faculty conveners, six student
          coordinators, and nine event faculty heads on the team.
        </p>

        <p className="about__paragraph">
          It includes five technical and three non-technical events. This event
          assists students in discovering their areas of interest and in
          developing their overall personality, management, and communication
          skills.
        </p>

        <h3 className="about__hod">
          <span className="about__hod-title">H.O.D </span>
          Dr. Mita Parekh
        </h3>
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
    justify-content: flex-start;
    min-height: 100%;

    .converse__logo {
      width: calc(100% - 8rem);
      /* width: calc(100% - 4rem); */
      height: auto;
      margin-bottom: 4rem;
    }
  }

  @media (min-width: 1540px) {
    min-height: 768px;
  }
`;

const AboutText = styled.div`
  color: #fff;
  margin-left: 4rem;
  width: 50%;

  .about__title {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .about__paragraph {
    font-size: 1.8rem;
    margin-top: 1.5rem;
    line-height: 1.8;
  }

  .about__hod {
    margin-top: 1.5rem;
    font-weight: 700;
    color: var(--tertiary);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;

    .about__title {
      font-size: 2.4rem;
    }

    .about__paragraph {
      font-size: 1.4rem;
      margin-top: 1rem;
      line-height: 1.6;
    }
  }
`;

export default About;
