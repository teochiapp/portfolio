import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

function SocialIcons() {
  return (
    <ul>
      <Social>
        <a href="mailto:teochiapps@gmail.com"><FaEnvelope /></a>
      </Social>
      <Social>
        <a
          href="https://www.linkedin.com/in/teo-chiappero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </Social>
      <Social>
        <a
          href="https://github.com/teochiapp"
          target="_blank"
          rel="noopener noreferrer"
        >
             <FaGithub />
        </a>
      </Social>
    </ul>
  );
}

export default SocialIcons;

const Social = styled.li`
  display: inline-block;
  a {
    font-size: 2rem;
    color: var(--primary-color);
    margin-right: 1rem;
    transition: transform 0.2s;
    display: inline-block;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
