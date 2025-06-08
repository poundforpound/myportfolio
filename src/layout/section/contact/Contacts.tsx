import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import { Container } from '../../../components/Container.ts';
import { ProjectButton } from '../../../components/buttons/projectButton/ProjectButton.tsx';
import {S} from "./Contact_Styles.ts";

export const Contacts:React.FC = () => {
  return (
    <S.StyledContact id={"contact"}>
      <Container>
        <SectionTitle title={'Contact'}></SectionTitle>
        <S.StyledForm>
          <S.Field placeholder={'name'} />
          <S.Field placeholder={'subject'} />
          <S.Field placeholder={'message'} as={'textarea'} />
          <ProjectButton
            text={'Send Message'}
            iconId={'arrow'}
            widthIcon={'15'}
            heightIcon={'15'}
            viewBox={'0 0 15 15'}
          />
        </S.StyledForm>
      </Container>
    </S.StyledContact>
  );
};


