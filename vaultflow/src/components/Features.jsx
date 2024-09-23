import styled from "styled-components";
import Logodell from "../assets/logo/logo-dell.svg";
import Logozendesk from "../assets/logo/logo-zendesk.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const StyledParagraph = styled.p`
  font-size: 20px;
`;
export const Features = () => {
  return (
    <>
      <StyledSection>
        <StyledParagraph>
          Trusted by teams at over 1,000 of the world’s leading organizations
        </StyledParagraph>
        <div style={{ display: "flex", justifyContent: "center", gap: "48px" }}>
          <img src={Logodell} />
          <img src={Logozendesk} alt="Zendesk Logo" />
        </div>
      </StyledSection>
    </>
  );
};
