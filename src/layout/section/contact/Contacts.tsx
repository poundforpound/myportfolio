import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {ProjectButton} from "../../../components/buttons/projectButton/ProjectButton.tsx";

export const Contacts = () => {
    return (
        <StyledContact>
            <Container>
            <SectionTitle title={"Contact"}></SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <ProjectButton text={"Send Message"} iconId={"arrow"} widthIcon={"15"} heightIcon={"15"} viewBox={"0 0 15 15"}/>
            </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
background-color: #1a1a1a;
    min-height: 50vh;
    
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
    gap:20px;
    margin: 0 auto;
`

const Field = styled.input`
width: 100%`