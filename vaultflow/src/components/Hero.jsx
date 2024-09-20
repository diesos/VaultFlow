import styled from "styled-components";
import dashboard from "../assets/dashboard.png";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: clamp(40px, 30px, 80px);
  gap: 24px;
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
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  align-self: center;
  background-color: #ececec;
  color: black;
`;

const HeroImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 24px;
`;
export const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroButton>We just raised $20M in Series B. Learn more</HeroButton>
        <HeroText>Modern analytics for the modern world</HeroText>
        <HeroSubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </HeroSubText>
        <div style={{ display: "flex", gap: "16px" }}>
          <StyledButton>Download the app</StyledButton>
          <HeroButton>Talk to an expert</HeroButton>
        </div>
        <HeroImg className="hero-img">
          <img src={dashboard} style=></img>
        </HeroImg>
      </HeroSection>
    </>
  );
};
