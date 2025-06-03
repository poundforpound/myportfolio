import React from 'react';
import { menuHeaderList } from '../../../../assets/data/Data.ts';
import styled from 'styled-components';
import { theme } from '../../../../styles/Themes.styles.ts';

export const HeaderMenu = () => {
  return (
    <StyledMenu>
      <ul>
        {menuHeaderList.map((item, i) => (
          <ListItem key={i}>
            <Link href={item.href}>
              {item.title}
              <Mask>
                <span>{item.title}</span>
              </Mask>
              <Mask>
                <span>{item.title}</span>
              </Mask>
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledMenu>
  );
};

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  height: 50%;
  top: 0;
  left: 0;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  & + & {
    top: 50%;
    span {
      transform: translateY(-50%);
      display: inline-block;
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skew(12deg) translateX(-5px);
      color: ${theme.colors.font};
      & + ${Mask} {
        transform: skew(12deg) translateX(5px);
      }
    }
  }
`;

const StyledMenu = styled.nav`
  text-align: center;
  display: flex;
  height: 100%;
  align-items: center;
  ul {
    display: flex;

    ${ListItem}:not(:first-child) {
      margin-left: 50px;
    }
  }
`;
