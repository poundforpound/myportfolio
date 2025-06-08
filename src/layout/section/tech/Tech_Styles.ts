import styled from "styled-components";
import {GridWrapper} from "../../../components/GridWrapper.ts";
import {theme} from "../../../styles/Themes.styles.ts";

export const StyledTech = styled.section`
    position: relative;
}
    ${GridWrapper} {
        
    
        margin: 50px 0;
        @media  (max-width: 1024px) {
            grid-template-columns: repeat(6,minmax(70px, 1fr));
        } @media  (max-width: 768px) {
            grid-template-columns: repeat(4,minmax(70px, 1fr));
        } @media  (max-width: 576px) {
            grid-template-columns: repeat(3,minmax(60px, 1fr));
        margin: 0 auto;
        row-gap: 50px;
    }
        
`;

export const IconWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 0 auto;

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 110px;
        height: 110px;

        background-color: rgba(31, 31, 31, 0.5);
        top: 50%;
        left: 50%;
        transform: rotate(45deg) translate(-50%, -50%);

        transform-origin: top left;
    }

    @media  ${theme.media.desktop} {
        width: 70px;
        height: 70px;
        &::before {
            width: 90px;
            height: 90px;
        }
    }
       @media  ${theme.media.mobile} {
        width: 60px;
        height: 60px;
        &::before{
            width: 70px;
            height: 70px;
        }
    }
`;

export const S = {
    StyledTech,
    IconWrapper,
}
