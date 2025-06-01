import styled from "styled-components";

type GridWrapperType = {
    columns?: number | string; // Можно передать число или строку типа "1fr 1fr"
    minWidth?: string; // Минимальная ширина колонки
    gap?: number;
    rowGap?: number;
    columnGap?: number;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    maxWidth?: string;
    padding?: string;
    margin?: string;
    responsive?: {
        sm?: { columns?: number | string; minWidth?: string };
        md?: { columns?: number | string; minWidth?: string };
        lg?: { columns?: number | string; minWidth?: string };
    };
};

export const GridWrapper = styled.div<GridWrapperType>`
  display: grid;
    grid-template-columns: repeat(${props => props.columns || 6}, minmax(${props => props.minWidth || '120px'}, 1fr));
  gap: ${props => props.gap || props.rowGap || 0}px ${props => props.gap || props.columnGap || 0}px;
  justify-items: ${props => props.justifyItems || 'stretch'};
  align-items: ${props => props.alignItems || 'stretch'};
  max-width: ${props => props.maxWidth || '100%'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  width: 100%;

  ${props => props.responsive?.sm && `
    @media (max-width: 576px) {
      grid-template-columns: ${
    typeof props.responsive.sm.columns === 'number'
        ? `repeat(${props.responsive.sm.columns}, minmax(${props.responsive.sm.minWidth || '200px'}, 1fr))`
        : props.responsive.sm.columns || '1fr'
};
    }
  `}

  ${props => props.responsive?.md && `
    @media (max-width: 768px) {
      grid-template-columns: ${
    typeof props.responsive.md.columns === 'number'
        ? `repeat(${props.responsive.md.columns}, minmax(${props.responsive.md.minWidth || '250px'}, 1fr))`
        : props.responsive.md.columns || 'repeat(auto-fill, minmax(250px, 1fr))'
};
    }
  `}

  ${props => props.responsive?.lg && `
    @media (max-width: 1200px) {
      grid-template-columns: ${
    typeof props.responsive.lg.columns === 'number'
        ? `repeat(${props.responsive.lg.columns}, minmax(${props.responsive.lg.minWidth || '300px'}, 1fr))`
        : props.responsive.lg.columns || 'repeat(auto-fill, minmax(300px, 1fr))'
};
    }
  `}
`;