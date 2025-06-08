import styled from 'styled-components';

type GridWrapperType = {
  $columns?: number | string; // Можно передать число или строку типа "1fr 1fr"
  $minWidth?: string; // Минимальная ширина колонки
  $gap?: number;
  $rowGap?: number;
  $columnGap?: number;
  $justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  $alignItems?: 'start' | 'end' | 'center' | 'stretch';
  $maxWidth?: string;
  $padding?: string;
  $margin?: string;
};

export const GridWrapper = styled.div<GridWrapperType>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.$columns || 6},
    minmax(${(props) => props.$minWidth || '120px'}, 1fr)
  );
  gap: ${(props) => props.$gap || props.$rowGap || 0}px
    ${(props) => props.$gap || props.$columnGap || 0}px;
  justify-items: ${(props) => props.$justifyItems || 'stretch'};
  align-items: ${(props) => props.$alignItems || 'stretch'};
  max-width: ${(props) => props.$maxWidth || '100%'};
  padding: ${(props) => props.$padding || '0'};
  margin: ${(props) => props.$margin || '0'};
  width: 100%;
`

