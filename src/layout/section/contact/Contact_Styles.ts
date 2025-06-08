import styled from "styled-components";
import {theme} from "../../../styles/Themes.styles.ts";

export const StyledContact = styled.section``;

export const StyledForm = styled.form`
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

export const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  font-family: 'Poppins', sans-serif;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;

export const S ={
    StyledContact,
    StyledForm,
    Field
}