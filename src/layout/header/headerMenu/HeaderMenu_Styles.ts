import styled, {css} from "styled-components";
import {theme} from "../../../styles/Themes.styles.ts";
import {Link} from "react-scroll";


//Desktop Menu
export const StyledDesktop = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 45px;
    div{
   @media ${theme.media.desktop} {
            display: none;
    }
    }
`;

//Mobile Menu
export  const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform:rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform:rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
}
`
export  const MobileMenuPopup = styled.div<{ isOpen: boolean }>`

    display: flex;
    flex-direction: column;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
        justify-content: center;
        align-items: center;
    transform: translateY(-100%);
  
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
    `
}
    
    ul {
        display: flex;
        gap:30px;
        flex-direction: column;
        align-items: center;
        
`

export  const StyledMenu = styled.nav`
  text-align: center;
  display: flex;
  height: 100%;
  align-items: center;

  ul{
li {
    margin: 0 ;
}
  }
`;

//Menu
export const StyledMenuNav = styled.nav`
  text-align: center;
  display: flex;
  height: 100%;
  align-items: center;
    
`;

export const Mask = styled.span`
  position: absolute;
  height: 50%;
  top: 0;
  left: 0;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  & + & {
    top: 50%;
    span {
      transform: translateY(-50%);
      display: inline-block;
   
    }
  }
`;

export const NavLink = styled(Link)`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  color: transparent;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);

    }

    &:hover, &.active {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skew(12deg) translateX(-5px);
            color: ${theme.colors.font};
            & + ${Mask} {
                transform: skew(12deg) translateX(5px);
            }
        }
    }
    
`;



export const ListItem = styled.li`
  position: relative;
  
`;

export const StyledUl= styled.ul`
 display: flex;
gap:30px;
    justify-content: space-between;
`

export const S={
    StyledDesktop,
    BurgerButton,
    MobileMenuPopup,
    StyledMenu,
    StyledMenuNav,
    NavLink,
    Mask,
    ListItem,
    StyledUl
}