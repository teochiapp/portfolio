import React from "react";
import styled from "styled-components";

function Experience() {
  const UTNTechs = [
    { name: "C#", color: "#3a3a3a" },
    { name: "Javascript", color: "#4e4328" },
    { name: "Vue", color: "#2c7360" },
    { name: "MySQL", color: "#007b8a" },
    { name: "Github", color: "#343a40" },
  ];

  const RochaTechs = [
    { name: "PHP", color: "#5a66a3" },
    { name: "WordPress", color: "#1f3d5a" },
    { name: "MySQL", color: "#007b8a" },
    { name: "CSS", color: "#1c3ea3" },
    { name: "Bootstrap", color: "#5e3da0" },
    { name: "Javascript", color: "#4e4328" },
  ];

  const FreeTechs = [
    { name: "React", color: "#2c3e50" },
    { name: "Javascript", color: "#4e4328" },
    { name: "Css", color: "#1c3ea3" },
    { name: "Node", color: "#3a6e4f" },
  ];

  return (
    <Container>
      <Content>
        <ExperienceList>
          <Title>MY JOURNEY</Title>
          <ExperienceItem>
            <ItemIcon src="/icons/freelance.png" alt="Freelancer Icon" />
            <ItemDetails>
              <HighlightedP>Freelancer</HighlightedP>
              <Date>(2024 - Present)</Date>
              <Description>
                Working independently with a variety of clients, creating
                websites tailored to their needs. This experience has helped me
                improve my communication, problem-solving, and project
                management skills while delivering responsive, user-friendly web
                solutions.
              </Description>
              {FreeTechs.map((tag, index) => (
                <Tag key={index} bg={tag.color}>
                  {tag.name}
                </Tag>
              ))}
            </ItemDetails>
          </ExperienceItem>

          <ExperienceItem>
            <ItemIcon
              src="/icons/estudio_rocha_asoc_logo.jpeg"
              alt="Estudio Rocha y Asoc. Logo"
            />
            <ItemDetails>
              <HighlightedP>Estudio Rocha y Asoc. </HighlightedP>
              <Date>(2023 - 2024)</Date>
              <Description>
                Interned as a developer, where I was responsible for
                independently managing and developing internal projects. Gained
                practical experience working with real-world requirements and
                collaborating with a professional team.
              </Description>
              {RochaTechs.map((tag, index) => (
                <Tag key={index} bg={tag.color}>
                  {tag.name}
                </Tag>
              ))}
            </ItemDetails>
          </ExperienceItem>
          <ExperienceItem>
            <ItemIcon src="/icons/utn.jpg" alt="UTN FRC Icon" />
            <ItemDetails>
              <HighlightedP>UTN San Francisco</HighlightedP>
              <Date>(2020 - 2023)</Date>
              <Description>
                Earned my technical programming degree, building a solid
                foundation in software development, logic, and problem-solving.
              </Description>
              {UTNTechs.map((tag, index) => (
                <Tag key={index} bg={tag.color}>
                  {tag.name}
                </Tag>
              ))}
            </ItemDetails>
          </ExperienceItem>
        </ExperienceList>
        <LanguagesSection>
          <LanguageList>
            <LanguageItem>
              <Flag src="/icons/spain.png" alt="Spanish Flag" />
              <LanguageInfo>
                <LanguageName>Spanish</LanguageName>
                <Level>Native</Level>
              </LanguageInfo>
            </LanguageItem>
            <LanguageItem>
              <Flag src="/icons/brtn.png" alt="English Flag" />
              <LanguageInfo>
                <LanguageName>English</LanguageName>
                <Level>Advanced</Level>
              </LanguageInfo>
            </LanguageItem>
            <LanguageItem>
              <Flag src="/icons/brasil.png" alt="Dutch Flag" />
              <LanguageInfo>
                <LanguageName>Portuguese</LanguageName>
                <Level>Intermediate</Level>
              </LanguageInfo>
            </LanguageItem>
          </LanguageList>
        </LanguagesSection>
      </Content>
      <ImageSection>
        <TechImage src="/experience-bg-alt.png" alt="Tecnologias" />
      </ImageSection>
    </Container>
  );
}

export default Experience;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const Content = styled.div`
  max-width: 60%;
  padding: 10px 0;
  padding-right: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

const Title = styled.h1`
  font-size: 2.1em;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: "Saira", sans-serif;
  color: var(--secondary-color);
  `;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const ItemIcon = styled.img`
  width: 100%;
  max-width: 50px;
  margin-right: 20px;
  height: auto;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  flex-shrink: 0;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const HighlightedP = styled.span`
  color: var(--primary-color);
  padding-right: 10px;
  font-family: var(--heading-font);
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0;
  display: inline-block; /* Ensure it behaves like a block for margin/padding */
`;

const Date = styled.span`
  color: var(--primary-color);
  display: inline-block;
  font-style: italic; /* Optional: make date italic */
`;

const Description = styled.p`
  color: var(
    --primary-color
  );
  font-family: Mulish;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ImageSection = styled.div`
  position: relative;
  width: 40%;
  min-width: 300px;
  display: flex;
  justify-content: center;
  max-width: 510px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    min-width: auto;
  }
`;

const TechImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const LanguagesSection = styled.div`
  position: relative;
  margin-top: 20px;
`;

const LanguageList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  justify-content: center;
  align-items: center;
  text-align: left;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const LanguageItem = styled.div`
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  width: 40px;
  height: 30px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
  border: 2px solid var(--primary-color);
`;

const LanguageInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LanguageName = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  color: var(--primary-color);
`;

const Level = styled.span`
  font-family: Mulish;
  font-size: 0.9em;
  color: var(--primary-color);
`;

const Tag = styled.span`
  background-color: ${(props) => props.bg || "#333"};
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 12px;
  margin: 4px 6px 0 0;
  display: inline-block;
  font-family: Mulish;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);

  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }
`;


