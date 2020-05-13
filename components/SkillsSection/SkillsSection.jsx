import React from 'react';
import styled from 'styled-components';

import { ReactIcon } from './React-icon.svg';
import { NodeIcon } from './Node.js_logo.svg';
import { WorkTime } from './workTime.svg';

const Section = styled.section`
  width: 80%;
  margin: 6rem auto;
  text-align: center;

  h2 {
    color: ${(props) => props.theme.colorPrimary};
    font-size: ${(props) => props.theme.fontXXL};
  }

  .footer-svg {
    max-width: 100%;
    height: 40rem;
  }

  .description-text {
    font-size: ${(props) => props.theme.fontMedium};
    text-align: left;
    margin-bottom: 3rem;
  }
`;

const SkillShowcase = styled.div`
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background-color: #fff;
  max-width: 80%;
  margin: 0 auto 4rem auto;
  box-shadow: 4px 6px 20px 2px rgba(0, 118, 255, 0.11);

  p {
    margin: 0;
  }

  h3 {
    margin: 0 0 0.5rem 0;
  }

  svg {
    max-width: 100%;
    max-height: 10rem;
  }
`;

const SVGFooter = styled.div`
  svg {
    max-width: 100%;
    max-height: 30rem;
  }
`;

const SkillsSection = () => {
  return (
    <>
      <Section>
        <h2>My Skill Set</h2>
        <p className="description-text">
          I consider myself a full-stack engineer with a penchant for React and Node, but
          I&apos;m comfortable learning almost anything used in Web Development.
        </p>
        <SkillShowcase>
          {/* dont forget to put an SVG icon of some sort here */}
          <ReactIcon />
          <h3>Frontend Technologies</h3>
          <p>JavaScript/TypeScript, React, Semantic HTML, Sass, and GraphQL</p>
        </SkillShowcase>
        <SkillShowcase>
          {/* dont forget to put an SVG icon of some sort here */}
          <NodeIcon />
          <h3>Other Technologies</h3>
          <p>Node.js, SQL, NoSql, AWS, and Docker</p>
        </SkillShowcase>
      </Section>
      <SVGFooter>
        <WorkTime className="footer-svg" />
      </SVGFooter>
    </>
  );
};

export default SkillsSection;
