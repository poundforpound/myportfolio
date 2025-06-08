import React, {useEffect, useState} from 'react';
import { Logo } from '../../components/logo/Logo.tsx';
import { Container } from '../../components/Container.ts';
import { FlexWrapper } from '../../components/FlexWrapper.ts';
import { S } from './Header_Styles.ts';
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";




export const Header: React.FC = () => {
const [currentWidth,setCurrentWidth] = useState(window.innerWidth);
const breakpoint = 768;
    useEffect(() => {
        const handleWindowResize =()=>  setCurrentWidth(window.innerWidth);
        window.addEventListener('resize',handleWindowResize);
        return()=> window.removeEventListener('resize',handleWindowResize);

    }, []);
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={'space-between'}>
          <Logo />
            {currentWidth>breakpoint
                ?<DesktopMenu/>
                :<MobileMenu/>
            }
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};




