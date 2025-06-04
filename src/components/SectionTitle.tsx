import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper.ts';
import { theme } from '../styles/Themes.styles.ts';

export const SectionTitle = (props: { title: string; subtitle?: string }) => {
  return (
    <FlexWrapper direction="column" justify="space-between" align={'center'}>
      <StyledSectionTitle>{props.title}</StyledSectionTitle>
      <SectionSubTitle>{props.subtitle}</SectionSubTitle>
    </FlexWrapper>
  );
};

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 48px;
  text-align: center;
  letter-spacing: 3px;
  position: relative;
  margin: 35px 0;
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
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 3px;
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;
