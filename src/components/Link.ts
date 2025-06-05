import styled from 'styled-components';
import { theme } from '../styles/Themes.styles';

export const Link = styled.a`
  text-transform: uppercase;
  position: relative;
  padding: 10px;
  z-index: 0;
  &:hover {
    &::before {
      height: 5px;
    }
  }
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }
`;
