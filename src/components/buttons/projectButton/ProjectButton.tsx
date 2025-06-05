import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../icon/Icon.tsx';
import { theme } from '../../../styles/Themes.styles.ts';

type ProjectButtonProps = {
  text: string;
  iconId: string;
  widthIcon?: string;
  heightIcon?: string;
  viewBox?: string;
  fill?: string;
};

export const ProjectButton = (props: ProjectButtonProps) => {
  return (
    <StyledButton>
      <Icon
        iconId={props.iconId}
        width={props.widthIcon}
        height={props.heightIcon}
        viewBox={props.viewBox}
        fill={props.fill}
      />
      <span>{props.text}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 10px;
  padding: 0;
  z-index: 0;
  span {
    position: relative;
    &:hover {
      &::before {
        width: 100%;
        height: 100%;
      }
    }
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 0;
      background-color: ${theme.colors.accent};
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }
`;
