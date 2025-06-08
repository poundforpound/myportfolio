import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Container} from '../../../components/Container.ts';
import {GridWrapper} from '../../../components/GridWrapper.ts';
import {techList} from '../../../assets/data/Data.ts';
import {Icon} from '../../../components/icon/Icon.tsx';
import { S } from './Tech_Styles.ts';


export const Tech:React.FC = () => {
    return (
        <S.StyledTech>
            <Container>
                <SectionTitle
                    title={'My Tech Stack'}
                    subtitle={' Technologies I’ve been working with recently'}
                />
                <GridWrapper
                    $columns={6}
                    $minWidth={'100px'}
                    $rowGap={80}
                    $justifyItems={'center'}
                    $alignItems={'center'}>
                    {techList.map(({iconName, viewBox}, index) => (
                        <S.IconWrapper key={index}>
                            <Icon iconId={iconName} width={'90'} height={'90'} viewBox={viewBox}/>
                        </S.IconWrapper>
                    ))}
                </GridWrapper>
            </Container>
        </S.StyledTech>
    );
};

