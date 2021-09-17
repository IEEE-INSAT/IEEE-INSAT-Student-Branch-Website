import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterText,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from "./FooterStyle";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Coming Soon</FooterLinkTitle>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Coming Soon</FooterLinkTitle>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Coming Soon</FooterLinkTitle>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
              <FooterText>Coming Soon</FooterText>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink>Instagram</FooterLink>
              <FooterLink>Facebook</FooterLink>
              <FooterLink>Youtube</FooterLink>
              <FooterLink>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="logo" width="120px" height="38px" />
            </SocialLogo>
            <WebsiteRights>
              INSAT IEEE Student Branch © {new Date().getFullYear()}.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/IeeeInsatStudentBranch"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/ieee.insat.sb"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/ieee-insat-student-branch"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/c/IEEEINSATSB"
                target="_blank"
                arial-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
