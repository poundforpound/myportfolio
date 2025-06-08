import React, {useState} from 'react';
import {Menu} from "../menu/Menu.tsx";
import { S } from '../HeaderMenu_Styles.ts';

export const MobileMenu:React.FC = () => {
    const[menuIsOpen,setMenuIsOpen] = useState(false);


  return (
    <S.StyledMenu>
        <S.BurgerButton isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <span></span>
        </S.BurgerButton>
        <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>setMenuIsOpen(false)}>
        <Menu/>
        </S.MobileMenuPopup>
    </S.StyledMenu>
  );
};


