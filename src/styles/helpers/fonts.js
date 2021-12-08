import { css } from 'styled-components';

import MulishRegular from '../../assets/fonts/Mulish-Regular.ttf';
import MulishSemibold from '../../assets/fonts/Mulish-SemiBold.ttf';
import MulishBold from '../../assets/fonts/Mulish-Bold.ttf';
import FiracodeRegular from '../../assets/fonts/FiraCode-Regular.ttf';

export const mulishAndFiracodeFonts = css`
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Mulish Regular'), url(${MulishRegular});
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Mulish SemiBold'), url(${MulishSemibold});
  }

  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Mulish Bold'), url(${MulishBold});
  }

  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Fira Code Regular'), url(${FiracodeRegular});
  }
`;
