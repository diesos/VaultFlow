import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "/icon1.png";
import Logo2 from "/icon2.png";
import Logo3 from "/icon3.png";
import Image from "/image.png";
import HeroButton from "./Hero.jsx";

// Card styling
const Card = styled.div`
  flex-grow: 1;
  width: 30%;
  display: flex;
  padding: 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0px -2px 10px 0px rgba(233, 223, 255, 0.3),
    0px -2px 40px 0px rgba(187, 155, 255, 0.15),
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset;

  // Responsive behavior
  @media (max-width: 750px) {
    width: 100%;
  }
`;

// Flex container styling for cards
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 90%;
  flex-wrap: nowrap;

  // For mobile devices (max-width 780px), stack the cards vertically
  @media (max-width: 780px) {
    flex-wrap: wrap;
    flex-grow: 1;
  }
`;

const StyledParagraph = styled.p`
  color: #ececec;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const StyledLink = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
  margin-top: 16px;
`;

const Img = styled.img`
  /* objectFit: "contain",
  width: "100%",
  maxHeight: "500px",
  overflow: "hidden", */
  object-fit: contain;
  max-height: max-content;
  overflow: contain;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px -2px 10px 0px rgba(233, 223, 255, 0.3),
    0px -2px 40px 0px rgba(187, 155, 255, 0.15),
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset;
`;
export const Cards = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <CardsContainer>
        <Card style={{ alignItems: "center" }}>
          <img src={Logo} alt="Logo 1" />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3>Analytics Dashboard</h3>
            <StyledParagraph>
              Our Analytics Dashboard provides a clear and intuitive interface
              for you to easily analyze your data. From customizable graphs to
              real-time data updates, our dashboard offers everything you need
              to gain valuable insights.
              <StyledLink>View dashboard</StyledLink>
            </StyledParagraph>
          </div>
        </Card>
        <Card>
          <img src={Logo2} alt="Logo 2" />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3>Digital Credit Tokens</h3>
            <StyledParagraph>
              Reward your customers and incentivize engagement with our
              innovative digital credit tokens. Our tokens can be customized to
              match your branding, and are a flexible and scalable way to drive
              customer loyalty and encourage repeat business.
              <StyledLink>View tokens</StyledLink>
            </StyledParagraph>
          </div>
        </Card>
      </CardsContainer>
      <div style={{ width: "90%", display: "flex", flexGrow: "1" }}>
        <Card>
          <div
            style={
              isSmallScreen
                ? {
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    maxWidth: "100%",
                  }
                : {
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    maxWidth: "100%",
                  }
            }
          >
            <div style={{}}>
              <img src={Logo3} alt="Logo 3" />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  maxWidth: "100%",
                }}
              >
                <h3>Code collaboration</h3>
                <StyledParagraph>
                  Our advanced code synchronization technology ensures that your
                  data is always up-to-date and accurate, no matter where it's
                  coming from. Whether you're integrating data from multiple
                  sources or working with a team of developers, our
                  synchronization technology makes it easy to collaborate and
                  ensure that your data is consistent and reliable.
                  <StyledLink>View code collaboration</StyledLink>
                </StyledParagraph>
              </div>
            </div>
            <Img src={Image} alt="Collaboration" />
          </div>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "16px",
        }}
      >
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              alignItems: "center",
              textAlign: "center",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "120%",
              }}
            >
              {" "}
              Our powerful analytics provides invaluable insights.
            </p>
            <StyledParagraph>
              Unlock the power of data with our cutting-edge analytics product.
              Get instant insights with our user-friendly Analytics Dashboard,
              and take advantage of our innovative digital credit tokens to
              reward your customers and incentivize engagement.
            </StyledParagraph>
            <HeroButton>View analytics</HeroButton>
          </div>
        </Card>
      </div>
    </>
  );
};
