import styled from "styled-components";
import { Cards } from "./Cards";

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
          <img src="/logo/logo-dell.svg" />
          <img src="/logo/logo-zendesk.svg" alt="Logo" />
          <img src="/logo-rakuten.svg" alt="Logo" />
          <img src="/logo-pacific-funds.svg" alt="Logo" />
          <img src="/logo/logo-ncr.svg" alt="Logo" />
          <img src="/logo/logo-lattice.svg" alt="Logo" />
          <img src="/logo/logo-ted.svg" alt="Logo" />
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
        <Cards />
      </StyledSection>
    </>
  );
};
