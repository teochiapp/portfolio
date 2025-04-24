import React, { useState } from "react";
import projects from "../data/projects";
import styled from "styled-components";
import { FaGlobe, FaGithub, FaImages } from "react-icons/fa";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeImages, setActiveImages] = useState([]);
  return (
    <PortfolioSection>
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectLogo>
              <img src={project.logo} alt={project.title} />
            </ProjectLogo>
            <ProjectInfo>
              {project.showTitle && (
                <ProjectTitle>{project.title}</ProjectTitle>
              )}
              <ProjectLinks>
                {project.url && (
                  <IconLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe />
                  </IconLink>
                )}
                {/* {project.github && (
                  <IconLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </IconLink>
                )}
                {project.images && project.images.length > 0 && (
                  <IconLink
                    onClick={() => {
                      setActiveImages(project.images);
                      setPhotoIndex(0);
                      setIsOpen(true);
                    }}
                    title="Ver galería"
                    as="button"
                  >
                    <FaImages />
                  </IconLink>
                )} */}
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      {/* {isOpen && (
        <Lightbox
          mainSrc={activeImages[photoIndex]}
          nextSrc={activeImages[(photoIndex + 1) % activeImages.length]}
          prevSrc={
            activeImages[
              (photoIndex + activeImages.length - 1) % activeImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + activeImages.length - 1) % activeImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % activeImages.length)
          }
        />
      )} */}
    </PortfolioSection>
  );
}

export default Portfolio;

const PortfolioSection = styled.section`
  padding: 40px 40px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #ffffff;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 2fr));
  gap: 24px;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
`;

const ProjectLogo = styled.div`
  img {
    max-height: 48px;
    padding: 0 5px;
    object-fit: contain;
    max-width: 100%;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: var(--primary-color);
`;

const ProjectLink = styled.a`
  font-size: 0.9rem;
  color: var(--secondary-color);
  text-decoration: none;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const IconLink = styled.a`
  color: var(--secondary-color);
  font-size: 1.2rem;
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: var(--primary-color);
  }
`;
