import { createGlobalStyle } from 'styled-components';
import {
  reset,
  variables,
  mulishAndFiracodeFonts,
  utilityClasses,
  thirdPartyStyles,
} from './helpers';

const GlobalStyles = createGlobalStyle`
${reset}
${variables};
${mulishAndFiracodeFonts}; 
${utilityClasses}
${thirdPartyStyles}
`;

export default GlobalStyles;
