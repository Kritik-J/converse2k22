import Home from "./Home";
import Event from "./Event";
import About from "./About";
import styled from "styled-components/macro";
import Sponsor from "./Sponsor";

const HomePage = () => {
  return (
    <HomeScreen>
      <Home />
      <Border />
      <Event />
      <Border />
      <Sponsor />
      <Border />
      <About />
    </HomeScreen>
  );
};

const HomeScreen = styled.div``;

const Border = styled.div`
  width: 100%;
  height: 0.2rem;
  background: #3d3d3d;
`;

export default HomePage;
