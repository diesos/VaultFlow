import { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleBurger = () => {
    setOpen((prev) => !prev);
    console.log(isOpen);
  };

  const Navbar = styled.nav`
    background-color: rgba(0, 0, 0, 0.5);
    height: 72px;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 95%;
    margin-top: 30px;
  `;

  const Paragraph = styled.p`
    color: white;
  `;

  const BoldParagraph = styled(Paragraph)`
    font-weight: 700;
    font-size: 22px;
  `;

  const DivLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const DivMid = styled.ul`
    display: flex;
    justify-content: center;
    gap: 32px;
    list-style: none;
    font-weight: 400;
    color: white;
    align-items: center;
    font-size: 16px;
    @media only screen and (max-width: 750px) {
      display: none;
    }
  `;

  const DivRight = styled.button`
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    align-self: center;
    background-color: #ececec;
    color: black;
    transition: background-color 0.6s ease-out, border-radius 0.3s ease;
    &:hover {
      background-color: #ececec;
      border-radius: 10px;
      color: black;
    }
    @media only screen and (max-width: 750px) {
      display: none;
    }
  `;

  const MobileHeaderWrapper = styled.div`
    @media only screen and (min-width: 650px) {
      display: none;
    }

    @media only screen and (max-width: 750px) {
      display: flex;
      height: 4em;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-self: center;
    }
  `;

  const MobileMenu = styled.div`
    height: 100vh;
    width: 100%;
    background-color: black;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  `;

  const MobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5em;
    font-size: 2.5em;
    text-align: left;
    margin-left: 1em;
  `;

  const StyledLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: #535bf2;
    }
    @media only screen and (max-width: 650px) {
      color: white;
    }
  `;

  return (
    <>
      {isOpen && (
        <MobileMenu>
          <MobileLinks>
            <StyledLink data-scroll href="#" onClick={toggleBurger}>
              Features
            </StyledLink>
            <StyledLink data-scroll href="#" onClick={toggleBurger}>
              Pricing
            </StyledLink>
            <StyledLink onClick={toggleBurger}>About us</StyledLink>
            <StyledLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleBurger}
            >
              Download the app
            </StyledLink>
          </MobileLinks>
        </MobileMenu>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Navbar>
          <DivLeft>
            <img src={logo} alt="Logo" />
            <BoldParagraph>Vaultflow</BoldParagraph>
          </DivLeft>
          <DivMid>
            <li>Features</li>
            <li>Pricing</li>
            <li>About us</li>
          </DivMid>
          <DivRight>Download the app</DivRight>
          <>
            <MobileHeaderWrapper>
              <div style={{ zIndex: "12", left: "0px" }}>
                <Hamburger
                  direction="right"
                  label="Show menu"
                  rounded
                  distance="sm"
                  easing="ease-in"
                  color="white"
                  size={40}
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </div>
            </MobileHeaderWrapper>
          </>
        </Navbar>
      </div>
    </>
  );
};
