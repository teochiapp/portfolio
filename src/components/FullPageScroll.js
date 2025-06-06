import React, { useRef, useEffect, useState } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";
import HeroScreen from "./HeroScreen";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialIcons from "./SocialIcons";
import Menu from "./Menu";
import styled from "styled-components";
import Experience from "./Experience";
import { Fade } from "react-awesome-reveal";

function FullPageScroll() {
  const [logoText, setLogoText] = useState("Teo Chiappero");
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [currentSection, setCurrentSection] = useState("Home");
  const fullpageRef = useRef(null);

  useEffect(() => {
    const fpInstance = new fullpage(fullpageRef.current, {
      autoScrolling: true,
      navigation: true,
      scrollingSpeed: 700,
      anchors: ["Home", "About", "MyWorks", "Contact", "Footer"],
      navigationTooltips: ["Home", "About Me", "Works", "Contact", "Footer"],
      showActiveTooltip: true,

      onLeave: (origin, destination, direction) => {
        const anchor = destination.anchor;
        setCurrentSection(anchor);

        setLogoText("Teo Chiappero");
      },
    });

    return () => {
      fpInstance.destroy("all");
    };
  }, []);

  const isDarkSection = ["About", "Footer"].includes(currentSection);

  return (
    <>
      {showLogo && <LogoOverlay isDark={isDarkSection}>{logoText}</LogoOverlay>}

      <MenuToggle
        type="button"
        aria-label="Toggle contact menu"
        aria-controls="contact-menu"
        aria-expanded={isContactMenuOpen}
        onClick={() => setIsContactMenuOpen(!isContactMenuOpen)}
        isOpen={isContactMenuOpen}
        isDark={isDarkSection}
      >
        <span />
        <span />
      </MenuToggle>

      <ContactMenu id="contact-menu" isOpen={isContactMenuOpen}>
        <Menu />
        <SocialIcons />
      </ContactMenu>

      <FullPageContainer id="fullpage" ref={fullpageRef}>
        <div className="section" style={{ backgroundColor: "#FCFAF9" }}>
          <HeroScreen />
        </div>
        <div className="section" style={{ backgroundColor: "#FBFAF9" }}>
          <Fade duration={2000} triggerOnce>
            <Experience />
          </Fade>
        </div>
        <div className="section" style={{ backgroundColor: "#1C1C1C" }}>
          <Fade duration={2000} triggerOnce>
            <Portfolio />
          </Fade>
        </div>
        <div className="section" style={{ backgroundColor: "#FBFAF9" }}>
          <Fade duration={2000} triggerOnce>
            <Contact />
          </Fade>
        </div>
        <div className="section" style={{ backgroundColor: "#FF6F61" }}>
          <Footer />
        </div>
      </FullPageContainer>
    </>
  );
}

export default FullPageScroll;

const FullPageContainer = styled.div`
  color: white;
  font-family: Mulish;
`;

const LogoOverlay = styled.h2`
  position: fixed;
  top: 2rem;
  left: 7rem;
  z-index: 9999;
  font-family: "Megrim", system-ui;
  font-style: normal;
  font-size: 2.6rem;
  font-weight: bold;
  color: ${({ isDark }) => (isDark ? "#000" : "var(--secondary-color)")};
  transition: all 0.3s ease;
`;

const MenuToggle = styled.button`
  position: fixed;
  top: 2rem;
  right: 7rem;
  z-index: 9999;
  width: 2.4rem;
  height: 2.4rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  span {
    width: 100%;
    height: 3px;
    background-color: ${({ isDark }) =>
      isDark ? "#fff" : "var(--primary-color)"};
    border-radius: 2px;
    transition: transform 0.4s ease, opacity 0.3s ease, background-color 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }

    span:nth-child(2) {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  `}
`;

const ContactMenu = styled.nav`
  position: fixed;
  top: 8rem;
  right: 7rem;
  background: #ffffff;
  color: #000000;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 9998;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #000;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
