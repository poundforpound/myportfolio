import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Themes.styles.ts";
import {font} from "../../../styles/Common.ts";
import abstract from "../../../assets/images/Abstract.png";

export const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;
  
  
  ${FlexWrapper} {    
  @media ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
  } 
    @media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
      justify-content: center;
    gap: 80px;
  }
    
  }
`;

export const MainInfo = styled.div`
    text-align: left;
  display: flex;
  flex-direction: column;
  gap: 70px;
  
  @media ${theme.media.desktop} {
    gap:50px
  }  @media ${theme.media.tablet} {
    gap:40px
  }@media ${theme.media.mobile} {
    gap:20px
  }

    span {
        ${font({weight:700,family:"'Josefin Sans',sans-serif",Fmax:60,Fmin:32})};
 
    }
  
`;

export const MainIntroduction = styled.h2`
  ${font({weight:700,family:"'Josefin Sans',sans-serif",Fmax:60,Fmin:32})};

`;

export const MainName = styled.h2`
  ${font({weight:700,family:"'Josefin Sans',sans-serif",Fmax:60,Fmin:32,lineHeight:32})};
  position: relative;
  z-index: 0;
  white-space: nowrap;

  
  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: ${theme.colors.accent};
    bottom: -5px;
    left: 0;
    z-index: -1;
    @media ${theme.media.desktop} {
      bottom: -5px;
      height: 15px;
    }  @media ${theme.media.mobile} {
      bottom: 0px;
      height: 10px;
    }
  }
 
`;

export const MainTitle = styled.h1`
  ${font({weight:700,family:"'Josefin Sans',sans-serif",Fmax:60,Fmin:32,lineHeight:32})};
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const PhotoWrapper = styled.div`
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
    @media ${theme.media.desktop} {
      width: 450px;
      height: 450px;
    }    @media ${theme.media.mobile} {
      width: min(100vw,350px);
      height: min(100vw,350px);
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px; 
    left: -10px; 
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
  
  @media  ${theme.media.desktop} {
    width: 250px;
    height: 250px;
  }
  @media  ${theme.media.mobile} {
    width: 200px;
    height: 200px;
  }
`;

export const S ={StyledMain,MainInfo,MainIntroduction,MainName,MainTitle,Photo,PhotoWrapper}
