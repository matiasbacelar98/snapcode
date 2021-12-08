import { css } from 'styled-components';

// Styles required by external libraries
export const thirdPartyStyles = css`
  // Code Mirror
  .CodeMirror {
    font-family: var(--font-editor);
    height: auto;
  }

  .CodeMirror-lines {
    padding: 1.875rem 0 1.875rem 0.9375rem;
  }

  .react-codemirror2 {
    font-size: 1.1rem;
    max-width: 62.5rem; // 1000px
    margin-inline: auto;
  }

  .react-codemirror2:hover {
    cursor: text;
  }

  // React Colorful
  .picker-wrapper .react-colorful {
    width: 12.5rem; // 200px
    height: 12.5rem;
    position: absolute;
    top: 100%;
    right: -2%;
  }

  .picker-wrapper .react-colorful__hue {
    height: 1.25rem; // 20px
  }

  .picker-wrapper .react-colorful__interactive:hover {
    cursor: pointer;
  }

  .picker-wrapper .react-colorful__interactive:hover .react-colorful__pointer {
    cursor: grab;
  }

  .picker-wrapper .react-colorful__interactive:focus .react-colorful__pointer {
    cursor: grabbing;
  }
`;
