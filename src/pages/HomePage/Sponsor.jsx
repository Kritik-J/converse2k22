import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import ConverseLogo from "../../assets/Converse2k22.png";

const Sponsor = () => {
  return (
    <SponsorSection id="#events">
      <SponsorHeader>
        <h1 className="header__title">Our Sponsors</h1>
      </SponsorHeader>

      <SponsorContainer>
        <Link to="/" className="sponsor__link">
          <div className="sponsor">
            <img src={ConverseLogo} alt="" className="sponsor__logo" />

            <h3 className="sponsor__title">Converse 2k22</h3>
          </div>
        </Link>

        <Link to="/" className="sponsor__link">
          <div className="sponsor">
            <img src={ConverseLogo} alt="" className="sponsor__logo" />

            <h3 className="sponsor__title">Converse 2k22</h3>
          </div>
        </Link>

        <Link to="/" className="sponsor__link">
          <div className="sponsor">
            <img src={ConverseLogo} alt="" className="sponsor__logo" />

            <h3 className="sponsor__title">Converse 2k22</h3>
          </div>
        </Link>
      </SponsorContainer>
    </SponsorSection>
  );
};

const SponsorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SponsorHeader = styled.div`
  margin-bottom: 4rem;
  color: #fff;

  .header__title {
    font-size: 3.6rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    .header__title {
      font-size: 2.4rem;
    }
  }
`;

const SponsorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  width: 100%;

  .sponsor__link {
    text-decoration: none;
  }

  .sponsor {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #212121;
    padding: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
    width: 100%;

    .sponsor__logo {
      width: 100%;
      max-width: 16rem;
      height: 100%;
      display: block;
    }

    .sponsor__title {
      margin-top: 2rem;
      font-size: 1.6rem;
      color: #fff;
    }

    &:hover {
      scale: 1.05;
      transition: all 0.25s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;

    .sponsor {
      padding: 1.5rem;

      .sponsor__title {
        font-size: 1.4rem;
      }
    }
  }
`;

export default Sponsor;
