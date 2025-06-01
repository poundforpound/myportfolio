import React from 'react';
import styled from "styled-components";
import {projectListMenu} from "../../../../assets/data/Data.ts";

export const MenuProjects = () => {
    return (
        <StyledMenuProject>
                <ul>
                    {projectListMenu.map((item,i) => {
                        return (
                            <LinkItem key={i}>
                               <a href="#">
                                   {item}
                               </a>
                            </LinkItem>
                        )
                    })}
                </ul>
        </StyledMenuProject>
    );
};

const LinkItem = styled.li`
    a{
text-transform: uppercase;
        color: #a6a6a6
    }

`


const StyledMenuProject = styled.nav`
    margin-bottom: 30px;
    ul{
display: flex;
    justify-content: center;
        align-items: center;
        ${LinkItem}:not(:first-child){
            margin-left: 60px;
        }
               
    }
`

