import { css } from 'styled-components';
import { fluidValues } from './functions';

export const variables = css`
  :root {
    // Fonts
    --font: 'Mulish', sans-serif;
    --font-editor: 'Fira Code', monospace;
    --fs-1: ${fluidValues(280, 1400, 40, 96)};
    --fs-2: ${fluidValues(280, 1400, 32, 48)};
    --fs-text-big: ${fluidValues(280, 1400, 16, 20)};
    --fs-mobile-links: ${fluidValues(280, 600, 32, 40)};
    --fs-text: 1rem;
    --line-height-text: 1.5;
    --line-height-headings: 1.2;
    --link-transition: color 0.3s ease;
    --btn-transition: background-color 0.1s ease-in;

    // Spacing
    --spacing-1: ${fluidValues(280, 1400, 40, 72)};
    --spacing-2: ${fluidValues(280, 1400, 24, 40)};
    --spacing-3: ${fluidValues(280, 1400, 16, 24)}

    // Colors
    --clr-primary-500: hsl(0, 88%, 70%);
    --clr-bg: hsl(219, 30%, 11%);
    --clr-white: hsl(0, 0%, 100%);
    --clr-danger-400: hsl(5, 99%, 43%);
    --clr-success-400: hsl(95, 66%, 34%);
    --clr-black-opacity: hsla(0, 0%, 0%, 90%);
    --clr-white-opacity: hsla(0, 0%, 100%, 10%);

    // Others
    --border-radius: 0.1875rem;
  }
`;
