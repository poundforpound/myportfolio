import React from 'react';
import { Container } from '../../../components/Container.ts';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import styled from 'styled-components';
import { GridWrapper } from '../../../components/GridWrapper.ts';
import { projectList } from '../../../assets/data/Data.ts';
import { Project } from './project/Project.tsx';
import { MenuProjects } from './menuProject/MenuProjects.tsx';

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle title={'Projects'} subtitle={"Things I've built so far"} />
        <MenuProjects />
        <GridWrapper $columns={3} $gap={50}>
          {projectList.map((project, i) => {
            return (
              <Project
                key={i}
                img={project.img}
                title={project.title}
                description={project.description}
                stack={project.stack}
              />
            );
          })}
        </GridWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  ${GridWrapper} {
    margin: 0 auto;
  }
`;
