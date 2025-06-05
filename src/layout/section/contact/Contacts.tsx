import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import styled from 'styled-components';
import { Container } from '../../../components/Container.ts';
import { ProjectButton } from '../../../components/buttons/projectButton/ProjectButton.tsx';
import { theme } from '../../../styles/Themes.styles.ts';

export const Contacts = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle title={'Contact'}></SectionTitle>
        <StyledForm>
          <Field placeholder={'name'} />
          <Field placeholder={'subject'} />
          <Field placeholder={'message'} as={'textarea'} />
          <ProjectButton
            text={'Send Message'}
            iconId={'arrow'}
            widthIcon={'15'}
            heightIcon={'15'}
            viewBox={'0 0 15 15'}
          />
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 100%;
  gap: 20px;
  margin: 0 auto;
  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.2;
  font-family: 'Poppins', sans-serif;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;
