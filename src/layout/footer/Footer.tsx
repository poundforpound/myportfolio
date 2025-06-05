import React from 'react';
import { Container } from '../../components/Container.ts';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper.ts';
import { socialIconList } from '../../assets/data/Data.ts';
import { Icon } from '../../components/icon/Icon.tsx';
import { theme } from '../../styles/Themes.styles.ts';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction={'column'} align={'center'} justify={'space-between'}>
          <FooterName>Dmitriy</FooterName>
          <SocialList>
            {socialIconList.map((item, i) => (
              <SocialItem key={i}>
                <SocialLink>
                  <Icon iconId={item} height={'21'} width={'21'} viewBox={'0 0 21 21'} />
                </SocialLink>
              </SocialItem>
            ))}
          </SocialList>
          <Copyright>&Copy 2025</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.secondaryBg};
  padding: 40px 0;
`;

const FooterName = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 24px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 20px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
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

const Copyright = styled.small`
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  opacity: 0.5;
`;
