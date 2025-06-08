import React from 'react';
import {Menu} from "../menu/Menu.tsx";
import { S } from '../HeaderMenu_Styles.ts';

export const MobileMenu:React.FC = () => {
  return (
    <S.StyledMenu>
        <S.BurgerButton isOpen={false}>
            <span></span>
        </S.BurgerButton>
        <S.MobileMenuPopup isOpen={true}>
        <Menu/>
        </S.MobileMenuPopup>
    </S.StyledMenu>
  );
};


