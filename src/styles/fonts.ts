import { css } from 'styled-components'

import {
  AvenirBlack,
  AvenirBook,
  AvenirRoman,
  CysanRegular,
} from '../assets/fonts'

export const MainFontFace = css`
  @font-face {
    font-family: 'Avenir Black';
    src: url('${AvenirBlack}') format('opentype');
  }

  @font-face {
    font-family: 'Avenir Book';
    src: url('${AvenirBook}') format('opentype');
  }

  @font-face {
    font-family: 'Avenir Roman';
    src: url('${AvenirRoman}') format('opentype');
  }

  @font-face {
    font-family: 'Cysan';
    src: url('${CysanRegular}') format('truetype');
  }
`
