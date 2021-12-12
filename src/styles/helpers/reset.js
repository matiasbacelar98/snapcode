import { css } from 'styled-components';

export const reset = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  picture,
  figure,
  blockquote,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  // Define line-height for headings in this project
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: var(--line-height-headings);
  }

  // Define default font-size
  p {
    font-size: var(--fs-text-big);
  }

  /* Remove list styles on ul, ol elements with a list role,
 which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'],
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    line-height: var(--line-height-text);
    font-family: var(--font);
    background-color: var(--clr-bg);
    color: var(--clr-white);
  }

  /* Custom Scrollbar - Only firefox */
  @supports (scrollbar-color: var(--clr-white) var(--clr-bg)) {
    * {
      scrollbar-color: var(--clr-white) var(--clr-bg);
      scrollbar-width: thin;
    }
  }

  /* A elements that don't have a class get default styles */
  a {
    text-decoration: none;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
    height: auto;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people 
  that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
