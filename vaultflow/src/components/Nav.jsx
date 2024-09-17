import styled from "styled-components";
import logo from "../assets/logo.svg";

export const Nav = () => {
  const Navbar = styled.nav`
    background-color: black;
    opacity: 50%;
    height: 72px;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 95%;
  `;
  return (
    <div style={{ alignItems: "center" }}>
      <Navbar>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src={logo} style={{ height: "2em" }} alt="Logo"></img>
          <p style={{ color: "white" }}>Vault Flow</p>
        </div>
        <p style={{ color: "white" }}>Hello</p>
      </Navbar>
    </div>
  );
};
