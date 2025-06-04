import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import { Container } from '../../../components/Container.ts';
import { GridWrapper } from '../../../components/GridWrapper.ts';
import { techList } from '../../../assets/data/Data.ts';
import { Icon } from '../../../components/icon/Icon.tsx';

export const Tech = () => {
  return (
    <StyledTech>
      <Container>
        <SectionTitle
          title={'My Tech Stack'}
          subtitle={' Technologies I’ve been working with recently'}
        />
        <GridWrapper
          $columns={6}
          $minWidth={'120px'}
          $gap={70}
          $justifyItems={'center'}
          $alignItems={'center'}>
          {techList.map((tech, index) => (
            <IconWrapper key={index}>
              <Icon iconId={tech} width={'100'} height={'100'} viewBox={'0 0 112 112'} />
            </IconWrapper>
          ))}
        </GridWrapper>
      </Container>
    </StyledTech>
  );
};

const StyledTech = styled.section`
  ${GridWrapper} {
    margin-bottom: 50px;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  margin: 0 auto;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 130px;
    height: 130px;

    background-color: rgba(31, 31, 31, 0.5);
    top: 0;
    left: 0;
    transform: rotate(45deg) translate(-50%, -50%);
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;
