import React from 'react';
import { ProjectButton } from '../../../../components/buttons/projectButton/ProjectButton.tsx';
import { S } from './Project_Styles.ts';


type PropsProjectType = {
  img: string;
  title: string;
  description: string;
  stack: string;
};

export const Project:React.FC<PropsProjectType> = (props: PropsProjectType) => {
  return (
    <S.StyledProject>
      <S.ImageWrapper>
        <S.Image src={props.img} alt="Project" />
        <S.WrapButton>
          <ProjectButton
            iconId={'arrow'}
            text={'See project'}
            widthIcon={'15'}
            heightIcon={'15'}
            viewBox={'0 0 20 20'}
          />
        </S.WrapButton>
      </S.ImageWrapper>
      <S.ProjectInfo>
        <S.ProjectTitle>{props.title}</S.ProjectTitle>
        <S.ProjectDescription>{props.description}</S.ProjectDescription>
        <S.ProjectStack>Tech stack: {props.stack}</S.ProjectStack>
        <S.ButtonContainer>
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
        </S.ButtonContainer>
      </S.ProjectInfo>
    </S.StyledProject>
  );
};


