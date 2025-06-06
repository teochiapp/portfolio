import React from "react";
import styled from "styled-components";

function HeroScreen() {
  return (
    <Section>
      <ContentWrapper>
        <LeftColumn>
          <Title>
            FRONTEND <br /> DEVELOPER<Color>.</Color>
          </Title>

          <Subtitle>
            I like to craft solid and scalable frontend products with great user
            experiences.
          </Subtitle>

          <FeatureGrid>
            <Feature>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </Feature>
            <Feature>
              Proven experience building successful products for clients across
              several countries.
            </Feature>
          </FeatureGrid>
        </LeftColumn>

        <RightColumn>
          <PhotoWrapper>
            {/* Insertando el SVG como fondo detrás de la imagen */}
            <StyledSVG>
              <img src="/avatar.svg" alt="Decorative Avatar" />
            </StyledSVG>

            {/* Imagen principal */}
            <img src="/TeoChiappero.jpg" alt="Teo Chiappero" />
          </PhotoWrapper>
        </RightColumn>
      </ContentWrapper>
    </Section>
  );
}

export default HeroScreen;

// Styled Components
const Section = styled.section`
  background: linear-gradient(
    90deg,
    var(--primary-color) 67%,
    var(--secondary-color) 33%
  );
  min-height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 80px;
  font-family: var(--text-font);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 40px;
  padding-left: 40px;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  padding-right: 40px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-top: 2rem;
  font-size: 4rem;
  font-weight: 700;
  color: var(--secondary-color);
  line-height: 1.3;
  font-family: var(--heading-font);
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: 1rem;
`;

const FeatureGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5rem;
`;

const Feature = styled.p`
  flex: 1;
  font-size: 1rem;
  color: var(--secondary-color);
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;

  img {
    max-width: 100%;
    max-height: 48vh;
    position: relative;
    z-index: 2; /* Mantener la imagen por encima del SVG */
  }

  &::after {
    content: "";
    position: absolute;
    top: 45px;
    left: 25px;
    width: 100%;
    height: 100%;
    border: 1.5px solid var(--text-color);
    z-index: 1;
  }
`;

const StyledSVG = styled.div`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 130%;
  height: auto;
  z-index: 0;
  pointer-events: none;
  img {
    width: 100%;
    height: auto;
  }
`;

const Color = styled.span`
  color: white;
`;
