import React from 'react';

import { projectListMenu } from '../../../../assets/data/Data.ts';
import { Link } from '../../../../components/Link.ts';
import { S } from './MenuProject_Styles.ts';


export type MenuProjectsStatusType = 'all' | 'landing' | 'react' | 'spa'

type MenuProjectsType ={
    changeCurrentStatus: (value: MenuProjectsStatusType)=>void
    currentFilterStatus:string

}

export const MenuProjects:React.FC<MenuProjectsType> = (props:MenuProjectsType) => {
  return (
    <S.StyledMenuProject>
      <ul>
        {projectListMenu.map((item:{title:string,status:MenuProjectsStatusType}, i) => {
          return (
            <S.LinkItem key={i}>
              <Link active={props.currentFilterStatus===item.status} as={"button"} onClick={()=>props.changeCurrentStatus(item.status)}>{item.title}</Link>
            </S.LinkItem>
          );
        })}
      </ul>
    </S.StyledMenuProject>
  );
};


