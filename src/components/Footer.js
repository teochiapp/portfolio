import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp, // 👈 agregado
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <Left>
          <Label>SAY HELLO!</Label>
          <a href="mailto:teochiapps@gmail.com">teochiapps@gmail.com</a>
          <a
            href="https://wa.link/zlvq8x"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send WhatsApp message{" "}
            <WhatsAppIcon>
              <FontAwesomeIcon icon={faWhatsapp} />
            </WhatsAppIcon>
          </a>
        </Left>
        <Right>
          <a href="#work">My Works</a>
          <a href="#about">About Me</a>
          <a href="#resume">My Résumé</a>
        </Right>
      </TopSection>

      <Separator />

      <BottomSection>
        <Copy>
          © Teo Chiappero <span id="year">2025</span>
        </Copy>

        <SocialIcons>
          <a
            href="https://twitter.com/teochiappero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/teochiapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/teo-chiappero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://instagram.com/teochiappero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </SocialIcons>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 80px 120px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;

  a {
    display: flex !important;
    margin: 5px 0;
    color: var(--primary-color);
    text-decoration: none;
    font-size: 1.8rem;
        display: block;
    gap: 10px;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Label = styled.div`
  font-size: 1.9rem;
  color: white;
  margin-bottom: 10px;
  letter-spacing: 2px;
  font-family: var(--heading-font);

`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  a {
    font-weight: 500;
  }
`;

const Separator = styled.hr`
  border: 0;
  border-top: 1.5px solid var(--primary-color);
  margin: 40px 0 30px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Copy = styled.div`
  font-size: 1.3rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 1.9rem;
    color: var(--primary-color);

    &:hover {
      color: #fff;
    }
  }
`;

const WhatsAppIcon = styled.span`
  font-size: 2.4rem;
`;
