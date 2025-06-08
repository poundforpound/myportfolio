import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper.ts';
import { theme } from '../styles/Themes.styles.ts';
import {font} from "../styles/Common.ts";

export const SectionTitle:React.FC<{title:string,subtitle?:string}>= (props: { title: string; subtitle?: string }) => {
  return (
    <FlexWrapper direction="column" justify="space-between" align={'center'}>
      <StyledSectionTitle>{props.title}</StyledSectionTitle>
      <SectionSubTitle>{props.subtitle}</SectionSubTitle>
    </FlexWrapper>
  );
};

const StyledSectionTitle = styled.h2`
    ${font({family:"'Josefin Sans', sans-serif",weight:700,Fmin:30,Fmax:48})};
  text-align: center;
  letter-spacing: 3px;
  position: relative;
  margin: 45px 0;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 50%;
    height: 2px;
    background-color: ${theme.colors.accent};
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SectionSubTitle = styled.h3`
    ${font({family:"'Josefin Sans', sans-serif",weight:700,Fmin:24,Fmax:42,lineHeight:36})};
  text-align: center;
  margin-bottom: 40px;
`;
