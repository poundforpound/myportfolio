import React from 'react';
import { Icon } from '../icon/Icon.tsx';
import {animateScroll as scroll} from "react-scroll";

export const Logo:React.FC = () => {
  return (
    <a onClick={()=>{scroll.scrollToTop()}}>
      <Icon iconId={'finger'} width={'50'} height={'50'} viewBox="0 0 256 369" fill="#7572D5" />
    </a>
  );
};
