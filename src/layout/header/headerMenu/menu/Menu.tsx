import React from 'react';
import {menuHeaderList} from "../../../../assets/data/Data.ts";
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
        <ul>
            {menuHeaderList.map((item,i) => (
            <ListItem key={i}><a href={item.href}>{item.title}</a></ListItem>
            ))}

        </ul>
        </StyledMenu>
    );
};
const ListItem = styled.li`
    a{
color: #a6a6a6;
        
    }
`

const StyledMenu = styled.nav`
ul{
    display: flex;
    ${ListItem}:not(:first-child){
        margin-left: 60px;
    }
}`




