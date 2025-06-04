import React from 'react';
import styled from 'styled-components';
import { ProjectButton } from '../../../../components/buttons/projectButton/ProjectButton.tsx';

type PropsProjectType = {
  img: string;
  title: string;
  description: string;
  stack: string;
};

export const Project = (props: PropsProjectType) => {
  return (
    <StyledProject>
      <Image src={props.img} alt="Project" />
      <ProjectInfo>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.description}</ProjectDescription>
        <ProjectStack>Tech stack: {props.stack}</ProjectStack>
        <ButtonContainer>
          <ProjectButton
            iconId={'linkChain'}
            text={'Live Preview'}
            widthIcon={'15'}
            heightIcon={'15'}
            viewBox={'0 0 20 20'}
          />
          <ProjectButton
            iconId={'githubFill'}
            text={'View Code'}
            widthIcon={'15'}
            heightIcon={'15'}
            viewBox={'0 0 85 85'}
          />
        </ButtonContainer>
      </ProjectInfo>
    </StyledProject>
  );
};

const StyledProject = styled.aside`
  max-width: 375px;
  min-height: 567px;
  border-radius: 20px;
  background-color: #363535;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  flex-shrink: 0;
`;

const ProjectInfo = styled.div`
  padding: 28px 30px 25px 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  color: #cccccc;
  font-size: 28px;
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  font-size: 18px;
  margin: 17px 0 12px;
`;

const ProjectStack = styled.p`
  color: #cccccc;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  margin-top: 21px;
  padding: 0;
  display: flex;
  gap: 50px;
`;
