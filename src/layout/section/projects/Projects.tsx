import React, {useState} from 'react';
import { Container } from '../../../components/Container.ts';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import styled from 'styled-components';
import { GridWrapper } from '../../../components/GridWrapper.ts';
import { projectList } from '../../../assets/data/Data.ts';
import { Project } from './project/Project.tsx';
import {MenuProjects, MenuProjectsStatusType} from './menuProject/MenuProjects.tsx';
import {theme} from "../../../styles/Themes.styles.ts";

export const Projects:React.FC = () => {
    const [currentFilterStatus,setCurrentFilterStatus] = useState('all');

    const filteredWorks = currentFilterStatus === "all"
    ? projectList
        : projectList.filter((project)=>{ return project.type === currentFilterStatus});

    const changeCurrentStatus =(value:MenuProjectsStatusType)=>{
        setCurrentFilterStatus(value)
    }

  return (
    <StyledProjects id={"project"}>
      <Container>
        <SectionTitle title={'Projects'} subtitle={"Things I've built so far"} />
        <MenuProjects changeCurrentStatus={changeCurrentStatus}  currentFilterStatus={currentFilterStatus}/>
        <GridWrapper $columns={3} $gap={30} >
          {filteredWorks.map((project, i) => {
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
    position: relative;
  ${GridWrapper} {
      @media ${theme.media.desktop} {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      } @media ${theme.media.mobile} {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      }
  }
`;
