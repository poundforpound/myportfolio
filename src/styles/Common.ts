import {theme} from "./Themes.styles.ts";

type FontPropsType={
    family?:string,
    weight?:number,
    color?:string,
    lineHeight?:number,
    Fmax?:number,
    Fmin?:number
}

export const font=({family,weight,color,lineHeight,Fmin,Fmax}:FontPropsType)=>`

    font-family:${family || "Poppins"};
    font-weight: ${weight || "normal"};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 16}px;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );   
`
