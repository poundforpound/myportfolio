import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.ts";
import {GridWrapper} from "../../../components/GridWrapper.ts";
import {techList} from "../../../assets/data/Data.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Tech = () => {
    return (
        <StyledTech>
            <Container>
            <SectionTitle title={"My Tech Stack"} subtitle={" Technologies I’ve been working with recently"}/>
                <GridWrapper columns={6} minWidth={"120px"} gap={70} justifyItems={"center"} alignItems={"center"}>
                    {techList.map((tech, index) => (
                        <IconWrapper key={index}>
                            <Icon iconId={tech} width={"110"} height={"110"} viewBox={"0 0 112 112"} />
                        </IconWrapper>
                    ))}
                </GridWrapper>
            </Container>
        </StyledTech>
    );
};

const StyledTech = styled.div`
    background-color: #1a1a1a;

`

const IconWrapper = styled.div``