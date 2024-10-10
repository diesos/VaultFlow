import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: clamp(80%, 4em, 80%);
  margin: auto;
  margin-top: 25px;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;
  align-items: center;
`;
const HeroText = styled.h1`
  color: white;
  font-size: clamp(2em, 50px, 80px);
  text-align: center;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: -2.4px;
`;

const HeroSubText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  padding: 0px 100px;
`;

const HeroButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  font-weight: 400;
  line-height: 150%;
  flex-grow: 0;
  transition: background-color 0.6s ease-out;
  transition: border-radius 0.3s ease;
  &:hover {
    background-color: #ececec;
    border-radius: 10px;
    transition: border-radius 0.3s ease;
    color: black;
  }
`;

export default HeroButton;

const StyledButton = styled.button`
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  align-self: center;
  background-color: #ececec;
  color: black;
  transition: background-color 0.6s ease-in-out;
  &:hover {
    background-color: #edbd2b;
  }
`;

const HeroImg = styled.div`
  height: 472px;
  align-self: stretch;
  margin-bottom: -50px;
`;
export const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroButton>We just raised $20M in Series B. Learn more</HeroButton>
        <HeroText>Modern analytics for the modern world</HeroText>
        <HeroSubText>
          We help teams at over 1,000 of the world’s leading organizations
          unlock the power of their data
        </HeroSubText>
        <div style={{ display: "flex", gap: "16px" }}>
          <StyledButton>Download the app</StyledButton>
          <HeroButton>Talk to an expert</HeroButton>
        </div>
        <HeroImg className="hero-img"></HeroImg>
      </HeroSection>
    </>
  );
};
