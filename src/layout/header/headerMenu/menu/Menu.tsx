import React from 'react';
import {menuHeaderList} from "../../../../assets/data/Data.ts";

import {S} from "../HeaderMenu_Styles.ts";

export const Menu:React.FC = () => {
    return (
        <S.StyledMenuNav>
            <S.StyledUl>
                {menuHeaderList.map((item, i) => (
                    <S.ListItem key={i}>
                        <S.Link href={item.href}>
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                ))}
            </S.StyledUl>
        </S.StyledMenuNav>

    );
};

