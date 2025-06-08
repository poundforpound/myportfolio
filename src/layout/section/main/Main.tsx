import { Container } from '../../../components/Container.ts';
import { FlexWrapper } from '../../../components/FlexWrapper.ts';
import avatar from '../../../assets/images/avatar.webp';
import {S} from "./Main_Styles.ts";

export const Main = () => {
  return (
    <S.StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
          <S.MainInfo>
            <span>Hi 👋, </span>
            <S.MainIntroduction>My name is</S.MainIntroduction>
            <S.MainName>Dmitriy Alekseenkov</S.MainName>
            <S.MainTitle>I'm a WebDeveloper</S.MainTitle>
          </S.MainInfo>
          <S.PhotoWrapper>
            <S.Photo src={avatar} />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};



