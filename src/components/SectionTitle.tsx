import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.ts";

export const SectionTitle = (props:{title:string,subtitle?:string}) => {
    return (
        <FlexWrapper direction="column" justify="space-between" align={"center"}>
            <StyledSectionTitle>{props.title}</StyledSectionTitle>
            <SectionSubTitle>{props.subtitle}</SectionSubTitle>
        </FlexWrapper>
    );
};

const StyledSectionTitle = styled.h2`
    color:#cccccc;
    font-size:48px;
    text-align:center;
`

const SectionSubTitle = styled.h3`
    color:#a6a6a6;
    font-size:32px;
    text-align:center;
`