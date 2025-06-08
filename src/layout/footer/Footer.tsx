import React from 'react';
import { Container } from '../../components/Container.ts';
import { FlexWrapper } from '../../components/FlexWrapper.ts';
import { socialIconList } from '../../assets/data/Data.ts';
import { Icon } from '../../components/icon/Icon.tsx';
import {S} from "./Footer_Styles.ts";

export const Footer:React.FC = () => {
  return (
    <S.StyledFooter>
      <Container>
        <FlexWrapper direction={'column'} align={'center'} justify={'space-between'}>
          <S.FooterName>Dmitriy</S.FooterName>
          <S.SocialList>
            {socialIconList.map((item, i) => (
              <S.SocialItem key={i}>
                <S.SocialLink>
                  <Icon iconId={item} height={'21'} width={'21'} viewBox={'0 0 21 21'} />
                </S.SocialLink>
              </S.SocialItem>
            ))}
          </S.SocialList>
          <S.Copyright>&Copy 2025.All rights reserved</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.StyledFooter>
  );
};


