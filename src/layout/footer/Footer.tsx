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
        <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
          <FooterName>Dmitriy</FooterName>
          <SocialList>
            {socialIconList.map((item, i) => (
              <SocialItem key={i}>
                <SocialLink>
                  <Icon iconId={item} height={'21px'} width={'21px'} viewBox={'0 0 21 21'} />
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
`;

const FooterName = styled.span`
  color: #cccccc;
  font-size: 24px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;
const SocialLink = styled.a`
  display: flex;
  color: red;
`;

const Copyright = styled.small``;
