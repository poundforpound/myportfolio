import styled from "styled-components";
import {theme} from "../../styles/Themes.styles.ts";
import {font} from "../../styles/Common.ts";

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.secondaryBg};
  padding: 40px 0;
`;

export const FooterName = styled.span`
  ${font({family:"'Josefin Sans', sans-serif",weight:700,Fmin:16,Fmax:24})};
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 20px 0;
`;

export const SocialItem = styled.li``;

export const SocialLink = styled.a`
  display: flex;
  color: ${theme.colors.accent};
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

export const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;
`;

export const S ={
    StyledFooter,
    FooterName,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}