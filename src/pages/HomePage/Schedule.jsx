import React from "react";
import styled from "styled-components/macro";

const Schedule = () => {
  return (
    <ScheduleSection id="#schedule">
      <ScheduleHeader>
        <h1 className="header__title">Schedule</h1>
      </ScheduleHeader>

      <ScheduleTableContainer>
        <ScheduleTable>
          <thead>
            <tr className="table__header__row">
              <th className="table__heading">Day &#38; Date </th>

              <th className="table__heading">Time</th>

              <th className="table__heading">Event</th>

              <th className="table__heading">Venue</th>
            </tr>
          </thead>

          <tbody>
            <tr className="table__body__row">
              {/* Day 1 Start */}

              <td className="table__body__col" rowSpan="6">
                30<sup>th</sup> September 2022
              </td>

              <td className="table__body__col">09:15 AM - 10:15 AM</td>

              <td className="table__body__col">PY-IT &#40;round 1&#41;</td>

              <td className="table__body__col">IT Lab 1,2,3</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">10:30 AM - 11:30 AM</td>

              <td className="table__body__col">Logo Hunt</td>

              <td className="table__body__col">IT Lab 1,2,3</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">11:30 AM - 12:45 PM</td>

              <td className="table__body__col">
                Spotifiesta &#40;round 1&#41;
                <span className="non__tech-color"> &#40;Non-Tech&#41;</span>
              </td>

              <td className="table__body__col">IT Dept. 2nd Floor</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">12:30 PM - 01:30 PM</td>

              <td className="table__body__col">Codathon</td>

              <td className="table__body__col">IT Lab 1,2,3</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">01:30 PM - 02:30 PM</td>

              <td className="table__body__col">PY-IT &#40;round 2&#41;</td>

              <td className="table__body__col">IT Lab 1</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">02:30 PM onwards </td>

              <td className="table__body__col">
                Talaash
                <span className="non__tech-color"> &#40;Non-Tech&#41;</span>
              </td>

              <td className="table__body__col">IT Dept. 2nd Floor</td>
            </tr>

            {/* Day 1 End */}

            <tr className="table__body__row">
              <td className="table__body__col" colSpan="4">
                &nbsp;
              </td>
            </tr>

            {/* Day 2 Start */}

            <tr className="table__body__row">
              <td className="table__body__col" rowSpan="6">
                1<sup>st</sup> October 2022
              </td>

              <td className="table__body__col">09:15 AM - 10:15 AM</td>

              <td className="table__body__col">Bug Buzz</td>

              <td className="table__body__col">IT Lab 1,2,3</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">10:30 AM - 11:30 AM</td>

              <td className="table__body__col">IT Quiz</td>

              <td className="table__body__col">IT Lab 1,2,3</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">11:30 AM - 01:00 PM</td>

              <td className="table__body__col">
                Hey alexa
                <span className="non__tech-color"> &#40;Non-Tech&#41;</span>
              </td>

              <td className="table__body__col">IT Dept. 2nd Floor</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">12:30 PM - 01:30 PM</td>

              <td className="table__body__col">PY-IT &#40;round 3&#41;</td>

              <td className="table__body__col">IT Lab 1</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">01:00 PM - 02:00 PM</td>

              <td className="table__body__col">
                Spotifiesta &#40;round 2&#41;
                <span className="non__tech-color"> &#40;Non-Tech&#41;</span>
              </td>

              <td className="table__body__col">IT Dept. 2nd Floor</td>
            </tr>

            <tr className="table__body__row">
              <td className="table__body__col">03:00 PM onwards</td>

              <td className="table__body__col col__long__text">
                Valedictory, prize and certificate distribution &#40;Department
                level&#41;
              </td>

              <td className="table__body__col">NJ Seminar Hall</td>
            </tr>
          </tbody>

          {/* Day 2 End */}
        </ScheduleTable>
      </ScheduleTableContainer>
    </ScheduleSection>
  );
};

const ScheduleSection = styled.div`
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

const ScheduleHeader = styled.div`
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

const ScheduleTableContainer = styled.div`
  width: 100%;
  background-color: #212121;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScheduleTable = styled.table`
  width: 100%;
  border: 1px solid #3d3d3d;
  border-collapse: collapse;

  .non__tech-color {
    color: #f26ec6;
  }

  .table__header__row {
    .table__heading {
      border: 1px solid #3d3d3d;
      border-collapse: collapse;

      padding: 2rem 1rem;
      text-align: left;
      color: var(--tertiary);

      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.025em;
    }
  }

  .table__body__row {
    .table__body__col {
      border: 1px solid #3d3d3d;
      border-collapse: collapse;

      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
      white-space: nowrap;

      &:hover {
        background-color: #3d3d3d;
      }
    }

    .col__long__text {
      white-space: normal;
    }
  }

  @media (max-width: 768px) {
    .table__header__row {
      .table__heading {
        font-size: 1.4rem;
      }
    }

    .table__body__row {
      .table__body__col {
        font-size: 1.125rem;
      }
    }
  }
`;

export default Schedule;
