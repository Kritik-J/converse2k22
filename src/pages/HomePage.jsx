import styled from "styled-components/macro";
import WelcomeSection from "../components/WelcomeSection";
import Event from "../components/Event";

const HomePage = () => {
  return (
    <HomeScreen>
      <WelcomeSection />
      <Event />
    </HomeScreen>
  );
};

const HomeScreen = styled.div``;

export default HomePage;
