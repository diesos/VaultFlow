import styled from "styled-components";
import Logodell from "../assets/logo/logo-dell.svg";
import Logozendesk from "../assets/logo/logo-zendesk.svg";
import LogoRakuten from "../assets/logo/logo-rakuten.svg";
import LogoPacific from "../assets/logo/logo-pacific-funds.svg";
import LogoNcr from "../assets/logo/logo-ncr.svg";
import LogoLattice from "../assets/logo/logo-lattice.svg";
import LogoTED from "../assets/logo/logo-ted.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 60px 0px;
`;
const StyledParagraph = styled.p`
  font-size: 20px;
  text-align: center;
`;
const StyledFeature = styled.h1`
  color: #ececec;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.32px;
  flex: 1 0 0;
`;
export const Features = () => {
  return (
    <>
      <StyledSection>
        <StyledParagraph>
          Trusted by teams at over 1,000 of the world’s leading organizations
        </StyledParagraph>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            alignSelf: "stretch",
            width: "80%",
            margin: "auto",
            flexWrap: "wrap",
            marginBottom: "10px",
          }}
        >
          <img src={Logodell} />
          <img src={Logozendesk} alt="Logo" />
          <img src={LogoRakuten} alt="Logo" />
          <img src={LogoPacific} alt="Logo" />
          <img src={LogoNcr} alt="Logo" />
          <img src={LogoLattice} alt="Logo" />
          <img src={LogoTED} alt="Logo" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "10px",
          }}
        >
          <StyledFeature>
            <p>
              <span>Features that</span>
              <span>work for your </span>
              <span>future.</span>
            </p>
          </StyledFeature>
          <p style={{ textAlign: "center" }}>
            Check out our amazing features and experience the
            <span> power of Vaultflow for yourself.</span>
          </p>
        </div>
      </StyledSection>
    </>
  );
};
