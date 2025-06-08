import React from 'react';

import {SocialGroup} from "../../../../components/socialGroup/SocialGroup.tsx";
import {Menu} from "../menu/Menu.tsx";
import { S } from '../HeaderMenu_Styles.ts';


export const DesktopMenu:React.FC = () => {
    return (
        <S.StyledDesktop>
            <Menu/>
            <SocialGroup/>
        </S.StyledDesktop>
    );
};

