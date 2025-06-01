import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon.tsx";

type ProjectButtonProps = {
    text: string;
    iconId:string,
    widthIcon:string,
    heightIcon:string,
    viewBox:string
}

export const ProjectButton = (props:ProjectButtonProps) => {
    return (
        <StyledButton>
            <Icon iconId={props.iconId} width={props.widthIcon} height={props.heightIcon} viewBox={props.viewBox}/>
            <span>{props.text}</span>
        </StyledButton>
    );
};

const StyledButton= styled.button`
    font-size:16px;
    color: #cccccc;
    background-color: transparent;
    border:none;
    cursor: pointer;
    display: flex;
    gap:10px;
    padding:0;
   span{
       position: relative;
       &:hover{
         &::before{
          content: "";
             display: inline-block;
             position: absolute;
             width: 100%;
             height: 1px;
             background-color:#cccccc;
             bottom:0;
             left:50%;
             transform: translate(-50%,-50%);
         }  
       }
   }
  `
