import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "./headerMenu/menu/Menu.tsx";
import {SocialGroup} from "../../components/socialGroup/SocialGroup.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";


export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <InfoHeader>
                        <Menu/>
                        <SocialGroup/>
                    </InfoHeader>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: transparent;
    padding: 20px 0;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
`

