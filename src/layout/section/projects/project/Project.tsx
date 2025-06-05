import React from 'react';
import styled from 'styled-components';
import { ProjectButton } from '../../../../components/buttons/projectButton/ProjectButton.tsx';
import { theme } from '../../../../styles/Themes.styles.ts';

type PropsProjectType = {
  img: string;
  title: string;
  description: string;
  stack: string;
};

export const Project = (props: PropsProjectType) => {
  return (
    <StyledProject>
      <ImageWrapper>
        <Image src={props.img} alt="Project" />
        <WrapButton>
          <ProjectButton
            iconId={'arrow'}
            text={'See project'}
            widthIcon={'15'}
            heightIcon={'15'}
            viewBox={'0 0 20 20'}
          />
        </WrapButton>
      </ImageWrapper>
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
            fill={'transparent'}
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

const WrapButton = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    ${WrapButton} {
      opacity: 1;
      button span::before {
        width: 100%;
        height: 100%;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(3px);
    }
  }

  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  flex-shrink: 0;
`;

const ProjectInfo = styled.div`
  padding: 28px 30px 0 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  margin: 17px 0 12px;
`;

const ProjectStack = styled.p`
  margin: 15px 0 15px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 50px;
  flex-grow: 1;
  align-items: end;
`;
