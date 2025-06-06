import React, { useState } from "react";
import styled from "styled-components";
import projects from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faImages } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/styles.css";

const defaultColors = ["#ED5565", "#FC6E51", "#FFCE54", "#2ECC71", "#5D9CEC"];

const PortfolioSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openGallery = (images) => {
    setSelectedImages(images);
    setLightboxOpen(true);
  };

  return (
    <PortfolioSection>
      <SectionTitle>MY PROJECTS</SectionTitle>

      <OptionsContainer>
        {projects.map((project, index) => (
          <Option
            key={project.id}
            background={project.previewImg}
            color={defaultColors[index % defaultColors.length]}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <LogoImage src={project.logo} alt={project.title} />
              </div>
              <div className="info">
                <div className="main">{project.title}</div>
                <Description>{project.description}</Description>
                <div className="sub">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Site"
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repo"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {project.images && project.images.length > 0 && (
                    <button
                      title="Open Gallery"
                      onClick={(e) => {
                        e.stopPropagation();
                        openGallery(project.images);
                      }}
                    >
                      <FontAwesomeIcon icon={faImages} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Option>
        ))}
      </OptionsContainer>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={selectedImages}
      />
    </PortfolioSection>
  );
};

export default PortfolioSlider;


// Styled Components
const PortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 2.1em;
  margin-bottom: 2rem;
  color: #ffffff;
  font-family: var(--heading-font);
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  width: 100%;
  max-width: 96vw;
  height: 28vw;
`;

const Option = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background: ${({ background }) =>
    `url(${background}) center / cover no-repeat`};
  background-color: ${({ color }) => color};
  cursor: pointer;
  border-radius: ${({ active }) => (active ? "40px" : "30px")};
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  flex-grow: ${({ active }) => (active ? 6 : 1)};
  max-width: ${({ active }) => (active ? "600px" : "unset")};

  margin: ${({ active }) => (active ? "0" : "10px")};

  .shadow {
    position: absolute;
    bottom: ${({ active }) => (active ? "0px" : "-40px")};
    left: 0;
    right: 0;
    height: 140px;
    box-shadow: ${({ active }) =>
      active
        ? "inset 0 -120px 120px -120px rgba(0, 0, 0, 0.7), inset 0 -120px 120px -100px rgba(0, 0, 0, 0.7)"
        : "inset 0 -120px 0px -120px rgba(0, 0, 0, 0.7), inset 0 -120px 0px -100px rgba(0, 0, 0, 0.7)"};
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  }

  .label {
    display: flex;
    position: absolute;
    right: 0;
    bottom: ${({ active }) => (active ? "20px" : "10px")};
    left: ${({ active }) => (active ? "20px" : "0px")};
    height: 60px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
    align-items: center;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 60px;
      max-width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: white;
      color: ${({ color }) => color};
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      color: white;

      .main {
        font-weight: bold;
        font-family: var(--heading-font);
        font-size: 1.2rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Mejora la legibilidad */
      }

      .sub {
        display: flex;
        gap: 10px;
        margin-top: 4px;
        a,
        button {
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0;

          &:hover {
            color: ${({ color }) => color};
          }
        }
      }
    }
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  &:hover {
    transform: scale(1.2); /* Aumenta un poco el logo al hacer hover */
    transition: 0.4s ease;
  }
`;

const Description = styled.span`
  font-size: 0.85rem;
  opacity: 0.9;
  font-family: var(--text-font);
  margin-top: 2px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8); /* mejora visibilidad */
`;
