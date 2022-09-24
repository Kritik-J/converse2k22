// import "../UI/footer.css";
import styled from "styled-components/macro";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLinksHeader>Head Of Department</FooterLinksHeader>

          <FooterLink>Mita Parekh</FooterLink>
        </FooterLinks>

        <FooterLinks>
          <FooterLinksHeader>Faculty Coordinators</FooterLinksHeader>

          <FooterLink>Apurva Mandalaywala</FooterLink>
          <FooterLink>Ashish Kharwar</FooterLink>
        </FooterLinks>

        <FooterLinks>
          <FooterLinksHeader>Student Coordinators</FooterLinksHeader>

          <FooterLink>Aayush Vataliya</FooterLink>
          <FooterLink>Divya Mashruwala</FooterLink>
          <FooterLink>Kirtan Battiwala</FooterLink>
          <FooterLink>Meet Vaghasiya</FooterLink>
        </FooterLinks>

        <FooterLinks>
          <FooterLinksHeader>Web Developer</FooterLinksHeader>

          <FooterLink>Alpesh Nikumbh</FooterLink>
          <FooterLink>Kritik Jiyaviya</FooterLink>
          <FooterLink>Shubham Jariwala</FooterLink>
        </FooterLinks>

        <FooterLinks>
          <FooterLinksHeader>Poster Designer</FooterLinksHeader>

          <FooterLink>Bhagya Patel</FooterLink>
          <FooterLink>Krishna Kalani</FooterLink>
          <FooterLink>Kritik Jiyaviya</FooterLink>
        </FooterLinks>
      </FooterWrapper>

      <FooterText>© Converse 2022 - All Rights Reserved</FooterText>
    </FooterContainer>
  );
};

const FooterText = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #fff;
  margin-top: 2.5rem;
`;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1a1a1a;
  border-top: 0.2rem solid #3d3d3d;
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
  color: #fff;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLinksHeader = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const FooterLink = styled.a`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default Footer;
