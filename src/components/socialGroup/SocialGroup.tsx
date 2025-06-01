import React from 'react';
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.ts";

export const SocialGroup = () => {
    return (
        <SocialGroupStyled>
            <FlexWrapper justify={"space-between"} gap={50} align={"center"} height={100}>
                <SocialLink href="#">
                    <Icon iconId={"gitFull"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                </SocialLink>
                <SocialLink href="#">
                    <Icon iconId={"twitter"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                </SocialLink>
                <SocialLink href="#">
                    <Icon iconId={"in"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                </SocialLink>
            </FlexWrapper>
        </SocialGroupStyled>
    );
};

const SocialGroupStyled = styled.div`

`

const SocialLink = styled.a``

