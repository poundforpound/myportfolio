import styled from "styled-components";
import {theme} from "../../../../styles/Themes.styles.ts";

export const LinkItem = styled.li``;

export const StyledMenuProject = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
      max-width: 352px;
      width: 100%;
border: 1px solid ${theme.colors.accent};
      margin: 0 auto 40px;
`;

export const S = {
    LinkItem,
    StyledMenuProject,
}