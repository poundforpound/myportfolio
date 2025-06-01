import styled from "styled-components";

type FlexWrapperType={
    direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse' | 'column-reverse'
    justify?: 'space-between' | 'space-around' | 'space-evenly' | 'space-around'
    align?: 'left' | 'center' | 'stretch'
    wrap?: 'wrap' | 'wrap-reverse' | 'wrap-evenly' | 'nowrap' | 'nowrap-reverse' | 'wrap-reverse'
    gap?: number
    height?:number
}

export const FlexWrapper= styled.div<FlexWrapperType>`
    display: flex;
    height: ${props => props.height || "auto"}%;
    flex-direction: ${props=>props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || 0}px;
`

