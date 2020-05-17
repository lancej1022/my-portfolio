import React from 'react';
import styled from 'styled-components';
import SlideUpHover from '../../HoverCard/SlideUpHover';

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
  grid-gap: 2rem;
  max-width: 1024px;
  padding: 3rem;

  @media (min-width: ${(props) => props.theme.breakpointTablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpointDesktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface Project {
  name: string;
  copy: string;
  github: string;
  background: string;
}

const projects: Project[] = [
  {
    name: 'DrawQL',
    copy: 'A GraphQL prototyping tool built with React, Apollo, Express, and PostgresQL.',
    github: 'https://github.com/oslabs-beta/drawql',
    background: '/images/drawqlCompressed.jpg'
  },
  {
    name: 'SnapDesk',
    copy:
      'Tool for fostering collaboration between Juniors and Seniors in your org. Built with React, Redux, and Express.',
    github: 'https://github.com/lancej1022/snapdesk-app',
    background: '/images/SnapdeskBG.jpg'
  },
  {
    name: 'Rate My Landlord',
    copy:
      'Web App in the style of ratemyprofessors.com where renters can look up properties or rate landlords.',
    github: 'https://github.com/team-exotic/ratemylandlord',
    background: '/images/ratemylandlord.jpg'
  },
  {
    name: 'My Portfolio',
    copy:
      'The code for this portfolio is public! Check it out to see how I used TypeScript, Next.js, and GraphQL.',
    github: 'https://github.com/lancej1022/my-portfolio',
    background: '/images/ratemylandlord.jpg'
  }
];

const ProjectsContainer: React.FC = () => {
  return (
    <ProjectSection>
      <h2>Projects</h2>
      <p className="desktop">&#40;Hover for details&#41;</p>
      <CardsContainer>
        {projects.map((project) => {
          return (
            <SlideUpHover
              title={project.name}
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
