import styled from 'styled-components';
import { fluidValues, respondTo } from '../../styles/helpers';

const StyledEditorWrapper = styled.div`
  max-width: 68.75rem; // 1100px
  margin-inline: auto;
  background-color: var(--bg-color);
  padding: ${fluidValues(280, 1400, 16, 48)};
  border-radius: var(--border-radinpus);
`;

const StyledActionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1.5rem;
  grid-template-areas:
    'language   language'
    'theme      theme'
    'copy       picker'
    'save       download';
  max-width: 68.75rem; // 1100px
  margin-inline: auto;

  .language {
    grid-area: language;
  }
  .theme {
    grid-area: theme;
  }
  .copy {
    grid-area: copy;
  }
  .download {
    grid-area: download;
  }
  .save {
    grid-area: save;
  }
  .picker {
    grid-area: picker;
  }

  ${respondTo.gridIcons`
    grid-template-columns: repeat(2 , 13.5rem) 1fr repeat(4 , auto);
    grid-template-areas:
    'language theme . copy picker save download';
  `}
`;

export { StyledEditorWrapper, StyledActionWrapper };
