import styled from "styled-components";

const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 64px;
  padding: 24px;
  width: 90%;

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: center;
    padding: 24px;
    margin: auto;
  }
`;

const FooterTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 2;
  letter-spacing: -0.18px;
`;

export const Footer = () => {
  return (
    <>
      <FooterSection>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            <div>
              <FooterTitle>Contact</FooterTitle>
              <FooterText>Work inquires: work@vaultflow.com</FooterText>
              <FooterText>PR and speaking: press@vaultflow.com</FooterText>
              <FooterText>New business: newbusiness@vaultflow.com</FooterText>
            </div>
            <div>
              <FooterTitle>Careers</FooterTitle>
              <FooterText>Careers@vaultflow.com</FooterText>
            </div>
            <div>
              <p style={{ opacity: "50%", fontSize: "14px" }}>
                © 2023 Vaultflow. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        {/* **************************************************** SECOND ROW FOOTER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <div>
              <FooterTitle>Address</FooterTitle>
              <FooterText>398 11th Street, Floor 2</FooterText>
              <FooterText>San Francisco, CA 94103</FooterText>
            </div>
            <div>
              <FooterTitle>Social</FooterTitle>
              <FooterText>Twitter</FooterText>
              <FooterText>Linkedin</FooterText>
              <FooterText>Instagram</FooterText>
            </div>
          </div>
        </div>
        {/* **************************************************** SECOND ROW FOOTER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <div></div>
            <div></div>
            <div>
              <img src="/logo.svg" alt="Logo" />{" "}
              <span style={{ fontWeight: "700" }}>Vaultflow</span>
            </div>
          </div>
        </div>
      </FooterSection>
    </>
  );
};
