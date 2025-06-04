import { Container } from '../../../components/Container.ts';
import { FlexWrapper } from '../../../components/FlexWrapper.ts';
import styled from 'styled-components';
import avatar from '../../../assets/images/avatar.webp';
import abstract from '../../../assets/images/Abstract.png';
import { theme } from '../../../styles/Themes.styles.ts';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} height={100}>
          <MainInfo>
            <span>Hi 👋, </span>
            <MainIntroduction>My name is</MainIntroduction>
            <MainName>Dmitriy Alekseenkov</MainName>
            <MainTitle>I'm a WebDeveloper</MainTitle>
          </MainInfo>
          <PhotoWrapper>
            <Photo src={avatar} />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const MainInfo = styled.div`
  text-align: left;
  span {
    font-size: 60px;
    font-weight: bold;
  }
`;

const MainIntroduction = styled.h2`
  font-size: 60px;
  margin: 10px 0;
`;

const MainName = styled.h2`
  font-size: 60px;
  margin-bottom: 10px;
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: ${theme.colors.accent};
    bottom: 0;
    z-index: -1;
  }
`;

const MainTitle = styled.h1`
  font-size: 60px;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const PhotoWrapper = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  border-radius: 50%;
  background: transparent;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 627px;
    height: 627px;
    transform: translate(-50%, -50%);
    background: url(${abstract});
    background-size: cover;
    background-position: center;
    z-index: 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px; /* Расстояние от края фото */
    left: -10px; /* Расстояние от края фото */
    right: -10px;
    bottom: -10px;
    background: linear-gradient(to bottom, #e70faa, #00c0fd);
    border-radius: 50%;
    z-index: 1;
  }
  img {
    position: absolute;
    z-index: 10;
    left: 0;
  }
`;

//circle with gradient: position absolute: top, left, z-index: , width: 10vw;
//image: border-radius: 50%, width: 9.57vw; z-index:
//border-radius: 50%;
