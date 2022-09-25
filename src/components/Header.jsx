import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import ConverseLogo from "../assets/Converse2k22.png";

const Header = () => {
  const { pathname } = useLocation();
  const history = useNavigate();

  const handleAboutClick = () => {
    if (pathname !== "/") {
      history("/");
      setTimeout(() => {
        const events = document.getElementById("#about");
        events.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const events = document.getElementById("#about");
      events.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEventsClick = () => {
    if (pathname !== "/") {
      history("/");
      setTimeout(() => {
        const events = document.getElementById("#events");
        events.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const events = document.getElementById("#events");
      events.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <Navbar>
        <Link to="/">
          <NavbarLogo src={ConverseLogo} alt="converse-logo" />
        </Link>

        <NavbarLinks>
          <NavLink onClick={handleEventsClick}>Events</NavLink>
          <NavLink onClick={handleAboutClick}>About</NavLink>
        </NavbarLinks>
      </Navbar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  height: 7.2rem;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 100%;

  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const NavbarLogo = styled.img`
  width: 12rem;
  display: block;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.div`
  margin-left: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  border: 2px solid var(--tertiary);
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.4rem 1.2rem;
  }

  &:hover {
    scale: 1.14;
  }
`;

export default Header;
