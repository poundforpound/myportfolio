import React from 'react';

import { projectListMenu } from '../../../../assets/data/Data.ts';
import { Link } from '../../../../components/Link.ts';
import { S } from './MenuProject_Styles.ts';


export const MenuProjects:React.FC = () => {
  return (
    <S.StyledMenuProject>
      <ul>
        {projectListMenu.map((item, i) => {
          return (
            <S.LinkItem key={i}>
              <Link href="#">{item}</Link>
            </S.LinkItem>
          );
        })}
      </ul>
    </S.StyledMenuProject>
  );
};


