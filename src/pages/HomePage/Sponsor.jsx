import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
// import ConverseLogo from "../../assets/Converse2k22.png";
import AdroitLogo from "../../assets/sponsors/Adroit.png";
import RejoicehubLogo from "../../assets/sponsors/Rejoicehub.png";
import DenpizzaLogo from "../../assets/sponsors/Denpizza.png";

const Sponsor = () => {
  return (
    <SponsorSection id="#events">
      <SponsorHeader>
        <h1 className="header__title">Our Sponsors</h1>
      </SponsorHeader>

      <SponsorContainer>
        <Link to="/" className="sponsor__link">
          <SponsorCard>
            <img src={AdroitLogo} alt="" className="sponsor__logo" />

            <div className="sponsor__info">
              <h3 className="sponsor__title">
                Adroit Immigration Services Private Limited
              </h3>

              <p className="sponsor__description">
                Adroit is the Gateway of Global Education & Career for those who
                want to to pursue their career in foreign countries. Adroit
                Immigration Services provides proper guidance regarding higher
                studies in various countries such as Canada, USA, Australia,
                U.K., New Zealand, Signapore, U.A.E.
              </p>

              <p className="sponsor__address">
                Address - Maheshwari Apartment, 1st Floor, Opp. Maakhan Bhog,
                nr. Kailash Sweets & Restaurant, Nanpura, Surat, Gujarat 395001
              </p>
            </div>
          </SponsorCard>
        </Link>

        <Link to="/" className="sponsor__link">
          <SponsorCard>
            <img src={RejoicehubLogo} alt="" className="sponsor__logo" />

            <div className="sponsor__info">
              <h3 className="sponsor__title">RejoiceHub Solutions</h3>

              <p className="sponsor__description">
                Rejoicehub Solutions is the best technology company in Surat,
                India. We worked with worldwide clients as a technology
                designing and development and technology-based service provider
                and met their expectations successfully to run their online
                business successfully. Web application design and development
                are some of the major areas of services.
              </p>

              <p className="sponsor__description">
                We create state-of-the-art applications, products, and services
                for startups and leading brands. We architect, design, and
                develop digital solutions for phones, tablets, AR, wearables,
                connected devices, connected vehicles, and IoT.
              </p>

              <p className="sponsor__description">
                We love executing innovative product ideas for unique companies
                and organizations. It makes us happy inside when we’re able to
                bring a vision to life. Whether we’re consulting for a client,
                building a product of our own, contributing to the open-source
                community, or giving back to the greater good, our goal is to
                build sustainable real-world businesses.
              </p>

              <p className="sponsor__address ">
                Address - A-301, Atlanta mall Sudama chowk, Mota Varachha,
                Surat, Gujarat 394101
              </p>
            </div>
          </SponsorCard>
        </Link>

        <Link to="/" className="sponsor__link">
          <SponsorCard>
            <img src={DenpizzaLogo} alt="" className="sponsor__logo" />

            <div className="sponsor__info">
              <h3 className="sponsor__title">Den’s pizza</h3>

              <p className="sponsor__description">
                Den’s Pizza is a well-known pizza outlet extended to a cafe plus
                a mocktail bar having its presence at VIP Road, Adajan & Surat
                Night Bazaar.
              </p>
              <p className="sponsor__description">
                Popularly known for freshly baked pizzas, a gamut of other
                scrumptious dishes like pasta, sizzler, garlic bread, soups,
                Chinese, drool-worthy mocktails, shakes, and smoothies are also
                available.
              </p>

              <p className="sponsor__description">
                We believe in serving our customers with delicacies having an
                unmatched taste, which lasts long amidst a serene & funky
                enthusiastic ambience for endless memories & conversations.
              </p>

              <div className="sponsor__address__list">
                <p className="sponsor__address">Address -</p>
                <p className="sponsor__address">
                  A1, S.M.C. Night Bazaar, B/H. Lakeview Garden, PIPLOD, Surat.
                </p>

                <p className="sponsor__address">
                  G22/23, High Field, Opp. Palm Avenue, VIP Road, VESU, Surat.
                </p>

                <p className="sponsor__address">
                  UG-5/6, First Floor, Valentina Buisness Hub. Near Shell Petrol
                  Pump, Behind Burger King, ADAJAN Surat.
                </p>
              </div>

              <div className="sponsor__coupon__description">
                <p className="sponsor__coupon">Coupon Information - </p>
                <p className="sponsor__coupon">
                  Buy any 11” pizza and get any one 8” pizza
                </p>
                <p className="sponsor__coupon">
                  Buy any 11” pizza and get any one 8” pizza free from value or
                  traditional range pizzas only
                </p>

                <p className="sponsor__coupon">
                  Valid in vesu & Adajan branch Validity till 15/10
                </p>
                <p className="sponsor__coupon">Coupon use only one time</p>
              </div>
            </div>
          </SponsorCard>
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
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  width: 100%;

  .sponsor__link {
    text-decoration: none;
  }
`;

const SponsorCard = styled.div`
  display: flex;
  align-items: center;
  background: #212121;
  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
  width: 100%;

  .sponsor__logo {
    width: 100%;
    max-width: 24rem;
    height: 100%;
    display: block;
    min-height: 5rem;
    margin-right: 4rem;
  }

  .sponsor__info {
    .sponsor__title {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
      color: var(--tertiary);
    }

    .sponsor__description,
    .sponsor__address {
      font-size: 1.6rem;
      color: #fff;
      margin-top: 1.5rem;
      line-height: 1.8;
      margin-bottom: 0;

      text-align: justify;
      text-justify: inter-word;
    }
    .sponsor__address {
      color: #ffb6e7;
    }

    .sponsor__address__list {
      .sponsor__address {
        &:first-child {
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }

        margin-top: 0.5rem;
      }
    }

    .sponsor__coupon__description {
      .sponsor__coupon {
        font-size: 1.6rem;
        color: #fff;
        line-height: 1.8;
        margin-top: 1.5rem;
        margin-bottom: 0;

        text-align: justify;
        text-justify: inter-word;

        &:first-child {
          margin-bottom: 1rem;
        }

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(5) {
          margin-top: 0.5rem;
        }

        &:nth-child(4) {
          margin-top: 0.8rem;
        }

        &:nth-child(4),
        &:nth-child(5) {
          color: #f26ec6;
          font-weight: 600;
          font-style: italic;
        }
      }
    }
  }

  &:hover {
    scale: 1.05;
    transition: all 0.25s ease-in-out;
  }

  @media (max-width: 768px) {
    .sponsor__logo {
      margin-right: 0;
    }

    padding: 1.5rem;
    flex-direction: column;

    .sponsor__info {
      .sponsor__title {
        font-size: 1.8rem;
        margin: 4rem 0 1.5rem;
      }

      .sponsor__description,
      .sponsor__address {
        font-size: 1.4rem;
        margin-top: 1rem;
        line-height: 1.5;
      }

      .sponsor__coupon__description {
        .sponsor__coupon {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default Sponsor;
