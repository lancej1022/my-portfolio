import React from 'react';
import styled from 'styled-components';

import SlideUpHover from '../../HoverCard/SlideUpHover';
import { Project } from '../../../interfaces';

const ProjectSection = styled.section`
  margin: 6rem auto;

  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.fontXXL};
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }

  .desktop {
    display: none;

    @media only screen and (min-width: ${(props) => props.theme.breakpointDesktop}) {
      display: block;
    }
  }
`;

const CardsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 3rem;
  padding: 3rem;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpointTablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* @media (min-width: ${(props) => props.theme.breakpointDesktop}) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const projects: Project[] = [
  {
    name: 'SnapDesk',
    copy:
      'Tool for fostering collaboration between Juniors and Seniors in your org. Built with React, Redux, and Express.',
    github: 'https://github.com/lancej1022/snapdeskV2',
    background: '/images/snapdeskv2.jpg'
  },
  {
    name: 'R.M.L',
    copy: 'Rate My Landlord: where renters can look up properties or rate landlords.',
    github: 'https://github.com/team-exotic/ratemylandlord',
    background: '/images/ratemylandlord.jpg'
  },
  {
    name: 'Portfolio',
    copy:
      'The code for this portfolio is public! Check it out to see how I used TypeScript, Next.js, and Styled Components.',
    github: 'https://github.com/lancej1022/my-portfolio',
    background: '/images/portfolio.jpg'
  }
];

const ProjectsContainer: React.FC = () => {
  return (
    <ProjectSection id="projects">
      <h2>Projects</h2>
      <p className="desktop">&#40;Hover for details&#41;</p>
      <CardsContainer>
        {projects.map((project) => {
          return (
            <SlideUpHover
              name={project.name}
              copy={project.copy}
              github={project.github}
              background={project.background}
              key={`project-${project.name}`}
            />
          );
        })}
      </CardsContainer>
    </ProjectSection>
  );
};

export default ProjectsContainer;
