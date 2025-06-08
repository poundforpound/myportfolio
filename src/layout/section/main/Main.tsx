import { Container } from '../../../components/Container.ts';
import { FlexWrapper } from '../../../components/FlexWrapper.ts';
import avatar from '../../../assets/images/avatar.webp';
import {S} from "./Main_Styles.ts";
import Typewriter from  'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {
  return (
    <S.StyledMain id={"about"}>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
          <S.MainInfo>
            <span>Hi 👋, </span>
            <S.MainIntroduction>My name is</S.MainIntroduction>
            <S.MainName>Dmitriy Alekseenkov</S.MainName>
            <S.MainTitle>
              <p>I'm a WebDeveloper</p>
              <Typewriter options={{
                strings:["I'm a WebDeveloper"],
                autoStart:true,
                loop:true,
                delay:100,
              }}/>
              </S.MainTitle>
          </S.MainInfo>
          <Tilt   className="background-stripes parallax-effect" perspective={500}>


          <S.PhotoWrapper>
            <S.Photo src={avatar} />
          </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};



