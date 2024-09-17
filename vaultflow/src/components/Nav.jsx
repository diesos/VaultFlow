import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Nav = () => {
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
  `;

  const DivRight = styled.button`
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    align-self: center;
    background-color: #ececec;
  `;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar>
        <DivLeft>
          <img src={logo} alt="Logo"></img>
          <BoldParagraph>Vaultflow</BoldParagraph>
        </DivLeft>
        <DivMid>
          <li>Features</li>
          <li>Pricing</li>
          <li>About us</li>
        </DivMid>
        <DivRight>Download the app</DivRight>
      </Navbar>
    </div>
  );
};
