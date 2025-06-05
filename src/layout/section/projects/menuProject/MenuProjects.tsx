import React from 'react';
import styled from 'styled-components';
import { projectListMenu } from '../../../../assets/data/Data.ts';
import { Link } from '../../../../components/Link.ts';

export const MenuProjects = () => {
  return (
    <StyledMenuProject>
      <ul>
        {projectListMenu.map((item, i) => {
          return (
            <LinkItem key={i}>
              <Link href="#">{item}</Link>
            </LinkItem>
          );
        })}
      </ul>
    </StyledMenuProject>
  );
};

const LinkItem = styled.li``;

const StyledMenuProject = styled.nav`
  margin-bottom: 30px;
  ul {
    gap: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
