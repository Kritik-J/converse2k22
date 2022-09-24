import React from "react";
import styled from "styled-components/macro";
import ConverseLogo from "../../assets/Converse2k22.png";

const Sponsor = () => {
  return (
    <SponsorSection id="#events">
      <SponsorHeader>
        <h1 className="header__title">Our Sponsors</h1>
      </SponsorHeader>

      <SponsorContainer>
        <div className="sponsor">
          <img src={ConverseLogo} alt="" />
        </div>

        <div className="sponsor">
          <img src={ConverseLogo} alt="" />
        </div>

        <div className="sponsor">
          <img src={ConverseLogo} alt="" />
        </div>
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
    font-size: 4rem;
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

  .sponsor {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212121;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
`;

export default Sponsor;
