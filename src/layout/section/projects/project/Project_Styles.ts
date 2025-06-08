import styled from "styled-components";
import {theme} from "../../../../styles/Themes.styles.ts";
import {font} from "../../../../styles/Common.ts";

export const StyledProject = styled.aside`
  max-width: 375px;
  width: 300px;
  width: 100%;
  border-radius: 20px;
  background-color: #363535;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const WrapButton = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
  }
  &:hover {
    ${WrapButton} {
      opacity: 1;
      button span::before {
        width: 100%;
        height: 100%;
        opacity: 1;
      }
    }

  }
  @media ${theme.media.tablet} {
    ${WrapButton} {
      opacity: 1;
      button span::before {
        width: 100%;
        height: 100%;
        opacity: 1;
      }
    }
  }


  }
`;

export const Image = styled.img`
  width: 100%;
  min-height: 260px;
  flex-shrink: 0;
  @media ${theme.media.desktop} {
    min-height: 180px;
  }
`;

export const ProjectInfo = styled.div`
  padding: 28px 30px 0 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProjectTitle = styled.h3`
  ${font({weight:700,Fmin:20,Fmax:28,lineHeight:32})};
  margin: 0;
`;

export const ProjectDescription = styled.p`
  ${font({weight:500,Fmin:14,Fmax:18,lineHeight:28})};
  margin: 17px 0 12px;
`;

export  const ProjectStack = styled.p`
  margin: 15px 0 15px;
`;

export  const ButtonContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 20px;
  flex-grow: 1;
  align-items: end;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const S ={
    StyledProject,
    WrapButton,
    ImageWrapper,
    Image,
    ProjectInfo,
    ProjectTitle,
    ProjectDescription,
    ProjectStack,
    ButtonContainer,
}