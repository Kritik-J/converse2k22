// import "../UI/footer.css";
import styled from "styled-components/macro";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinks>
            <FooterLinksHeader>Head Of Department</FooterLinksHeader>

            <FooterLink>Dr. Mita Parekh</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <FooterLinksHeader>Faculty Coordinators</FooterLinksHeader>

            <FooterLink>Prof. Ashish Kharwar</FooterLink>
            <FooterLink>Prof. Apurva Mandalaywala</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <FooterLinksHeader>Student Coordinators</FooterLinksHeader>

            <FooterLink>Aayush Vataliya</FooterLink>
            <FooterLink>Divya Mashruwala</FooterLink>
            <FooterLink>Kirtan Battiwala</FooterLink>
            <FooterLink>Meet Vaghasiya</FooterLink>
            <FooterLink> Honey Bhanushali</FooterLink>
            <FooterLink>Khushi Jariwala</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <FooterLinksHeader>Web Developer</FooterLinksHeader>

            <FooterLink>Shubham Jariwala</FooterLink>
            <FooterLink>Kritik Jiyaviya</FooterLink>
            <FooterLink>Alpesh Nikumbh</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <FooterLinksHeader>Poster Designer</FooterLinksHeader>

            <FooterLink>Bhagya Patel</FooterLink>
            <FooterLink>Krishna Kalani</FooterLink>
            <FooterLink>Kritik Jiyaviya</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <FooterLinksHeader>Decoration Team</FooterLinksHeader>

            <FooterLink>Prof. Mittal Patel</FooterLink>
            <FooterLink>Siya Anghan</FooterLink>
          </FooterLinks>
        </FooterLinksContainer>

        <FooterText>© Converse 2022 - All Rights Reserved</FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterText = styled.p`
  font-size: 1.25rem;
  color: #fff;
  margin-top: 2.5rem;
  text-align: center;
`;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1a1a1a;
  border-top: 0.2rem solid #3d3d3d;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FooterLinksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  color: #fff;

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
  font-weight: 600;
  color: var(--tertiary);

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
