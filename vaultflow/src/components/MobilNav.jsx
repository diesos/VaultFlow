import styled from "styled-components"

export const MobilNav = () => {

	return(
		<>
		{isOpen && (
          <MobileMenu>
            <>
              <MobileLinks>
                <Link to={`/`}>
                  <StyledLink onClick={() => toggleBurger()}>Home</StyledLink>
                </Link>
                <StyledLink
                  data-scroll
                  href="/#about"
                  onClick={() => toggleBurger()}
                >
                  About
                </StyledLink>
                <StyledLink
                  data-scroll
                  href="/#work"
                  onClick={() => toggleBurger()}
                >
                  Work
                </StyledLink>
                <StyledLink
                  href="https://drive.google.com/file/d/1bMIVxkW2wB5MWJzNRA3BthnBl2NNTK-K/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => toggleBurger()}
                >
                  Resume
                </StyledLink>
                <StyledLink
                  href="https://linkedin.com/in/ozturk-omer"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => toggleBurger()}
                >
                  Linkedin
                </StyledLink>
                <StyledLink
                  href="https://github.com/diesos"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => toggleBurger()}
                >
                  Github
                </StyledLink>
                <StyledLink
                  href="mailto:ozturk@live.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => toggleBurger()}
                >
                  Contact
                </StyledLink>

                <MobileSocialWrapper>
                  <StyledLink href="mailto:ozturk@live.fr">
                    <MdOutlineMail size={"1.45em"} />
                  </StyledLink>
                  <StyledLink href="https://www.linkedin.com/in/ozturk-omer/">
                    <BsLinkedin />
                  </StyledLink>
                  <StyledLink href="https://github.com/diesos">
                    <FaGithubSquare size={"1.2em"} />
                  </StyledLink>
                </MobileSocialWrapper>
              </MobileLinks>
            </>
          </MobileMenu>
	)
}
