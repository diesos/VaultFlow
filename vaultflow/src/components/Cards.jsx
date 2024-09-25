import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/icon1.png";
import Logo2 from "../assets/icon2.png";
import Logo3 from "../assets/icon3.png";
import Image from "../assets/image.png";

const Card = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  padding: 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0px -2px 10px 0px rgba(233, 223, 255, 0.3),
    0px -2px 40px 0px rgba(187, 155, 255, 0.15),
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset;
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
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
  margin-top: 16px;
`;

export const Cards = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    console.log(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          width: "90%",
          flexWrap: isSmallScreen ? "wrap" : "nowrap",
        }}
      >
        <Card>
          <img src={Logo}></img>
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
          <img src={Logo2}></img>
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
      </div>
      <Card>
        <img style={{background:}} src={Logo3}></img>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3>Code collaboration</h3>
            <StyledParagraph>
              Our advanced code synchronization technology ensures that your
              data is always up-to-date and accurate, no matter where it's
              coming from. Whether you're integrating data from multiple sources
              or working with a team of developers, our synchronization
              technology makes it easy to collaborate and ensure that your data
              is consistent and reliable.
              <StyledLink>View code collaboration</StyledLink>
            </StyledParagraph>
          </div>
          <img
            style={{ objectFit: "contain", width: "auto", scale: "1" }}
            src={Image}
          />
        </div>
      </Card>
    </>
  );
};
