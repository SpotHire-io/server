import { css, injectGlobal } from 'emotion'

export const animateAll = css`transition: all 0.15s ease-in;`

export const inputReset = css`
  -webkit-appearance: none;
  -moz-appearance: none;
`

export const animationImageCheckboxEnter = css`
  &,
  & .Checkbox_box {
    position: absolute;
    left: 0;
    top: 0;
    transform: scale(0) !important;
  }
`

export const animationImageCheckboxEnterActive = css`
  &,
  & .Checkbox_box {
    transform: scale(1) !important;
    transition: transform 150ms ease-in !important;
  }
`

export const animationImageCheckboxLeave = css`
  &,
  & .Checkbox_box {
    position: absolute;
    left: 0;
    top: 0;

    transform: scale(1) !important;
  }
`

export const animationImageCheckboxLeaveActive = css`
  &,
  & .Checkbox_box {
    transform: scale(0) !important;
    transition: transform 150ms ease-in !important;
  }
`

injectGlobal`
@define-placeholder input-box {
    font-size: 1rem;
    line-height: 1.4;
    padding: 0.5rem;
    color: #333333;
    border-radius: 0;
    border: 1px solid #cccccc;
}
input, textarea {
    @extend ff-app-sans;
    @extend input-box;
}
/**
    BUTTONS
 */
button {
    border: 0;
    font-family: 'Source Sans Pro', 'Avenir Next', 'Avenir', -system-sans-serif, sans-serif;
    padding: 0.5em 1em;
    border-radius: 2px;
    transition: background-color 0.15s;
    position: relative;
}
button:hover {
    cursor: pointer;
}
button:active {
    top: 1px;
}
/*
    Teal
 */
@define-placeholder ff-app-sans {
    font-family: 'Source Sans Pro', 'Avenir Next', 'Avenir', -system-sans-serif, sans-serif;
}
body {
    @extend ff-app-sans;
}
/**
    RESETS/BASE
 */
body {
    margin: 0;
}
p {
    margin-bottom: 0;
    line-height: 1.4;
}
p:first-child {
    margin-top: 0;
}
ul li, ol li {
    margin-top: 0.25rem;
    line-height: 1.4;
}
ol {
    padding-left: 2.25rem;
}
ol li {
    padding-left: .25rem;
}
`
export const animateShadow = css`transition: box-shadow 0.15s;`
export const animationShiftTabEnter = css`
  &,
  & + li.shift-tab--new-shift {
    transform: translateY(-100%);
    z-index: 0;
  }
`
export const animationShiftTabEnterActive = css`
  &,
  & + li.shift-tab--new-shift {
    transform: translateX(0);
    transition: transform 100ms ease-in;
    z-index: 0;
  }
`
export const appSans = css`@extend ff-app-sans;`
export const appSerif = css`font-family: Georgia, serif;`
export const bTeal = css`border-color: #5ab6b2;`
export const bgTeal = css`background-color: #5ab6b2;`
export const button = css`
  border: 0;
  font-family: 'Source Sans Pro', 'Avenir Next', 'Avenir', -system-sans-serif,
    sans-serif;
  padding: 0.5em 1em;
  border-radius: 2px;
  transition: background-color 0.15s;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:active {
    top: 1px;
  }
`
export const buttonIconMinus = css`
  &:before {
    content: '–';
  }
`
export const buttonIconPlus = css`
  &:before {
    content: '+';
  }
`
export const buttonLeft = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
export const buttonMiddle = css`
  border-radius: 0;
  border-left-width: 0;
  border-right-width: 0;
`
export const buttonNegative = css`
  background: rgb(231, 4, 15);
  color: #ffffff;
  &:hover {
    background: rgb(221, 0, 5);
  }
`
export const buttonNeutral = css`
  background: #777777;
  color: #ffffff;
  &:hover {
    background: rgb(111, 111, 111);
  }
`
export const buttonStandard = css`
  background: rgb(84, 119, 166);
  color: #ffffff;
  &:hover {
    background: rgb(76, 111, 158);
  }
`
export const buttonOutline = css`
  border: 1px solid;
  &.${buttonStandard} {
    border-color: rgb(84, 119, 166);
    background: transparent;
    color: #333333;
  }
  &.${buttonStandard}:hover {
    background: rgb(84, 119, 166);
    color: #ffffff;
  }
  &.${buttonNeutral} {
    border-color: #777777;
    background: transparent;
    color: #333333;
  }
  &.${buttonNeutral}:hover {
    background: #777777;
    color: #ffffff;
  }
`
export const buttonPositive = css`
  background: rgb(19, 119, 82);
  color: #ffffff;
  &:hover {
    background: rgb(11, 111, 74);
  }
`
export const buttonRight = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
export const buttonWithIcon = css`
  padding-left: 3em;
  &:before {
    border-right: 1px dotted #fffdf0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1em;
    padding: 0.5em;
    font-weight: 700;
  }
`
export const dateInput = css`
  @extend input-box;
  border: 0;
`
export const dateInputDisplayText = css`padding: 0;`
export const dateInputDisplayTextHasInput = css`color: #333333;`
export const dayPicker = css`@extend ff-app-sans;`
export const dayPickerWeekHeader = css`
  margin-top: -0.85rem; /* fix overlap with calendar items */
`
export const h6 = css`height: 32rem;`
export const hoverBTeal = css`
  &:hover,
  &:focus {
    border-color: #5ab6b2;
  }
`
export const hoverBWhite40 = css`
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
`
export const hoverBgTeal = css`
  &:hover,
  &:focus {
    background-color: #5ab6b2;
  }
`
export const hoverBl = css`
  &:hover {
    border-left-style: solid;
  }
`
export const hoverBr = css`
  &:hover {
    border-right-style: solid;
  }
`
export const hoverNoUnderline = css`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`
export const hoverTeal = css`
  &:hover,
  &:focus {
    color: #5ab6b2;
  }
`
export const maxH1 = css`max-height: 1rem;`
export const maxH2 = css`max-height: 2rem;`
export const maxH3 = css`max-height: 4rem;`
export const maxH4 = css`max-height: 8rem;`
export const maxH5 = css`max-height: 16rem;`
export const maxH6 = css`max-height: 32rem;`
export const maxH7 = css`max-height: 48rem;`
export const maxH8 = css`max-height: 64rem;`
export const maxH9 = css`max-height: 96rem;`
export const noSelect = css`user-select: none;`
export const rbcAgendaContent = css`
  overflow: auto;
  & > table {
    border-collapse: collapse;
  }
`
export const rbcAgendaView = css`
  overflow: hidden;
  & > table {
    border-collapse: collapse;
  }
  & .rbc-agenda-date-cell,
  & .rbc-agenda-time-cell,
  & .rbc-agenda-event-cell,
  & .rbc-header {
    padding: 0.5rem 1rem;
  }
  & .rbc-agenda-event-cell {
    border-left-style: dotted;
    border-left-color: rgba(0, 0, 0, 0.05);
  }
`
export const rbcEvent = css`
  background-color: #5ab6b2;
  border-radius: 0.125rem;
`
export const rbcAltBg = css`
  & .${rbcEvent} {
    z-index: 1;
    background-color: #777777;
  }
`
export const rbcDaySlot = css`
  & .${rbcEvent} {
    border-color: rgba(0, 0, 0, 0.2);
  }
`
export const rcTimePicker = css`width: 100%;`
export const rcTimePickerInput = css`
  height: auto;
  @extend ff-app-sans;
  @extend input-box;
`
export const rcTimePickerPanelInner = css`
  @extend ff-app-sans;
  @extend input-box;
  padding: 0;
  margin-top: 2px;
`
export const rcTimePickerPanelInput = css`
  @extend ff-app-sans;
  border-width: 0;
`
export const rcTimePickerPanelInputWrap = css`padding: 0.5rem;`
export const rcTimePickerPanelSelect = css`
  font-size: 0.875rem;
  & li {
    padding-left: 0.75rem;
  }
`
export const reactableHeaderSortAsc = css`
  th&:after {
    position: relative;
    top: -1px;
    left: 7px;
  }
  th&:after {
    content: '\\25BC';
    font-size: 9px; /* Looks larger than the other, so bump the font-size a px */
  }
`
export const reactableHeaderSortDesc = css`
  th&:after {
    position: relative;
    top: -1px;
    left: 7px;
  }
  th&:after {
    content: '\\25B2';
    font-size: 10px;
  }
`
export const reactModalBodyOpen = css`overflow: hidden;`
export const reactModalPortal = css`
  & > div {
    opacity: 0;
  }
  & .ReactModal__Overlay {
    transition: opacity 100ms ease-in-out;
    background: rgba(0, 0, 0, 0.15);
  }
  & .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  & .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`
export const shInsetShadow1 = css`
  box-shadow: inset 0px 0px 20px 2px rgba(0, 0, 0, 0.2);
`
export const shModal = css`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  background: rgb(255, 255, 255);
  padding: 1rem;
  position: absolute;
  top: 4rem;
  left: 25%;
  right: 25%;
  overflow: auto;
  outline: none;
  max-height: 75vh;
`
export const shModalFull = css`
  left: 4rem;
  right: 4rem;
  bottom: 4rem;
  max-height: 100%;
`
export const shModalOverlay = css`
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`
export const shRebassCheckboxMr0 = css`
  & .Checkbox_box {
    margin-right: 0 !important;
  }
`
export const shRebassSwitchSmall = css`
  & .Switch {
    height: 16px !important;
    width: 24px !important;
  }
  & .Switch > div {
    height: 16px !important;
    width: 16px !important;
  }
  &.sh-rebass-switch-small--checked .Switch > div {
    transform: translateX(8px) !important;
  }
`
export const shShadow1 = css`box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 0.2);`
export const shShadow2 = css`box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.2);`
export const singleDatePicker = css`width: 100%;`
export const singleDatePickerPickerPortal = css`
  z-index: 11; /* above react-modal */
`
export const singleDatePickerInput = css`border-color: #cccccc;`
export const tableLayoutFixed = css`table-layout: fixed;`
export const teal = css`color: #5ab6b2;`
export const transparent = css`color: transparent;`
export const w15 = css`width: 15%;`

export const absolute = css`position: absolute;`
export const absoluteFill = css`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const absoluteFillL = css`
  @media screen and (min-width: 60em) {
    & {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`
export const absoluteFillM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`
export const absoluteFillNs = css`
  @media screen and (min-width: 30em) {
    & {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`
export const absoluteL = css`
  @media screen and (min-width: 60em) {
    & {
      position: absolute;
    }
  }
`
export const absoluteM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      position: absolute;
    }
  }
`
export const absoluteNs = css`
  @media screen and (min-width: 30em) {
    & {
      position: absolute;
    }
  }
`
export const aspectRatio = css`
  height: 0;
  position: relative;
`
export const aspectRatio1x1 = css`padding-bottom: 100%;`
export const aspectRatio1x1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 100%;
    }
  }
`
export const aspectRatio1x1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 100%;
    }
  }
`
export const aspectRatio1x1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 100%;
    }
  }
`
export const aspectRatio3x4 = css`padding-bottom: 133.33%;`
export const aspectRatio3x4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 133.33%;
    }
  }
`
export const aspectRatio3x4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 133.33%;
    }
  }
`
export const aspectRatio3x4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 133.33%;
    }
  }
`
export const aspectRatio4x3 = css`padding-bottom: 75%;`
export const aspectRatio4x3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 75%;
    }
  }
`
export const aspectRatio4x3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 75%;
    }
  }
`
export const aspectRatio4x3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 75%;
    }
  }
`
export const aspectRatio4x6 = css`padding-bottom: 150%;`
export const aspectRatio4x6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 150%;
    }
  }
`
export const aspectRatio4x6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 150%;
    }
  }
`
export const aspectRatio4x6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 150%;
    }
  }
`
export const aspectRatio5x7 = css`padding-bottom: 140%;`
export const aspectRatio5x7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 140%;
    }
  }
`
export const aspectRatio5x7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 140%;
    }
  }
`
export const aspectRatio5x7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 140%;
    }
  }
`
export const aspectRatio5x8 = css`padding-bottom: 160%;`
export const aspectRatio5x8L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 160%;
    }
  }
`
export const aspectRatio5x8M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 160%;
    }
  }
`
export const aspectRatio5x8Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 160%;
    }
  }
`
export const aspectRatio6x4 = css`padding-bottom: 66.6%;`
export const aspectRatio6x4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 66.6%;
    }
  }
`
export const aspectRatio6x4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 66.6%;
    }
  }
`
export const aspectRatio6x4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 66.6%;
    }
  }
`
export const aspectRatio7x5 = css`padding-bottom: 71.42%;`
export const aspectRatio7x5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 71.42%;
    }
  }
`
export const aspectRatio7x5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 71.42%;
    }
  }
`
export const aspectRatio7x5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 71.42%;
    }
  }
`
export const aspectRatio8x5 = css`padding-bottom: 62.5%;`
export const aspectRatio8x5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 62.5%;
    }
  }
`
export const aspectRatio8x5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 62.5%;
    }
  }
`
export const aspectRatio8x5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 62.5%;
    }
  }
`
export const aspectRatio9x16 = css`padding-bottom: 177.77%;`
export const aspectRatio9x16L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 177.77%;
    }
  }
`
export const aspectRatio9x16M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 177.77%;
    }
  }
`
export const aspectRatio9x16Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 177.77%;
    }
  }
`
export const aspectRatio16x9 = css`padding-bottom: 56.25%;`
export const aspectRatio16x9L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 56.25%;
    }
  }
`
export const aspectRatio16x9M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 56.25%;
    }
  }
`
export const aspectRatio16x9Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 56.25%;
    }
  }
`
export const aspectRatioObject = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`
export const aspectRatioObjectL = css`
  @media screen and (min-width: 60em) {
    & {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
  }
`
export const aspectRatioObjectM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
  }
`
export const aspectRatioObjectNs = css`
  @media screen and (min-width: 30em) {
    & {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
  }
`
export const aspectRatioL = css`
  @media screen and (min-width: 60em) {
    & {
      height: 0;
      position: relative;
    }
  }
`
export const aspectRatioM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 0;
      position: relative;
    }
  }
`
export const aspectRatioNs = css`
  @media screen and (min-width: 30em) {
    & {
      height: 0;
      position: relative;
    }
  }
`
export const athelas = css`font-family: athelas, georgia, serif;`
export const avenir = css`font-family: 'avenir next', avenir, sans-serif;`
export const b = css`font-weight: bold;`
export const bBlack = css`border-color: #000;`
export const bBlack05 = css`border-color: rgba(0, 0, 0, 0.05);`
export const bBlack10 = css`border-color: rgba(0, 0, 0, 0.1);`
export const bBlack20 = css`border-color: rgba(0, 0, 0, 0.2);`
export const bBlack025 = css`border-color: rgba(0, 0, 0, 0.025);`
export const bBlack30 = css`border-color: rgba(0, 0, 0, 0.3);`
export const bBlack40 = css`border-color: rgba(0, 0, 0, 0.4);`
export const bBlack50 = css`border-color: rgba(0, 0, 0, 0.5);`
export const bBlack60 = css`border-color: rgba(0, 0, 0, 0.6);`
export const bBlack70 = css`border-color: rgba(0, 0, 0, 0.7);`
export const bBlack80 = css`border-color: rgba(0, 0, 0, 0.8);`
export const bBlack90 = css`border-color: rgba(0, 0, 0, 0.9);`
export const bBlack0125 = css`border-color: rgba(0, 0, 0, 0.0125);`
export const bBlue = css`border-color: #357edd;`
export const bDarkBlue = css`border-color: #00449e;`
export const bDarkGray = css`border-color: #333;`
export const bDarkGreen = css`border-color: #137752;`
export const bDarkPink = css`border-color: #d5008f;`
export const bDarkRed = css`border-color: #e7040f;`
export const bDashed = css`border-style: dashed;`
export const bDashedL = css`
  @media screen and (min-width: 60em) {
    & {
      border-style: dashed;
    }
  }
`
export const bDashedM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-style: dashed;
    }
  }
`
export const bDashedNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-style: dashed;
    }
  }
`
export const bDotted = css`border-style: dotted;`
export const bDottedL = css`
  @media screen and (min-width: 60em) {
    & {
      border-style: dotted;
    }
  }
`
export const bDottedM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-style: dotted;
    }
  }
`
export const bDottedNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-style: dotted;
    }
  }
`
export const bGold = css`border-color: #ffb700;`
export const bGray = css`border-color: #777;`
export const bGreen = css`border-color: #19a974;`
export const bHotPink = css`border-color: #ff41b4;`
export const bInherit = css`border-color: inherit;`
export const bLightBlue = css`border-color: #96ccff;`
export const bLightGray = css`border-color: #eee;`
export const bLightGreen = css`border-color: #9eebcf;`
export const bLightPink = css`border-color: #ffa3d7;`
export const bLightPurple = css`border-color: #a463f2;`
export const bLightRed = css`border-color: #ff725c;`
export const bLightSilver = css`border-color: #aaa;`
export const bLightYellow = css`border-color: #fbf1a9;`
export const bLightestBlue = css`border-color: #cdecff;`
export const bMidGray = css`border-color: #555;`
export const bMoonGray = css`border-color: #ccc;`
export const bNavy = css`border-color: #001b44;`
export const bNearBlack = css`border-color: #111;`
export const bNearWhite = css`border-color: #f4f4f4;`
export const bNone = css`border-style: none;`
export const bNoneL = css`
  @media screen and (min-width: 60em) {
    & {
      border-style: none;
    }
  }
`
export const bNoneM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-style: none;
    }
  }
`
export const bNoneNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-style: none;
    }
  }
`
export const bOrange = css`border-color: #ff6300;`
export const bPink = css`border-color: #ff80cc;`
export const bPurple = css`border-color: #5e2ca5;`
export const bRed = css`border-color: #ff4136;`
export const bSilver = css`border-color: #999;`
export const bSolid = css`border-style: solid;`
export const bSolidL = css`
  @media screen and (min-width: 60em) {
    & {
      border-style: solid;
    }
  }
`
export const bSolidM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-style: solid;
    }
  }
`
export const bSolidNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-style: solid;
    }
  }
`
export const bTransparent = css`border-color: transparent;`
export const bWashedBlue = css`border-color: #f6fffe;`
export const bWashedGreen = css`border-color: #e8fdf5;`
export const bWashedRed = css`border-color: #ffdfdf;`
export const bWashedYellow = css`border-color: #fffceb;`
export const bWhite = css`border-color: #fff;`
export const bWhite05 = css`border-color: rgba(255, 255, 255, 0.05);`
export const bWhite10 = css`border-color: rgba(255, 255, 255, 0.1);`
export const bWhite20 = css`border-color: rgba(255, 255, 255, 0.2);`
export const bWhite025 = css`border-color: rgba(255, 255, 255, 0.025);`
export const bWhite30 = css`border-color: rgba(255, 255, 255, 0.3);`
export const bWhite40 = css`border-color: rgba(255, 255, 255, 0.4);`
export const bWhite50 = css`border-color: rgba(255, 255, 255, 0.5);`
export const bWhite60 = css`border-color: rgba(255, 255, 255, 0.6);`
export const bWhite70 = css`border-color: rgba(255, 255, 255, 0.7);`
export const bWhite80 = css`border-color: rgba(255, 255, 255, 0.8);`
export const bWhite90 = css`border-color: rgba(255, 255, 255, 0.9);`
export const bWhite0125 = css`border-color: rgba(255, 255, 255, 0.0125);`
export const bYellow = css`border-color: #ffd700;`
export const bL = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: bold;
    }
  }
`
export const bM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: bold;
    }
  }
`
export const bNs = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: bold;
    }
  }
`
export const ba = css`
  border-style: solid;
  border-width: 1px;
`
export const baL = css`
  @media screen and (min-width: 60em) {
    & {
      border-style: solid;
      border-width: 1px;
    }
  }
`
export const baM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-style: solid;
      border-width: 1px;
    }
  }
`
export const baNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-style: solid;
      border-width: 1px;
    }
  }
`
export const baskerville = css`font-family: baskerville, serif;`
export const bb = css`
  border-bottom-style: solid;
  border-bottom-width: 1px;
`
export const bb0 = css`border-bottom-width: 0;`
export const bb0L = css`
  @media screen and (min-width: 60em) {
    & {
      border-bottom-width: 0;
    }
  }
`
export const bb0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-bottom-width: 0;
    }
  }
`
export const bb0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-bottom-width: 0;
    }
  }
`
export const bbL = css`
  @media screen and (min-width: 60em) {
    & {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }
  }
`
export const bbM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }
  }
`
export const bbNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }
  }
`
export const bgAnimate = css`
  &,
  &:hover,
  &:focus {
    transition: background-color 0.15s ease-in-out;
  }
`
export const bgBlack = css`background-color: #000;`
export const bgBlack05 = css`background-color: rgba(0, 0, 0, 0.05);`
export const bgBlack10 = css`background-color: rgba(0, 0, 0, 0.1);`
export const bgBlack20 = css`background-color: rgba(0, 0, 0, 0.2);`
export const bgBlack30 = css`background-color: rgba(0, 0, 0, 0.3);`
export const bgBlack40 = css`background-color: rgba(0, 0, 0, 0.4);`
export const bgBlack50 = css`background-color: rgba(0, 0, 0, 0.5);`
export const bgBlack60 = css`background-color: rgba(0, 0, 0, 0.6);`
export const bgBlack70 = css`background-color: rgba(0, 0, 0, 0.7);`
export const bgBlack80 = css`background-color: rgba(0, 0, 0, 0.8);`
export const bgBlack90 = css`background-color: rgba(0, 0, 0, 0.9);`
export const bgBlue = css`background-color: #357edd;`
export const bgBottom = css`
  background-repeat: no-repeat;
  background-position: bottom center;
`
export const bgBottomL = css`
  @media screen and (min-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: bottom center;
    }
  }
`
export const bgBottomM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: bottom center;
    }
  }
`
export const bgBottomNs = css`
  @media screen and (min-width: 30em) {
    & {
      background-repeat: no-repeat;
      background-position: bottom center;
    }
  }
`
export const bgCenter = css`
  background-repeat: no-repeat;
  background-position: center center;
`
export const bgCenterL = css`
  @media screen and (min-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`
export const bgCenterM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`
export const bgCenterNs = css`
  @media screen and (min-width: 30em) {
    & {
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`
export const bgDarkBlue = css`background-color: #00449e;`
export const bgDarkGray = css`background-color: #333;`
export const bgDarkGreen = css`background-color: #137752;`
export const bgDarkPink = css`background-color: #d5008f;`
export const bgDarkRed = css`background-color: #e7040f;`
export const bgGold = css`background-color: #ffb700;`
export const bgGray = css`background-color: #777;`
export const bgGreen = css`background-color: #19a974;`
export const bgHotPink = css`background-color: #ff41b4;`
export const bgInherit = css`background-color: inherit;`
export const bgLeft = css`
  background-repeat: no-repeat;
  background-position: center left;
`
export const bgLeftL = css`
  @media screen and (min-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: center left;
    }
  }
`
export const bgLeftM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: center left;
    }
  }
`
export const bgLeftNs = css`
  @media screen and (min-width: 30em) {
    & {
      background-repeat: no-repeat;
      background-position: center left;
    }
  }
`
export const bgLightBlue = css`background-color: #96ccff;`
export const bgLightGray = css`background-color: #eee;`
export const bgLightGreen = css`background-color: #9eebcf;`
export const bgLightPink = css`background-color: #ffa3d7;`
export const bgLightPurple = css`background-color: #a463f2;`
export const bgLightRed = css`background-color: #ff725c;`
export const bgLightSilver = css`background-color: #aaa;`
export const bgLightYellow = css`background-color: #fbf1a9;`
export const bgLightestBlue = css`background-color: #cdecff;`
export const bgMidGray = css`background-color: #555;`
export const bgMoonGray = css`background-color: #ccc;`
export const bgNavy = css`background-color: #001b44;`
export const bgNearBlack = css`background-color: #111;`
export const bgNearWhite = css`background-color: #f4f4f4;`
export const bgOrange = css`background-color: #ff6300;`
export const bgPink = css`background-color: #ff80cc;`
export const bgPurple = css`background-color: #5e2ca5;`
export const bgRed = css`background-color: #ff4136;`
export const bgRight = css`
  background-repeat: no-repeat;
  background-position: center right;
`
export const bgRightL = css`
  @media screen and (min-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: center right;
    }
  }
`
export const bgRightM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: center right;
    }
  }
`
export const bgRightNs = css`
  @media screen and (min-width: 30em) {
    & {
      background-repeat: no-repeat;
      background-position: center right;
    }
  }
`
export const bgSilver = css`background-color: #999;`
export const bgTop = css`
  background-repeat: no-repeat;
  background-position: top center;
`
export const bgTopL = css`
  @media screen and (min-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: top center;
    }
  }
`
export const bgTopM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      background-repeat: no-repeat;
      background-position: top center;
    }
  }
`
export const bgTopNs = css`
  @media screen and (min-width: 30em) {
    & {
      background-repeat: no-repeat;
      background-position: top center;
    }
  }
`
export const bgTransparent = css`background-color: transparent;`
export const bgWashedBlue = css`background-color: #f6fffe;`
export const bgWashedGreen = css`background-color: #e8fdf5;`
export const bgWashedRed = css`background-color: #ffdfdf;`
export const bgWashedYellow = css`background-color: #fffceb;`
export const bgWhite = css`background-color: #fff;`
export const bgWhite10 = css`background-color: rgba(255, 255, 255, 0.1);`
export const bgWhite20 = css`background-color: rgba(255, 255, 255, 0.2);`
export const bgWhite30 = css`background-color: rgba(255, 255, 255, 0.3);`
export const bgWhite40 = css`background-color: rgba(255, 255, 255, 0.4);`
export const bgWhite50 = css`background-color: rgba(255, 255, 255, 0.5);`
export const bgWhite60 = css`background-color: rgba(255, 255, 255, 0.6);`
export const bgWhite70 = css`background-color: rgba(255, 255, 255, 0.7);`
export const bgWhite80 = css`background-color: rgba(255, 255, 255, 0.8);`
export const bgWhite90 = css`background-color: rgba(255, 255, 255, 0.9);`
export const bgYellow = css`background-color: #ffd700;`
export const bl = css`
  border-left-style: solid;
  border-left-width: 1px;
`
export const bl0 = css`border-left-width: 0;`
export const bl0L = css`
  @media screen and (min-width: 60em) {
    & {
      border-left-width: 0;
    }
  }
`
export const bl0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-left-width: 0;
    }
  }
`
export const bl0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-left-width: 0;
    }
  }
`
export const blL = css`
  @media screen and (min-width: 60em) {
    & {
      border-left-style: solid;
      border-left-width: 1px;
    }
  }
`
export const blM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-left-style: solid;
      border-left-width: 1px;
    }
  }
`
export const blNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-left-style: solid;
      border-left-width: 1px;
    }
  }
`
export const black = css`color: #000;`
export const black05 = css`color: rgba(0, 0, 0, 0.05);`
export const black10 = css`color: rgba(0, 0, 0, 0.1);`
export const black20 = css`color: rgba(0, 0, 0, 0.2);`
export const black30 = css`color: rgba(0, 0, 0, 0.3);`
export const black40 = css`color: rgba(0, 0, 0, 0.4);`
export const black50 = css`color: rgba(0, 0, 0, 0.5);`
export const black60 = css`color: rgba(0, 0, 0, 0.6);`
export const black70 = css`color: rgba(0, 0, 0, 0.7);`
export const black80 = css`color: rgba(0, 0, 0, 0.8);`
export const black90 = css`color: rgba(0, 0, 0, 0.9);`
export const blue = css`color: #357edd;`
export const bn = css`
  border-style: none;
  border-width: 0;
`
export const bnL = css`
  @media screen and (min-width: 60em) {
    & {
      border-style: none;
      border-width: 0;
    }
  }
`
export const bnM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-style: none;
      border-width: 0;
    }
  }
`
export const bnNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-style: none;
      border-width: 0;
    }
  }
`
export const bodoni = css`font-family: 'Bodoni MT', serif;`
export const borderBox = css`box-sizing: border-box;`
export const bottom1 = css`bottom: -1rem;`
export const bottom1L = css`
  @media screen and (min-width: 60em) {
    & {
      bottom: -1rem;
    }
  }
`
export const bottom1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      bottom: -1rem;
    }
  }
`
export const bottom1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      bottom: -1rem;
    }
  }
`
export const bottom2 = css`bottom: -2rem;`
export const bottom2L = css`
  @media screen and (min-width: 60em) {
    & {
      bottom: -2rem;
    }
  }
`
export const bottom2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      bottom: -2rem;
    }
  }
`
export const bottom2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      bottom: -2rem;
    }
  }
`
export const bottom0 = css`bottom: 0;`
export const bottom0L = css`
  @media screen and (min-width: 60em) {
    & {
      bottom: 0;
    }
  }
`
export const bottom0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      bottom: 0;
    }
  }
`
export const bottom0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      bottom: 0;
    }
  }
`
export const br = css`
  border-right-style: solid;
  border-right-width: 1px;
`
export const brBottom = css`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`
export const brBottomL = css`
  @media screen and (min-width: 60em) {
    & {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`
export const brBottomM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`
export const brBottomNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`
export const brLeft = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
export const brLeftL = css`
  @media screen and (min-width: 60em) {
    & {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`
export const brLeftM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`
export const brLeftNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`
export const brRight = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
export const brRightL = css`
  @media screen and (min-width: 60em) {
    & {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`
export const brRightM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`
export const brRightNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`
export const brTop = css`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`
export const brTopL = css`
  @media screen and (min-width: 60em) {
    & {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`
export const brTopM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`
export const brTopNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`
export const br0 = css`border-right-width: 0;`
export const br0L = css`
  @media screen and (min-width: 60em) {
    & {
      border-right-width: 0;
    }
  }
`
export const br0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-right-width: 0;
    }
  }
`
export const br0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-right-width: 0;
    }
  }
`
export const br100 = css`border-radius: 100%;`
export const br100L = css`
  @media screen and (min-width: 60em) {
    & {
      border-radius: 100%;
    }
  }
`
export const br100M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-radius: 100%;
    }
  }
`
export const br100Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-radius: 100%;
    }
  }
`
export const brL = css`
  @media screen and (min-width: 60em) {
    & {
      border-right-style: solid;
      border-right-width: 1px;
    }
  }
`
export const brM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-right-style: solid;
      border-right-width: 1px;
    }
  }
`
export const brNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-right-style: solid;
      border-right-width: 1px;
    }
  }
`
export const brPill = css`border-radius: 9999px;`
export const brPillL = css`
  @media screen and (min-width: 60em) {
    & {
      border-radius: 9999px;
    }
  }
`
export const brPillM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-radius: 9999px;
    }
  }
`
export const brPillNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-radius: 9999px;
    }
  }
`
export const br1 = css`border-radius: 0.125rem;`
export const br1L = css`
  @media screen and (min-width: 60em) {
    & {
      border-radius: 0.125rem;
    }
  }
`
export const br1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-radius: 0.125rem;
    }
  }
`
export const br1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-radius: 0.125rem;
    }
  }
`
export const br2 = css`border-radius: 0.25rem;`
export const br2L = css`
  @media screen and (min-width: 60em) {
    & {
      border-radius: 0.25rem;
    }
  }
`
export const br2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-radius: 0.25rem;
    }
  }
`
export const br2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-radius: 0.25rem;
    }
  }
`
export const br3 = css`border-radius: 0.5rem;`
export const br3L = css`
  @media screen and (min-width: 60em) {
    & {
      border-radius: 0.5rem;
    }
  }
`
export const br3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-radius: 0.5rem;
    }
  }
`
export const br3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-radius: 0.5rem;
    }
  }
`
export const br4 = css`border-radius: 1rem;`
export const br4L = css`
  @media screen and (min-width: 60em) {
    & {
      border-radius: 1rem;
    }
  }
`
export const br4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-radius: 1rem;
    }
  }
`
export const br4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-radius: 1rem;
    }
  }
`
export const bt = css`
  border-top-style: solid;
  border-top-width: 1px;
`
export const bt0 = css`border-top-width: 0;`
export const bt0L = css`
  @media screen and (min-width: 60em) {
    & {
      border-top-width: 0;
    }
  }
`
export const bt0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-top-width: 0;
    }
  }
`
export const bt0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-top-width: 0;
    }
  }
`
export const btL = css`
  @media screen and (min-width: 60em) {
    & {
      border-top-style: solid;
      border-top-width: 1px;
    }
  }
`
export const btM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-top-style: solid;
      border-top-width: 1px;
    }
  }
`
export const btNs = css`
  @media screen and (min-width: 30em) {
    & {
      border-top-style: solid;
      border-top-width: 1px;
    }
  }
`
export const buttonReset = css`
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`
export const bw0 = css`border-width: 0;`
export const bw0L = css`
  @media screen and (min-width: 60em) {
    & {
      border-width: 0;
    }
  }
`
export const bw0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-width: 0;
    }
  }
`
export const bw0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-width: 0;
    }
  }
`
export const bw1 = css`border-width: 0.125rem;`
export const bw1L = css`
  @media screen and (min-width: 60em) {
    & {
      border-width: 0.125rem;
    }
  }
`
export const bw1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-width: 0.125rem;
    }
  }
`
export const bw1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-width: 0.125rem;
    }
  }
`
export const bw2 = css`border-width: 0.25rem;`
export const bw2L = css`
  @media screen and (min-width: 60em) {
    & {
      border-width: 0.25rem;
    }
  }
`
export const bw2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-width: 0.25rem;
    }
  }
`
export const bw2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-width: 0.25rem;
    }
  }
`
export const bw3 = css`border-width: 0.5rem;`
export const bw3L = css`
  @media screen and (min-width: 60em) {
    & {
      border-width: 0.5rem;
    }
  }
`
export const bw3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-width: 0.5rem;
    }
  }
`
export const bw3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-width: 0.5rem;
    }
  }
`
export const bw4 = css`border-width: 1rem;`
export const bw4L = css`
  @media screen and (min-width: 60em) {
    & {
      border-width: 1rem;
    }
  }
`
export const bw4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-width: 1rem;
    }
  }
`
export const bw4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-width: 1rem;
    }
  }
`
export const bw5 = css`border-width: 2rem;`
export const bw5L = css`
  @media screen and (min-width: 60em) {
    & {
      border-width: 2rem;
    }
  }
`
export const bw5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      border-width: 2rem;
    }
  }
`
export const bw5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      border-width: 2rem;
    }
  }
`
export const calisto = css`font-family: 'Calisto MT', serif;`
export const cb = css`clear: both;`
export const cbL = css`
  @media screen and (min-width: 60em) {
    & {
      clear: both;
    }
  }
`
export const cbM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      clear: both;
    }
  }
`
export const cbNs = css`
  @media screen and (min-width: 30em) {
    & {
      clear: both;
    }
  }
`
export const center = css`
  margin-right: auto;
  margin-left: auto;
`
export const centerL = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: auto;
      margin-left: auto;
    }
  }
`
export const centerM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: auto;
      margin-left: auto;
    }
  }
`
export const centerNs = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: auto;
      margin-left: auto;
    }
  }
`
export const cf = css`
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  *zoom: 1;
`
export const cl = css`clear: left;`
export const clL = css`
  @media screen and (min-width: 60em) {
    & {
      clear: left;
    }
  }
`
export const clM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      clear: left;
    }
  }
`
export const clNs = css`
  @media screen and (min-width: 30em) {
    & {
      clear: left;
    }
  }
`
export const clip = css`
  position: fixed !important;
  _position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`
export const clipL = css`
  @media screen and (min-width: 60em) {
    & {
      position: fixed !important;
      position: absolute !important;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    }
  }
`
export const clipM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      position: fixed !important;
      position: absolute !important;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    }
  }
`
export const clipNs = css`
  @media screen and (min-width: 30em) {
    & {
      position: fixed !important;
      position: absolute !important;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    }
  }
`
export const cn = css`clear: none;`
export const cnL = css`
  @media screen and (min-width: 60em) {
    & {
      clear: none;
    }
  }
`
export const cnM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      clear: none;
    }
  }
`
export const cnNs = css`
  @media screen and (min-width: 30em) {
    & {
      clear: none;
    }
  }
`
export const code = css`font-family: Consolas, monaco, monospace;`
export const collapse = css`
  border-collapse: collapse;
  border-spacing: 0;
`
export const colorInherit = css`color: inherit;`
export const contain = css`background-size: contain !important;`
export const containL = css`
  @media screen and (min-width: 60em) {
    & {
      background-size: contain !important;
    }
  }
`
export const containM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      background-size: contain !important;
    }
  }
`
export const containNs = css`
  @media screen and (min-width: 30em) {
    & {
      background-size: contain !important;
    }
  }
`
export const contentAround = css`
  -ms-flex-line-pack: distribute;
  align-content: space-around;
`
export const contentAroundL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-line-pack: distribute;
      align-content: space-around;
    }
  }
`
export const contentAroundM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-line-pack: distribute;
      align-content: space-around;
    }
  }
`
export const contentAroundNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-line-pack: distribute;
      align-content: space-around;
    }
  }
`
export const contentBetween = css`
  -ms-flex-line-pack: justify;
  align-content: space-between;
`
export const contentBetweenL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-line-pack: justify;
      align-content: space-between;
    }
  }
`
export const contentBetweenM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-line-pack: justify;
      align-content: space-between;
    }
  }
`
export const contentBetweenNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-line-pack: justify;
      align-content: space-between;
    }
  }
`
export const contentCenter = css`
  -ms-flex-line-pack: center;
  align-content: center;
`
export const contentCenterL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-line-pack: center;
      align-content: center;
    }
  }
`
export const contentCenterM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-line-pack: center;
      align-content: center;
    }
  }
`
export const contentCenterNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-line-pack: center;
      align-content: center;
    }
  }
`
export const contentEnd = css`
  -ms-flex-line-pack: end;
  align-content: flex-end;
`
export const contentEndL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-line-pack: end;
      align-content: flex-end;
    }
  }
`
export const contentEndM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-line-pack: end;
      align-content: flex-end;
    }
  }
`
export const contentEndNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-line-pack: end;
      align-content: flex-end;
    }
  }
`
export const contentStart = css`
  -ms-flex-line-pack: start;
  align-content: flex-start;
`
export const contentStartL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-line-pack: start;
      align-content: flex-start;
    }
  }
`
export const contentStartM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-line-pack: start;
      align-content: flex-start;
    }
  }
`
export const contentStartNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-line-pack: start;
      align-content: flex-start;
    }
  }
`
export const contentStretch = css`
  -ms-flex-line-pack: stretch;
  align-content: stretch;
`
export const contentStretchL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-line-pack: stretch;
      align-content: stretch;
    }
  }
`
export const contentStretchM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-line-pack: stretch;
      align-content: stretch;
    }
  }
`
export const contentStretchNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-line-pack: stretch;
      align-content: stretch;
    }
  }
`
export const courier = css`font-family: 'Courier Next', courier, monospace;`
export const cover = css`background-size: cover !important;`
export const coverL = css`
  @media screen and (min-width: 60em) {
    & {
      background-size: cover !important;
    }
  }
`
export const coverM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      background-size: cover !important;
    }
  }
`
export const coverNs = css`
  @media screen and (min-width: 30em) {
    & {
      background-size: cover !important;
    }
  }
`
export const cr = css`clear: right;`
export const crL = css`
  @media screen and (min-width: 60em) {
    & {
      clear: right;
    }
  }
`
export const crM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      clear: right;
    }
  }
`
export const crNs = css`
  @media screen and (min-width: 30em) {
    & {
      clear: right;
    }
  }
`
export const darkBlue = css`color: #00449e;`
export const darkGray = css`color: #333;`
export const darkGreen = css`color: #137752;`
export const darkPink = css`color: #d5008f;`
export const darkRed = css`color: #e7040f;`
export const db = css`display: block;`
export const dbL = css`
  @media screen and (min-width: 60em) {
    & {
      display: block;
    }
  }
`
export const dbM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: block;
    }
  }
`
export const dbNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: block;
    }
  }
`
export const debug = css`
  & * {
    outline: 1px solid gold;
  }
`
export const debugBlack = css`
  & * {
    outline: 1px solid black;
  }
`
export const debugGrid = css`
  background: transparent
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII=)
    repeat top left;
`
export const debugGrid8Solid = css`
  background: white
    url(data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw==)
    repeat top left;
`
export const debugGrid16 = css`
  background: transparent
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8seuo8aaaaasuvork5cyii=)
    repeat top left;
`
export const debugGrid16Solid = css`
  background: white
    url(data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7)
    repeat top left;
`
export const debugWhite = css`
  & * {
    outline: 1px solid white;
  }
`
export const di = css`display: inline;`
export const diL = css`
  @media screen and (min-width: 60em) {
    & {
      display: inline;
    }
  }
`
export const diM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: inline;
    }
  }
`
export const diNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: inline;
    }
  }
`
export const dib = css`display: inline-block;`
export const dibL = css`
  @media screen and (min-width: 60em) {
    & {
      display: inline-block;
    }
  }
`
export const dibM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: inline-block;
    }
  }
`
export const dibNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: inline-block;
    }
  }
`
export const dim = css`
  opacity: 1;
  transition: opacity 0.15s ease-in;
  &:hover,
  &:focus {
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
  }
  &:active {
    opacity: 0.8;
    transition: opacity 0.15s ease-out;
  }
`
export const dit = css`display: inline-table;`
export const ditL = css`
  @media screen and (min-width: 60em) {
    & {
      display: inline-table;
    }
  }
`
export const ditM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: inline-table;
    }
  }
`
export const ditNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: inline-table;
    }
  }
`
export const dn = css`display: none;`
export const dnL = css`
  @media screen and (min-width: 60em) {
    & {
      display: none;
    }
  }
`
export const dnM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: none;
    }
  }
`
export const dnNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: none;
    }
  }
`
export const dt = css`display: table;`
export const dtFixed = css`
  table-layout: fixed;
  width: 100%;
`
export const dtFixedL = css`
  @media screen and (min-width: 60em) {
    & {
      table-layout: fixed;
      width: 100%;
    }
  }
`
export const dtFixedM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      table-layout: fixed;
      width: 100%;
    }
  }
`
export const dtFixedNs = css`
  @media screen and (min-width: 30em) {
    & {
      table-layout: fixed;
      width: 100%;
    }
  }
`
export const dtColumn = css`display: table-column;`
export const dtColumnGroup = css`display: table-column-group;`
export const dtColumnGroupL = css`
  @media screen and (min-width: 60em) {
    & {
      display: table-column-group;
    }
  }
`
export const dtColumnGroupM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: table-column-group;
    }
  }
`
export const dtColumnGroupNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: table-column-group;
    }
  }
`
export const dtColumnL = css`
  @media screen and (min-width: 60em) {
    & {
      display: table-column;
    }
  }
`
export const dtColumnM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: table-column;
    }
  }
`
export const dtColumnNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: table-column;
    }
  }
`
export const dtL = css`
  @media screen and (min-width: 60em) {
    & {
      display: table;
    }
  }
`
export const dtM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: table;
    }
  }
`
export const dtNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: table;
    }
  }
`
export const dtRow = css`display: table-row;`
export const dtRowGroup = css`display: table-row-group;`
export const dtRowGroupL = css`
  @media screen and (min-width: 60em) {
    & {
      display: table-row-group;
    }
  }
`
export const dtRowGroupM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: table-row-group;
    }
  }
`
export const dtRowGroupNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: table-row-group;
    }
  }
`
export const dtRowL = css`
  @media screen and (min-width: 60em) {
    & {
      display: table-row;
    }
  }
`
export const dtRowM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: table-row;
    }
  }
`
export const dtRowNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: table-row;
    }
  }
`
export const dtc = css`display: table-cell;`
export const dtcL = css`
  @media screen and (min-width: 60em) {
    & {
      display: table-cell;
    }
  }
`
export const dtcM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: table-cell;
    }
  }
`
export const dtcNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: table-cell;
    }
  }
`
export const f5L = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 5rem;
    }
  }
`
export const f5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 5rem;
    }
  }
`
export const f5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 5rem;
    }
  }
`
export const f6 = css`font-size: 6rem;`
export const f6L = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 6rem;
    }
  }
`
export const f6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 6rem;
    }
  }
`
export const f6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 6rem;
    }
  }
`
export const fHeadline = css`font-size: 6rem;`
export const fHeadlineL = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 6rem;
    }
  }
`
export const fHeadlineM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 6rem;
    }
  }
`
export const fHeadlineNs = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 6rem;
    }
  }
`
export const fSubheadline = css`font-size: 5rem;`
export const fSubheadlineL = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 5rem;
    }
  }
`
export const fSubheadlineM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 5rem;
    }
  }
`
export const fSubheadlineNs = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 5rem;
    }
  }
`
export const f1 = css`font-size: 3rem;`
export const f1L = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 3rem;
    }
  }
`
export const f1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 3rem;
    }
  }
`
export const f1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 3rem;
    }
  }
`
export const f2 = css`font-size: 2.25rem;`
export const f2L = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 2.25rem;
    }
  }
`
export const f2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 2.25rem;
    }
  }
`
export const f2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 2.25rem;
    }
  }
`
export const f3 = css`font-size: 1.5rem;`
export const f3L = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 1.5rem;
    }
  }
`
export const f3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 1.5rem;
    }
  }
`
export const f3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 1.5rem;
    }
  }
`
export const f4 = css`font-size: 1.25rem;`
export const f4L = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 1.25rem;
    }
  }
`
export const f4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 1.25rem;
    }
  }
`
export const f4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 1.25rem;
    }
  }
`
export const f5 = css`font-size: 1rem;`
export const f7 = css`font-size: 0.75rem;`
export const f7L = css`
  @media screen and (min-width: 60em) {
    & {
      font-size: 0.75rem;
    }
  }
`
export const f7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-size: 0.75rem;
    }
  }
`
export const f7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-size: 0.75rem;
    }
  }
`
export const fixed = css`position: fixed;`
export const fixedL = css`
  @media screen and (min-width: 60em) {
    & {
      position: fixed;
    }
  }
`
export const fixedM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      position: fixed;
    }
  }
`
export const fixedNs = css`
  @media screen and (min-width: 30em) {
    & {
      position: fixed;
    }
  }
`
export const fl = css`
  float: left;
  _display: inline;
`
export const flL = css`
  @media screen and (min-width: 60em) {
    & {
      float: left;
      display: inline;
    }
  }
`
export const flM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      float: left;
      display: inline;
    }
  }
`
export const flNs = css`
  @media screen and (min-width: 30em) {
    & {
      float: left;
      display: inline;
    }
  }
`
export const flex = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`
export const flexAuto = css`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`
export const flexAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-width: 0; /* 1 */
      min-height: 0; /* 1 */
    }
  }
`
export const flexAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-width: 0; /* 1 */
      min-height: 0; /* 1 */
    }
  }
`
export const flexAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-width: 0; /* 1 */
      min-height: 0; /* 1 */
    }
  }
`
export const flexColumn = css`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const flexColumnL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
`
export const flexColumnM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
`
export const flexColumnNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
`
export const flexColumnReverse = css`
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
`
export const flexColumnReverseL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
  }
`
export const flexColumnReverseM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
  }
`
export const flexColumnReverseNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
  }
`
export const flexL = css`
  @media screen and (min-width: 60em) {
    & {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  }
`
export const flexM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  }
`
export const flexNone = css`
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
`
export const flexNoneL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
    }
  }
`
export const flexNoneM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
    }
  }
`
export const flexNoneNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
    }
  }
`
export const flexNowrap = css`
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
`
export const flexNowrapL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
  }
`
export const flexNowrapM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
  }
`
export const flexNowrapNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
  }
`
export const flexNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  }
`
export const flexRow = css`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
export const flexRowL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }
`
export const flexRowM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }
`
export const flexRowNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }
`
export const flexRowReverse = css`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
`
export const flexRowReverseL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
  }
`
export const flexRowReverseM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
  }
`
export const flexRowReverseNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
  }
`
export const flexWrap = css`
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`
export const flexWrapL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
`
export const flexWrapM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
`
export const flexWrapNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
`
export const flexWrapReverse = css`
  -ms-flex-wrap: wrap-reverse;
  flex-wrap: wrap-reverse;
`
export const flexWrapReverseL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
    }
  }
`
export const flexWrapReverseM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
    }
  }
`
export const flexWrapReverseNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
    }
  }
`
export const fn = css`float: none;`
export const fnL = css`
  @media screen and (min-width: 60em) {
    & {
      float: none;
    }
  }
`
export const fnM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      float: none;
    }
  }
`
export const fnNs = css`
  @media screen and (min-width: 30em) {
    & {
      float: none;
    }
  }
`
export const fr = css`
  float: right;
  _display: inline;
`
export const frL = css`
  @media screen and (min-width: 60em) {
    & {
      float: right;
      display: inline;
    }
  }
`
export const frM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      float: right;
      display: inline;
    }
  }
`
export const frNs = css`
  @media screen and (min-width: 30em) {
    & {
      float: right;
      display: inline;
    }
  }
`
export const fsNormal = css`font-style: normal;`
export const fsNormalL = css`
  @media screen and (min-width: 60em) {
    & {
      font-style: normal;
    }
  }
`
export const fsNormalM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-style: normal;
    }
  }
`
export const fsNormalNs = css`
  @media screen and (min-width: 30em) {
    & {
      font-style: normal;
    }
  }
`
export const fw1 = css`font-weight: 100;`
export const fw1L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 100;
    }
  }
`
export const fw1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 100;
    }
  }
`
export const fw1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 100;
    }
  }
`
export const fw2 = css`font-weight: 200;`
export const fw2L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 200;
    }
  }
`
export const fw2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 200;
    }
  }
`
export const fw2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 200;
    }
  }
`
export const fw3 = css`font-weight: 300;`
export const fw3L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 300;
    }
  }
`
export const fw3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 300;
    }
  }
`
export const fw3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 300;
    }
  }
`
export const fw4 = css`font-weight: 400;`
export const fw4L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 400;
    }
  }
`
export const fw4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 400;
    }
  }
`
export const fw4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 400;
    }
  }
`
export const fw5 = css`font-weight: 500;`
export const fw5L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 500;
    }
  }
`
export const fw5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 500;
    }
  }
`
export const fw5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 500;
    }
  }
`
export const fw6 = css`font-weight: 600;`
export const fw6L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 600;
    }
  }
`
export const fw6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 600;
    }
  }
`
export const fw6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 600;
    }
  }
`
export const fw7 = css`font-weight: 700;`
export const fw7L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 700;
    }
  }
`
export const fw7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 700;
    }
  }
`
export const fw7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 700;
    }
  }
`
export const fw8 = css`font-weight: 800;`
export const fw8L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 800;
    }
  }
`
export const fw8M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 800;
    }
  }
`
export const fw8Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 800;
    }
  }
`
export const fw9 = css`font-weight: 900;`
export const fw9L = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: 900;
    }
  }
`
export const fw9M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: 900;
    }
  }
`
export const fw9Ns = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: 900;
    }
  }
`
export const garamond = css`font-family: garamond, serif;`
export const georgia = css`font-family: georgia, serif;`
export const glow = css`
  transition: opacity 0.15s ease-in;
  &:hover,
  &:focus {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`
export const gold = css`color: #ffb700;`
export const gray = css`color: #777;`
export const green = css`color: #19a974;`
export const grow = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: -webkit-transform 0.25s ease-out;
  transition: transform 0.25s ease-out;
  transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
  &:hover,
  &:focus {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  &:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`
export const growLarge = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: -webkit-transform 0.25s ease-in-out;
  transition: transform 0.25s ease-in-out;
  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;
  &:hover,
  &:focus {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  &:active {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
`
export const h25 = css`height: 25%;`
export const h25L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 25%;
    }
  }
`
export const h25M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 25%;
    }
  }
`
export const h25Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 25%;
    }
  }
`
export const h50 = css`height: 50%;`
export const h50L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 50%;
    }
  }
`
export const h50M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 50%;
    }
  }
`
export const h50Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 50%;
    }
  }
`
export const h75 = css`height: 75%;`
export const h75L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 75%;
    }
  }
`
export const h75M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 75%;
    }
  }
`
export const h75Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 75%;
    }
  }
`
export const h100 = css`height: 100%;`
export const h100L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 100%;
    }
  }
`
export const h100M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 100%;
    }
  }
`
export const h100Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 100%;
    }
  }
`
export const hAuto = css`height: auto;`
export const hAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      height: auto;
    }
  }
`
export const hAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: auto;
    }
  }
`
export const hAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      height: auto;
    }
  }
`
export const hInherit = css`height: inherit;`
export const hInheritL = css`
  @media screen and (min-width: 60em) {
    & {
      height: inherit;
    }
  }
`
export const hInheritM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: inherit;
    }
  }
`
export const hInheritNs = css`
  @media screen and (min-width: 30em) {
    & {
      height: inherit;
    }
  }
`
export const h1 = css`height: 1rem;`
export const h1L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 1rem;
    }
  }
`
export const h1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 1rem;
    }
  }
`
export const h1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 1rem;
    }
  }
`
export const h2 = css`height: 2rem;`
export const h2L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 2rem;
    }
  }
`
export const h2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 2rem;
    }
  }
`
export const h2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 2rem;
    }
  }
`
export const h3 = css`height: 4rem;`
export const h3L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 4rem;
    }
  }
`
export const h3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 4rem;
    }
  }
`
export const h3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 4rem;
    }
  }
`
export const h4 = css`height: 8rem;`
export const h4L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 8rem;
    }
  }
`
export const h4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 8rem;
    }
  }
`
export const h4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 8rem;
    }
  }
`
export const h5 = css`height: 16rem;`
export const h5L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 16rem;
    }
  }
`
export const h5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 16rem;
    }
  }
`
export const h5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 16rem;
    }
  }
`
export const helvetica = css`
  font-family: 'helvetica neue', helvetica, sans-serif;
`
export const hideChild = css`
  & .child {
    opacity: 0;
    transition: opacity 0.15s ease-in;
  }
  &:hover .child,
  &:focus .child,
  &:active .child {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`
export const hotPink = css`color: #ff41b4;`
export const hoverBgBlack = css`
  &:hover {
    background-color: #000;
  }
  &:focus {
    background-color: #000;
  }
`
export const hoverBgBlack10 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const hoverBgBlack20 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
export const hoverBgBlack30 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
export const hoverBgBlack40 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.4);
  }
`
export const hoverBgBlack50 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const hoverBgBlack60 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }
`
export const hoverBgBlack70 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.7);
  }
`
export const hoverBgBlack80 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const hoverBgBlack90 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const hoverBgBlue = css`
  &:hover {
    background-color: #357edd;
  }
  &:focus {
    background-color: #357edd;
  }
`
export const hoverBgDarkBlue = css`
  &:hover {
    background-color: #00449e;
  }
  &:focus {
    background-color: #00449e;
  }
`
export const hoverBgDarkGray = css`
  &:hover {
    background-color: #333;
  }
  &:focus {
    background-color: #333;
  }
`
export const hoverBgDarkGreen = css`
  &:hover {
    background-color: #137752;
  }
  &:focus {
    background-color: #137752;
  }
`
export const hoverBgDarkPink = css`
  &:hover {
    background-color: #d5008f;
  }
  &:focus {
    background-color: #d5008f;
  }
`
export const hoverBgDarkRed = css`
  &:hover {
    background-color: #e7040f;
  }
  &:focus {
    background-color: #e7040f;
  }
`
export const hoverBgGold = css`
  &:hover {
    background-color: #ffb700;
  }
  &:focus {
    background-color: #ffb700;
  }
`
export const hoverBgGray = css`
  &:hover {
    background-color: #777;
  }
  &:focus {
    background-color: #777;
  }
`
export const hoverBgGreen = css`
  &:hover {
    background-color: #19a974;
  }
  &:focus {
    background-color: #19a974;
  }
`
export const hoverBgHotPink = css`
  &:hover {
    background-color: #ff41b4;
  }
  &:focus {
    background-color: #ff41b4;
  }
`
export const hoverBgInherit = css`
  &:hover,
  &:focus {
    background-color: inherit;
  }
`
export const hoverBgLightBlue = css`
  &:hover {
    background-color: #96ccff;
  }
  &:focus {
    background-color: #96ccff;
  }
`
export const hoverBgLightGray = css`
  &:hover {
    background-color: #eee;
  }
  &:focus {
    background-color: #eee;
  }
`
export const hoverBgLightGreen = css`
  &:hover {
    background-color: #9eebcf;
  }
  &:focus {
    background-color: #9eebcf;
  }
`
export const hoverBgLightPink = css`
  &:hover {
    background-color: #ffa3d7;
  }
  &:focus {
    background-color: #ffa3d7;
  }
`
export const hoverBgLightPurple = css`
  &:hover {
    background-color: #a463f2;
  }
  &:focus {
    background-color: #a463f2;
  }
`
export const hoverBgLightRed = css`
  &:hover {
    background-color: #ff725c;
  }
  &:focus {
    background-color: #ff725c;
  }
`
export const hoverBgLightSilver = css`
  &:hover {
    background-color: #aaa;
  }
  &:focus {
    background-color: #aaa;
  }
`
export const hoverBgLightYellow = css`
  &:hover {
    background-color: #fbf1a9;
  }
  &:focus {
    background-color: #fbf1a9;
  }
`
export const hoverBgLightestBlue = css`
  &:hover {
    background-color: #cdecff;
  }
  &:focus {
    background-color: #cdecff;
  }
`
export const hoverBgMidGray = css`
  &:hover {
    background-color: #555;
  }
  &:focus {
    background-color: #555;
  }
`
export const hoverBgMoonGray = css`
  &:hover {
    background-color: #ccc;
  }
  &:focus {
    background-color: #ccc;
  }
`
export const hoverBgNavy = css`
  &:hover {
    background-color: #001b44;
  }
  &:focus {
    background-color: #001b44;
  }
`
export const hoverBgNearBlack = css`
  &:hover {
    background-color: #111;
  }
  &:focus {
    background-color: #111;
  }
`
export const hoverBgNearWhite = css`
  &:hover {
    background-color: #f4f4f4;
  }
  &:focus {
    background-color: #f4f4f4;
  }
`
export const hoverBgOrange = css`
  &:hover {
    background-color: #ff6300;
  }
  &:focus {
    background-color: #ff6300;
  }
`
export const hoverBgPink = css`
  &:hover {
    background-color: #ff80cc;
  }
  &:focus {
    background-color: #ff80cc;
  }
`
export const hoverBgPurple = css`
  &:hover {
    background-color: #5e2ca5;
  }
  &:focus {
    background-color: #5e2ca5;
  }
`
export const hoverBgRed = css`
  &:hover {
    background-color: #ff4136;
  }
  &:focus {
    background-color: #ff4136;
  }
`
export const hoverBgSilver = css`
  &:hover {
    background-color: #999;
  }
  &:focus {
    background-color: #999;
  }
`
export const hoverBgTransparent = css`
  &:hover {
    background-color: transparent;
  }
  &:focus {
    background-color: transparent;
  }
`
export const hoverBgWashedBlue = css`
  &:hover {
    background-color: #f6fffe;
  }
  &:focus {
    background-color: #f6fffe;
  }
`
export const hoverBgWashedGreen = css`
  &:hover {
    background-color: #e8fdf5;
  }
  &:focus {
    background-color: #e8fdf5;
  }
`
export const hoverBgWashedRed = css`
  &:hover {
    background-color: #ffdfdf;
  }
  &:focus {
    background-color: #ffdfdf;
  }
`
export const hoverBgWashedYellow = css`
  &:hover {
    background-color: #fffceb;
  }
  &:focus {
    background-color: #fffceb;
  }
`
export const hoverBgWhite = css`
  &:hover {
    background-color: #fff;
  }
  &:focus {
    background-color: #fff;
  }
`
export const hoverBgWhite10 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
export const hoverBgWhite20 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`
export const hoverBgWhite30 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
  }
`
export const hoverBgWhite40 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.4);
  }
`
export const hoverBgWhite50 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.5);
  }
`
export const hoverBgWhite60 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.6);
  }
`
export const hoverBgWhite70 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.7);
  }
`
export const hoverBgWhite80 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.8);
  }
`
export const hoverBgWhite90 = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.9);
  }
`
export const hoverBgYellow = css`
  &:hover {
    background-color: #ffd700;
  }
  &:focus {
    background-color: #ffd700;
  }
`
export const hoverBlack = css`
  &:hover {
    color: #000;
  }
  &:focus {
    color: #000;
  }
`
export const hoverBlack10 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.1);
  }
`
export const hoverBlack20 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.2);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.2);
  }
`
export const hoverBlack30 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.3);
  }
`
export const hoverBlack40 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.4);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.4);
  }
`
export const hoverBlack50 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.5);
  }
`
export const hoverBlack60 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.6);
  }
`
export const hoverBlack70 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.7);
  }
`
export const hoverBlack80 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.8);
  }
`
export const hoverBlack90 = css`
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
  &:focus {
    color: rgba(0, 0, 0, 0.9);
  }
`
export const hoverBlue = css`
  &:hover {
    color: #357edd;
  }
  &:focus {
    color: #357edd;
  }
`
export const hoverDarkBlue = css`
  &:hover {
    color: #00449e;
  }
  &:focus {
    color: #00449e;
  }
`
export const hoverDarkGray = css`
  &:hover {
    color: #333;
  }
  &:focus {
    color: #333;
  }
`
export const hoverDarkGreen = css`
  &:hover {
    color: #137752;
  }
  &:focus {
    color: #137752;
  }
`
export const hoverDarkPink = css`
  &:hover {
    color: #d5008f;
  }
  &:focus {
    color: #d5008f;
  }
`
export const hoverDarkRed = css`
  &:hover {
    color: #e7040f;
  }
  &:focus {
    color: #e7040f;
  }
`
export const hoverGold = css`
  &:hover {
    color: #ffb700;
  }
  &:focus {
    color: #ffb700;
  }
`
export const hoverGray = css`
  &:hover {
    color: #777;
  }
  &:focus {
    color: #777;
  }
`
export const hoverGreen = css`
  &:hover {
    color: #19a974;
  }
  &:focus {
    color: #19a974;
  }
`
export const hoverHotPink = css`
  &:hover {
    color: #ff41b4;
  }
  &:focus {
    color: #ff41b4;
  }
`
export const hoverInherit = css`
  &:hover,
  &:focus {
    color: inherit;
  }
`
export const hoverLightBlue = css`
  &:hover {
    color: #96ccff;
  }
  &:focus {
    color: #96ccff;
  }
`
export const hoverLightGray = css`
  &:hover {
    color: #eee;
  }
  &:focus {
    color: #eee;
  }
`
export const hoverLightGreen = css`
  &:hover {
    color: #9eebcf;
  }
  &:focus {
    color: #9eebcf;
  }
`
export const hoverLightPink = css`
  &:hover {
    color: #ffa3d7;
  }
  &:focus {
    color: #ffa3d7;
  }
`
export const hoverLightPurple = css`
  &:hover {
    color: #a463f2;
  }
  &:focus {
    color: #a463f2;
  }
`
export const hoverLightRed = css`
  &:hover {
    color: #ff725c;
  }
  &:focus {
    color: #ff725c;
  }
`
export const hoverLightSilver = css`
  &:hover {
    color: #aaa;
  }
  &:focus {
    color: #aaa;
  }
`
export const hoverLightYellow = css`
  &:hover {
    color: #fbf1a9;
  }
  &:focus {
    color: #fbf1a9;
  }
`
export const hoverLightestBlue = css`
  &:hover {
    color: #cdecff;
  }
  &:focus {
    color: #cdecff;
  }
`
export const hoverMidGray = css`
  &:hover {
    color: #555;
  }
  &:focus {
    color: #555;
  }
`
export const hoverMoonGray = css`
  &:hover {
    color: #ccc;
  }
  &:focus {
    color: #ccc;
  }
`
export const hoverNavy = css`
  &:hover {
    color: #001b44;
  }
  &:focus {
    color: #001b44;
  }
`
export const hoverNearBlack = css`
  &:hover {
    color: #111;
  }
  &:focus {
    color: #111;
  }
`
export const hoverNearWhite = css`
  &:hover {
    color: #f4f4f4;
  }
  &:focus {
    color: #f4f4f4;
  }
`
export const hoverOrange = css`
  &:hover {
    color: #ff6300;
  }
  &:focus {
    color: #ff6300;
  }
`
export const hoverPink = css`
  &:hover {
    color: #ff80cc;
  }
  &:focus {
    color: #ff80cc;
  }
`
export const hoverPurple = css`
  &:hover {
    color: #5e2ca5;
  }
  &:focus {
    color: #5e2ca5;
  }
`
export const hoverRed = css`
  &:hover {
    color: #ff4136;
  }
  &:focus {
    color: #ff4136;
  }
`
export const hoverSilver = css`
  &:hover {
    color: #999;
  }
  &:focus {
    color: #999;
  }
`
export const hoverWashedBlue = css`
  &:hover {
    color: #f6fffe;
  }
  &:focus {
    color: #f6fffe;
  }
`
export const hoverWashedGreen = css`
  &:hover {
    color: #e8fdf5;
  }
  &:focus {
    color: #e8fdf5;
  }
`
export const hoverWashedRed = css`
  &:hover {
    color: #ffdfdf;
  }
  &:focus {
    color: #ffdfdf;
  }
`
export const hoverWashedYellow = css`
  &:hover {
    color: #fffceb;
  }
  &:focus {
    color: #fffceb;
  }
`
export const hoverWhite = css`
  &:hover {
    color: #fff;
  }
  &:focus {
    color: #fff;
  }
`
export const hoverWhite10 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.1);
  }
`
export const hoverWhite20 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.2);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.2);
  }
`
export const hoverWhite30 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.3);
  }
`
export const hoverWhite40 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.4);
  }
`
export const hoverWhite50 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.5);
  }
`
export const hoverWhite60 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.6);
  }
`
export const hoverWhite70 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.7);
  }
`
export const hoverWhite80 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.8);
  }
`
export const hoverWhite90 = css`
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  &:focus {
    color: rgba(255, 255, 255, 0.9);
  }
`
export const hoverYellow = css`
  &:hover {
    color: #ffd700;
  }
  &:focus {
    color: #ffd700;
  }
`
export const i = css`font-style: italic;`
export const iL = css`
  @media screen and (min-width: 60em) {
    & {
      font-style: italic;
    }
  }
`
export const iM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-style: italic;
    }
  }
`
export const iNs = css`
  @media screen and (min-width: 30em) {
    & {
      font-style: italic;
    }
  }
`
export const indent = css`
  text-indent: 1em;
  margin-top: 0;
  margin-bottom: 0;
`
export const indentL = css`
  @media screen and (min-width: 60em) {
    & {
      text-indent: 1em;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`
export const indentM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-indent: 1em;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`
export const indentNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-indent: 1em;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`
export const inlineFlex = css`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
`
export const inlineFlexL = css`
  @media screen and (min-width: 60em) {
    & {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
    }
  }
`
export const inlineFlexM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
    }
  }
`
export const inlineFlexNs = css`
  @media screen and (min-width: 30em) {
    & {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
    }
  }
`
export const itemsBaseline = css`
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
`
export const itemsBaselineL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
    }
  }
`
export const itemsBaselineM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
    }
  }
`
export const itemsBaselineNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
    }
  }
`
export const itemsCenter = css`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const itemsCenterL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
`
export const itemsCenterM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
`
export const itemsCenterNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
`
export const itemsEnd = css`
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
`
export const itemsEndL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }
  }
`
export const itemsEndM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }
  }
`
export const itemsEndNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }
  }
`
export const itemsStart = css`
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
`
export const itemsStartL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
  }
`
export const itemsStartM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
  }
`
export const itemsStartNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
  }
`
export const itemsStretch = css`
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
`
export const itemsStretchL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
    }
  }
`
export const itemsStretchM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
    }
  }
`
export const itemsStretchNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
    }
  }
`
export const justifyAround = css`
  -ms-flex-pack: distribute;
  justify-content: space-around;
`
export const justifyAroundL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
  }
`
export const justifyAroundM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
  }
`
export const justifyAroundNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }
  }
`
export const justifyBetween = css`
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const justifyBetweenL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }
`
export const justifyBetweenM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }
`
export const justifyBetweenNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }
`
export const justifyCenter = css`
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`
export const justifyCenterL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
`
export const justifyCenterM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
`
export const justifyCenterNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
`
export const justifyEnd = css`
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`
export const justifyEndL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }
  }
`
export const justifyEndM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }
  }
`
export const justifyEndNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }
  }
`
export const justifyStart = css`
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const justifyStartL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
  }
`
export const justifyStartM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
  }
`
export const justifyStartNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
  }
`
export const left1 = css`left: -1rem;`
export const left1L = css`
  @media screen and (min-width: 60em) {
    & {
      left: -1rem;
    }
  }
`
export const left1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      left: -1rem;
    }
  }
`
export const left1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      left: -1rem;
    }
  }
`
export const left2 = css`left: -2rem;`
export const left2L = css`
  @media screen and (min-width: 60em) {
    & {
      left: -2rem;
    }
  }
`
export const left2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      left: -2rem;
    }
  }
`
export const left2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      left: -2rem;
    }
  }
`
export const left0 = css`left: 0;`
export const left0L = css`
  @media screen and (min-width: 60em) {
    & {
      left: 0;
    }
  }
`
export const left0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      left: 0;
    }
  }
`
export const left0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      left: 0;
    }
  }
`
export const lhCopy = css`line-height: 1.5;`
export const lhCopyL = css`
  @media screen and (min-width: 60em) {
    & {
      line-height: 1.5;
    }
  }
`
export const lhCopyM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      line-height: 1.5;
    }
  }
`
export const lhCopyNs = css`
  @media screen and (min-width: 30em) {
    & {
      line-height: 1.5;
    }
  }
`
export const lhSolid = css`line-height: 1;`
export const lhSolidL = css`
  @media screen and (min-width: 60em) {
    & {
      line-height: 1;
    }
  }
`
export const lhSolidM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      line-height: 1;
    }
  }
`
export const lhSolidNs = css`
  @media screen and (min-width: 30em) {
    & {
      line-height: 1;
    }
  }
`
export const lhTitle = css`line-height: 1.25;`
export const lhTitleL = css`
  @media screen and (min-width: 60em) {
    & {
      line-height: 1.25;
    }
  }
`
export const lhTitleM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      line-height: 1.25;
    }
  }
`
export const lhTitleNs = css`
  @media screen and (min-width: 30em) {
    & {
      line-height: 1.25;
    }
  }
`
export const lightBlue = css`color: #96ccff;`
export const lightGray = css`color: #eee;`
export const lightGreen = css`color: #9eebcf;`
export const lightPink = css`color: #ffa3d7;`
export const lightPurple = css`color: #a463f2;`
export const lightRed = css`color: #ff725c;`
export const lightSilver = css`color: #aaa;`
export const lightYellow = css`color: #fbf1a9;`
export const lightestBlue = css`color: #cdecff;`
export const link = css`
  text-decoration: none;
  transition: color 0.15s ease-in;
  &:link,
  &:visited {
    transition: color 0.15s ease-in;
  }
  &:hover {
    transition: color 0.15s ease-in;
  }
  &:active {
    transition: color 0.15s ease-in;
  }
  &:focus {
    transition: color 0.15s ease-in;
    outline: 1px dotted currentColor;
  }
`
export const list = css`list-style-type: none;`
export const ma0 = css`margin: 0;`
export const ma0L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 0;
    }
  }
`
export const ma0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 0;
    }
  }
`
export const ma0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 0;
    }
  }
`
export const ma1 = css`margin: 0.25rem;`
export const ma1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 0.25rem;
    }
  }
`
export const ma1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 0.25rem;
    }
  }
`
export const ma1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 0.25rem;
    }
  }
`
export const ma2 = css`margin: 0.5rem;`
export const ma2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 0.5rem;
    }
  }
`
export const ma2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 0.5rem;
    }
  }
`
export const ma2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 0.5rem;
    }
  }
`
export const ma3 = css`margin: 1rem;`
export const ma3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 1rem;
    }
  }
`
export const ma3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 1rem;
    }
  }
`
export const ma3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 1rem;
    }
  }
`
export const ma4 = css`margin: 2rem;`
export const ma4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 2rem;
    }
  }
`
export const ma4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 2rem;
    }
  }
`
export const ma4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 2rem;
    }
  }
`
export const ma5 = css`margin: 4rem;`
export const ma5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 4rem;
    }
  }
`
export const ma5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 4rem;
    }
  }
`
export const ma5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 4rem;
    }
  }
`
export const ma6 = css`margin: 8rem;`
export const ma6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 8rem;
    }
  }
`
export const ma6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 8rem;
    }
  }
`
export const ma6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 8rem;
    }
  }
`
export const ma7 = css`margin: 16rem;`
export const ma7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: 16rem;
    }
  }
`
export const ma7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: 16rem;
    }
  }
`
export const ma7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: 16rem;
    }
  }
`
export const mb0 = css`margin-bottom: 0;`
export const mb0L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 0;
    }
  }
`
export const mb0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 0;
    }
  }
`
export const mb0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 0;
    }
  }
`
export const mb1 = css`margin-bottom: 0.25rem;`
export const mb1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 0.25rem;
    }
  }
`
export const mb1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 0.25rem;
    }
  }
`
export const mb1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 0.25rem;
    }
  }
`
export const mb2 = css`margin-bottom: 0.5rem;`
export const mb2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 0.5rem;
    }
  }
`
export const mb2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 0.5rem;
    }
  }
`
export const mb2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 0.5rem;
    }
  }
`
export const mb3 = css`margin-bottom: 1rem;`
export const mb3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 1rem;
    }
  }
`
export const mb3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 1rem;
    }
  }
`
export const mb3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 1rem;
    }
  }
`
export const mb4 = css`margin-bottom: 2rem;`
export const mb4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 2rem;
    }
  }
`
export const mb4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 2rem;
    }
  }
`
export const mb4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 2rem;
    }
  }
`
export const mb5 = css`margin-bottom: 4rem;`
export const mb5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 4rem;
    }
  }
`
export const mb5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 4rem;
    }
  }
`
export const mb5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 4rem;
    }
  }
`
export const mb6 = css`margin-bottom: 8rem;`
export const mb6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 8rem;
    }
  }
`
export const mb6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 8rem;
    }
  }
`
export const mb6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 8rem;
    }
  }
`
export const mb7 = css`margin-bottom: 16rem;`
export const mb7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: 16rem;
    }
  }
`
export const mb7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: 16rem;
    }
  }
`
export const mb7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: 16rem;
    }
  }
`
export const measure = css`max-width: 30em;`
export const measureL = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 30em;
    }
  }
`
export const measureM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 30em;
    }
  }
`
export const measureNarrow = css`max-width: 20em;`
export const measureNarrowL = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 20em;
    }
  }
`
export const measureNarrowM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 20em;
    }
  }
`
export const measureNarrowNs = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 20em;
    }
  }
`
export const measureNs = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 30em;
    }
  }
`
export const measureWide = css`max-width: 34em;`
export const measureWideL = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 34em;
    }
  }
`
export const measureWideM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 34em;
    }
  }
`
export const measureWideNs = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 34em;
    }
  }
`
export const mh0 = css`
  margin-left: 0;
  margin-right: 0;
`
export const mh0L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 0;
      margin-right: 0;
    }
  }
`
export const mh0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 0;
      margin-right: 0;
    }
  }
`
export const mh0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 0;
      margin-right: 0;
    }
  }
`
export const mh1 = css`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`
export const mh1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`
export const mh1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`
export const mh1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`
export const mh2 = css`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`
export const mh2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`
export const mh2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`
export const mh2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`
export const mh3 = css`
  margin-left: 1rem;
  margin-right: 1rem;
`
export const mh3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`
export const mh3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`
export const mh3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`
export const mh4 = css`
  margin-left: 2rem;
  margin-right: 2rem;
`
export const mh4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`
export const mh4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`
export const mh4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`
export const mh5 = css`
  margin-left: 4rem;
  margin-right: 4rem;
`
export const mh5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 4rem;
      margin-right: 4rem;
    }
  }
`
export const mh5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 4rem;
      margin-right: 4rem;
    }
  }
`
export const mh5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 4rem;
      margin-right: 4rem;
    }
  }
`
export const mh6 = css`
  margin-left: 8rem;
  margin-right: 8rem;
`
export const mh6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 8rem;
      margin-right: 8rem;
    }
  }
`
export const mh6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 8rem;
      margin-right: 8rem;
    }
  }
`
export const mh6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 8rem;
      margin-right: 8rem;
    }
  }
`
export const mh7 = css`
  margin-left: 16rem;
  margin-right: 16rem;
`
export const mh7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }
`
export const mh7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }
`
export const mh7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }
`
export const midGray = css`color: #555;`
export const minH100 = css`min-height: 100%;`
export const minH100L = css`
  @media screen and (min-width: 60em) {
    & {
      min-height: 100%;
    }
  }
`
export const minH100M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      min-height: 100%;
    }
  }
`
export const minH100Ns = css`
  @media screen and (min-width: 30em) {
    & {
      min-height: 100%;
    }
  }
`
export const minVh100 = css`min-height: 100vh;`
export const minVh100L = css`
  @media screen and (min-width: 60em) {
    & {
      min-height: 100vh;
    }
  }
`
export const minVh100M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      min-height: 100vh;
    }
  }
`
export const minVh100Ns = css`
  @media screen and (min-width: 30em) {
    & {
      min-height: 100vh;
    }
  }
`
export const mlAuto = css`margin-left: auto;`
export const mlAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: auto;
    }
  }
`
export const mlAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: auto;
    }
  }
`
export const mlAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: auto;
    }
  }
`
export const ml0 = css`margin-left: 0;`
export const ml0L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 0;
    }
  }
`
export const ml0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 0;
    }
  }
`
export const ml0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 0;
    }
  }
`
export const ml1 = css`margin-left: 0.25rem;`
export const ml1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 0.25rem;
    }
  }
`
export const ml1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 0.25rem;
    }
  }
`
export const ml1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 0.25rem;
    }
  }
`
export const ml2 = css`margin-left: 0.5rem;`
export const ml2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 0.5rem;
    }
  }
`
export const ml2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 0.5rem;
    }
  }
`
export const ml2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 0.5rem;
    }
  }
`
export const ml3 = css`margin-left: 1rem;`
export const ml3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 1rem;
    }
  }
`
export const ml3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 1rem;
    }
  }
`
export const ml3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 1rem;
    }
  }
`
export const ml4 = css`margin-left: 2rem;`
export const ml4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 2rem;
    }
  }
`
export const ml4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 2rem;
    }
  }
`
export const ml4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 2rem;
    }
  }
`
export const ml5 = css`margin-left: 4rem;`
export const ml5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 4rem;
    }
  }
`
export const ml5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 4rem;
    }
  }
`
export const ml5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 4rem;
    }
  }
`
export const ml6 = css`margin-left: 8rem;`
export const ml6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 8rem;
    }
  }
`
export const ml6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 8rem;
    }
  }
`
export const ml6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 8rem;
    }
  }
`
export const ml7 = css`margin-left: 16rem;`
export const ml7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: 16rem;
    }
  }
`
export const ml7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: 16rem;
    }
  }
`
export const ml7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: 16rem;
    }
  }
`
export const moonGray = css`color: #ccc;`
export const mrAuto = css`margin-right: auto;`
export const mrAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: auto;
    }
  }
`
export const mrAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: auto;
    }
  }
`
export const mrAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: auto;
    }
  }
`
export const mr0 = css`margin-right: 0;`
export const mr0L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 0;
    }
  }
`
export const mr0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 0;
    }
  }
`
export const mr0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 0;
    }
  }
`
export const mr1 = css`margin-right: 0.25rem;`
export const mr1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 0.25rem;
    }
  }
`
export const mr1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 0.25rem;
    }
  }
`
export const mr1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 0.25rem;
    }
  }
`
export const mr2 = css`margin-right: 0.5rem;`
export const mr2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 0.5rem;
    }
  }
`
export const mr2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 0.5rem;
    }
  }
`
export const mr2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 0.5rem;
    }
  }
`
export const mr3 = css`margin-right: 1rem;`
export const mr3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 1rem;
    }
  }
`
export const mr3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 1rem;
    }
  }
`
export const mr3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 1rem;
    }
  }
`
export const mr4 = css`margin-right: 2rem;`
export const mr4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 2rem;
    }
  }
`
export const mr4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 2rem;
    }
  }
`
export const mr4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 2rem;
    }
  }
`
export const mr5 = css`margin-right: 4rem;`
export const mr5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 4rem;
    }
  }
`
export const mr5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 4rem;
    }
  }
`
export const mr5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 4rem;
    }
  }
`
export const mr6 = css`margin-right: 8rem;`
export const mr6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 8rem;
    }
  }
`
export const mr6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 8rem;
    }
  }
`
export const mr6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 8rem;
    }
  }
`
export const mr7 = css`margin-right: 16rem;`
export const mr7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: 16rem;
    }
  }
`
export const mr7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: 16rem;
    }
  }
`
export const mr7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: 16rem;
    }
  }
`
export const mt0 = css`margin-top: 0;`
export const mt0L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 0;
    }
  }
`
export const mt0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 0;
    }
  }
`
export const mt0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 0;
    }
  }
`
export const mt1 = css`margin-top: 0.25rem;`
export const mt1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 0.25rem;
    }
  }
`
export const mt1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 0.25rem;
    }
  }
`
export const mt1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 0.25rem;
    }
  }
`
export const mt2 = css`margin-top: 0.5rem;`
export const mt2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 0.5rem;
    }
  }
`
export const mt2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 0.5rem;
    }
  }
`
export const mt2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 0.5rem;
    }
  }
`
export const mt3 = css`margin-top: 1rem;`
export const mt3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 1rem;
    }
  }
`
export const mt3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 1rem;
    }
  }
`
export const mt3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 1rem;
    }
  }
`
export const mt4 = css`margin-top: 2rem;`
export const mt4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 2rem;
    }
  }
`
export const mt4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 2rem;
    }
  }
`
export const mt4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 2rem;
    }
  }
`
export const mt5 = css`margin-top: 4rem;`
export const mt5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 4rem;
    }
  }
`
export const mt5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 4rem;
    }
  }
`
export const mt5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 4rem;
    }
  }
`
export const mt6 = css`margin-top: 8rem;`
export const mt6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 8rem;
    }
  }
`
export const mt6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 8rem;
    }
  }
`
export const mt6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 8rem;
    }
  }
`
export const mt7 = css`margin-top: 16rem;`
export const mt7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 16rem;
    }
  }
`
export const mt7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 16rem;
    }
  }
`
export const mt7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 16rem;
    }
  }
`
export const mv0 = css`
  margin-top: 0;
  margin-bottom: 0;
`
export const mv0L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`
export const mv0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`
export const mv0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`
export const mv1 = css`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`
export const mv1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
`
export const mv1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
`
export const mv1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
`
export const mv2 = css`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`
export const mv2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`
export const mv2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`
export const mv2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`
export const mv3 = css`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const mv3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`
export const mv3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`
export const mv3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`
export const mv4 = css`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const mv4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`
export const mv4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`
export const mv4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`
export const mv5 = css`
  margin-top: 4rem;
  margin-bottom: 4rem;
`
export const mv5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`
export const mv5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`
export const mv5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`
export const mv6 = css`
  margin-top: 8rem;
  margin-bottom: 8rem;
`
export const mv6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 8rem;
      margin-bottom: 8rem;
    }
  }
`
export const mv6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 8rem;
      margin-bottom: 8rem;
    }
  }
`
export const mv6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 8rem;
      margin-bottom: 8rem;
    }
  }
`
export const mv7 = css`
  margin-top: 16rem;
  margin-bottom: 16rem;
`
export const mv7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: 16rem;
      margin-bottom: 16rem;
    }
  }
`
export const mv7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: 16rem;
      margin-bottom: 16rem;
    }
  }
`
export const mv7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: 16rem;
      margin-bottom: 16rem;
    }
  }
`
export const mw100 = css`max-width: 100%;`
export const mw100L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 100%;
    }
  }
`
export const mw100M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 100%;
    }
  }
`
export const mw100Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 100%;
    }
  }
`
export const mwNone = css`max-width: none;`
export const mwNoneL = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: none;
    }
  }
`
export const mwNoneM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: none;
    }
  }
`
export const mwNoneNs = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: none;
    }
  }
`
export const mw1 = css`max-width: 1rem;`
export const mw1L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 1rem;
    }
  }
`
export const mw1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 1rem;
    }
  }
`
export const mw1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 1rem;
    }
  }
`
export const mw2 = css`max-width: 2rem;`
export const mw2L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 2rem;
    }
  }
`
export const mw2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 2rem;
    }
  }
`
export const mw2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 2rem;
    }
  }
`
export const mw3 = css`max-width: 4rem;`
export const mw3L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 4rem;
    }
  }
`
export const mw3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 4rem;
    }
  }
`
export const mw3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 4rem;
    }
  }
`
export const mw4 = css`max-width: 8rem;`
export const mw4L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 8rem;
    }
  }
`
export const mw4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 8rem;
    }
  }
`
export const mw4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 8rem;
    }
  }
`
export const mw5 = css`max-width: 16rem;`
export const mw5L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 16rem;
    }
  }
`
export const mw5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 16rem;
    }
  }
`
export const mw5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 16rem;
    }
  }
`
export const mw6 = css`max-width: 32rem;`
export const mw6L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 32rem;
    }
  }
`
export const mw6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 32rem;
    }
  }
`
export const mw6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 32rem;
    }
  }
`
export const mw7 = css`max-width: 48rem;`
export const mw7L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 48rem;
    }
  }
`
export const mw7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 48rem;
    }
  }
`
export const mw7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 48rem;
    }
  }
`
export const mw8 = css`max-width: 64rem;`
export const mw8L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 64rem;
    }
  }
`
export const mw8M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 64rem;
    }
  }
`
export const mw8Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 64rem;
    }
  }
`
export const mw9 = css`max-width: 96rem;`
export const mw9L = css`
  @media screen and (min-width: 60em) {
    & {
      max-width: 96rem;
    }
  }
`
export const mw9M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      max-width: 96rem;
    }
  }
`
export const mw9Ns = css`
  @media screen and (min-width: 30em) {
    & {
      max-width: 96rem;
    }
  }
`
export const na1 = css`margin: -0.25rem;`
export const na1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: -0.25rem;
    }
  }
`
export const na1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: -0.25rem;
    }
  }
`
export const na1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: -0.25rem;
    }
  }
`
export const na2 = css`margin: -0.5rem;`
export const na2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: -0.5rem;
    }
  }
`
export const na2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: -0.5rem;
    }
  }
`
export const na2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: -0.5rem;
    }
  }
`
export const na3 = css`margin: -1rem;`
export const na3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: -1rem;
    }
  }
`
export const na3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: -1rem;
    }
  }
`
export const na3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: -1rem;
    }
  }
`
export const na4 = css`margin: -2rem;`
export const na4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: -2rem;
    }
  }
`
export const na4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: -2rem;
    }
  }
`
export const na4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: -2rem;
    }
  }
`
export const na5 = css`margin: -4rem;`
export const na5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: -4rem;
    }
  }
`
export const na5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: -4rem;
    }
  }
`
export const na5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: -4rem;
    }
  }
`
export const na6 = css`margin: -8rem;`
export const na6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: -8rem;
    }
  }
`
export const na6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: -8rem;
    }
  }
`
export const na6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: -8rem;
    }
  }
`
export const na7 = css`margin: -16rem;`
export const na7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin: -16rem;
    }
  }
`
export const na7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin: -16rem;
    }
  }
`
export const na7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin: -16rem;
    }
  }
`
export const navy = css`color: #001b44;`
export const nb1 = css`margin-bottom: -0.25rem;`
export const nb1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: -0.25rem;
    }
  }
`
export const nb1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: -0.25rem;
    }
  }
`
export const nb1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: -0.25rem;
    }
  }
`
export const nb2 = css`margin-bottom: -0.5rem;`
export const nb2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: -0.5rem;
    }
  }
`
export const nb2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: -0.5rem;
    }
  }
`
export const nb2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: -0.5rem;
    }
  }
`
export const nb3 = css`margin-bottom: -1rem;`
export const nb3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: -1rem;
    }
  }
`
export const nb3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: -1rem;
    }
  }
`
export const nb3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: -1rem;
    }
  }
`
export const nb4 = css`margin-bottom: -2rem;`
export const nb4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: -2rem;
    }
  }
`
export const nb4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: -2rem;
    }
  }
`
export const nb4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: -2rem;
    }
  }
`
export const nb5 = css`margin-bottom: -4rem;`
export const nb5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: -4rem;
    }
  }
`
export const nb5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: -4rem;
    }
  }
`
export const nb5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: -4rem;
    }
  }
`
export const nb6 = css`margin-bottom: -8rem;`
export const nb6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: -8rem;
    }
  }
`
export const nb6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: -8rem;
    }
  }
`
export const nb6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: -8rem;
    }
  }
`
export const nb7 = css`margin-bottom: -16rem;`
export const nb7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-bottom: -16rem;
    }
  }
`
export const nb7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-bottom: -16rem;
    }
  }
`
export const nb7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-bottom: -16rem;
    }
  }
`
export const nearBlack = css`color: #111;`
export const nearWhite = css`color: #f4f4f4;`
export const nestedCopyIndent = css`
  & p + p {
    text-indent: 1em;
    margin-top: 0;
    margin-bottom: 0;
  }
`
export const nestedCopyLineHeight = css`
  & p,
  & ul,
  & ol {
    line-height: 1.5;
  }
`
export const nestedCopySeperator = css`
  & p + p {
    margin-top: 1.5em;
  }
`
export const nestedHeadlineLineHeight = css`
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    line-height: 1.25;
  }
`
export const nestedImg = css`
  & img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`
export const nestedLinks = css`
  & a {
    color: #357edd;
    transition: color 0.15s ease-in;
  }
  & a:hover {
    color: #96ccff;
    transition: color 0.15s ease-in;
  }
  & a:focus {
    color: #96ccff;
    transition: color 0.15s ease-in;
  }
`
export const nestedListReset = css`
  & ul,
  & ol {
    padding-left: 0;
    margin-left: 0;
    list-style-type: none;
  }
`
export const nl1 = css`margin-left: -0.25rem;`
export const nl1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: -0.25rem;
    }
  }
`
export const nl1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: -0.25rem;
    }
  }
`
export const nl1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: -0.25rem;
    }
  }
`
export const nl2 = css`margin-left: -0.5rem;`
export const nl2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: -0.5rem;
    }
  }
`
export const nl2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: -0.5rem;
    }
  }
`
export const nl2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: -0.5rem;
    }
  }
`
export const nl3 = css`margin-left: -1rem;`
export const nl3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: -1rem;
    }
  }
`
export const nl3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: -1rem;
    }
  }
`
export const nl3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: -1rem;
    }
  }
`
export const nl4 = css`margin-left: -2rem;`
export const nl4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: -2rem;
    }
  }
`
export const nl4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: -2rem;
    }
  }
`
export const nl4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: -2rem;
    }
  }
`
export const nl5 = css`margin-left: -4rem;`
export const nl5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: -4rem;
    }
  }
`
export const nl5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: -4rem;
    }
  }
`
export const nl5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: -4rem;
    }
  }
`
export const nl6 = css`margin-left: -8rem;`
export const nl6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: -8rem;
    }
  }
`
export const nl6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: -8rem;
    }
  }
`
export const nl6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: -8rem;
    }
  }
`
export const nl7 = css`margin-left: -16rem;`
export const nl7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-left: -16rem;
    }
  }
`
export const nl7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-left: -16rem;
    }
  }
`
export const nl7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-left: -16rem;
    }
  }
`
export const noUnderline = css`text-decoration: none;`
export const noUnderlineL = css`
  @media screen and (min-width: 60em) {
    & {
      text-decoration: none;
    }
  }
`
export const noUnderlineM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-decoration: none;
    }
  }
`
export const noUnderlineNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-decoration: none;
    }
  }
`
export const normal = css`font-weight: normal;`
export const normalL = css`
  @media screen and (min-width: 60em) {
    & {
      font-weight: normal;
    }
  }
`
export const normalM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-weight: normal;
    }
  }
`
export const normalNs = css`
  @media screen and (min-width: 30em) {
    & {
      font-weight: normal;
    }
  }
`
export const nowrap = css`white-space: nowrap;`
export const nowrapL = css`
  @media screen and (min-width: 60em) {
    & {
      white-space: nowrap;
    }
  }
`
export const nowrapM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      white-space: nowrap;
    }
  }
`
export const nowrapNs = css`
  @media screen and (min-width: 30em) {
    & {
      white-space: nowrap;
    }
  }
`
export const nr1 = css`margin-right: -0.25rem;`
export const nr1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: -0.25rem;
    }
  }
`
export const nr1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: -0.25rem;
    }
  }
`
export const nr1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: -0.25rem;
    }
  }
`
export const nr2 = css`margin-right: -0.5rem;`
export const nr2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: -0.5rem;
    }
  }
`
export const nr2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: -0.5rem;
    }
  }
`
export const nr2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: -0.5rem;
    }
  }
`
export const nr3 = css`margin-right: -1rem;`
export const nr3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: -1rem;
    }
  }
`
export const nr3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: -1rem;
    }
  }
`
export const nr3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: -1rem;
    }
  }
`
export const nr4 = css`margin-right: -2rem;`
export const nr4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: -2rem;
    }
  }
`
export const nr4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: -2rem;
    }
  }
`
export const nr4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: -2rem;
    }
  }
`
export const nr5 = css`margin-right: -4rem;`
export const nr5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: -4rem;
    }
  }
`
export const nr5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: -4rem;
    }
  }
`
export const nr5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: -4rem;
    }
  }
`
export const nr6 = css`margin-right: -8rem;`
export const nr6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: -8rem;
    }
  }
`
export const nr6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: -8rem;
    }
  }
`
export const nr6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: -8rem;
    }
  }
`
export const nr7 = css`margin-right: -16rem;`
export const nr7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-right: -16rem;
    }
  }
`
export const nr7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-right: -16rem;
    }
  }
`
export const nr7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-right: -16rem;
    }
  }
`
export const nt1 = css`margin-top: -0.25rem;`
export const nt1L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: -0.25rem;
    }
  }
`
export const nt1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: -0.25rem;
    }
  }
`
export const nt1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: -0.25rem;
    }
  }
`
export const nt2 = css`margin-top: -0.5rem;`
export const nt2L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: -0.5rem;
    }
  }
`
export const nt2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: -0.5rem;
    }
  }
`
export const nt2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: -0.5rem;
    }
  }
`
export const nt3 = css`margin-top: -1rem;`
export const nt3L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: -1rem;
    }
  }
`
export const nt3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: -1rem;
    }
  }
`
export const nt3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: -1rem;
    }
  }
`
export const nt4 = css`margin-top: -2rem;`
export const nt4L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: -2rem;
    }
  }
`
export const nt4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: -2rem;
    }
  }
`
export const nt4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: -2rem;
    }
  }
`
export const nt5 = css`margin-top: -4rem;`
export const nt5L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: -4rem;
    }
  }
`
export const nt5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: -4rem;
    }
  }
`
export const nt5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: -4rem;
    }
  }
`
export const nt6 = css`margin-top: -8rem;`
export const nt6L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: -8rem;
    }
  }
`
export const nt6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: -8rem;
    }
  }
`
export const nt6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: -8rem;
    }
  }
`
export const nt7 = css`margin-top: -16rem;`
export const nt7L = css`
  @media screen and (min-width: 60em) {
    & {
      margin-top: -16rem;
    }
  }
`
export const nt7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      margin-top: -16rem;
    }
  }
`
export const nt7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      margin-top: -16rem;
    }
  }
`
export const o0 = css`opacity: 0;`
export const o05 = css`opacity: 0.05;`
export const o10 = css`opacity: 0.1;`
export const o20 = css`opacity: 0.2;`
export const o025 = css`opacity: 0.025;`
export const o30 = css`opacity: 0.3;`
export const o40 = css`opacity: 0.4;`
export const o50 = css`opacity: 0.5;`
export const o60 = css`opacity: 0.6;`
export const o70 = css`opacity: 0.7;`
export const o80 = css`opacity: 0.8;`
export const o90 = css`opacity: 0.9;`
export const o100 = css`opacity: 1;`
export const orange = css`color: #ff6300;`
export const order0 = css`
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0;
`
export const order0L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
`
export const order0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
`
export const order0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
`
export const order1 = css`
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
`
export const order1L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
`
export const order1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
`
export const order1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
`
export const order2 = css`
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
`
export const order2L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
  }
`
export const order2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
  }
`
export const order2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
  }
`
export const order3 = css`
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3;
`
export const order3L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
  }
`
export const order3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
  }
`
export const order3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
  }
`
export const order4 = css`
  -webkit-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4;
`
export const order4L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
  }
`
export const order4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
  }
`
export const order4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
  }
`
export const order5 = css`
  -webkit-box-ordinal-group: 6;
  -ms-flex-order: 5;
  order: 5;
`
export const order5L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
  }
`
export const order5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
  }
`
export const order5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
  }
`
export const order6 = css`
  -webkit-box-ordinal-group: 7;
  -ms-flex-order: 6;
  order: 6;
`
export const order6L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
  }
`
export const order6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
  }
`
export const order6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
  }
`
export const order7 = css`
  -webkit-box-ordinal-group: 8;
  -ms-flex-order: 7;
  order: 7;
`
export const order7L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
  }
`
export const order7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
  }
`
export const order7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
  }
`
export const order8 = css`
  -webkit-box-ordinal-group: 9;
  -ms-flex-order: 8;
  order: 8;
`
export const order8L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
  }
`
export const order8M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
  }
`
export const order8Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
  }
`
export const orderLast = css`
  -webkit-box-ordinal-group: 100000;
  -ms-flex-order: 99999;
  order: 99999;
`
export const orderLastL = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-box-ordinal-group: 100000;
      -ms-flex-order: 99999;
      order: 99999;
    }
  }
`
export const orderLastM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-box-ordinal-group: 100000;
      -ms-flex-order: 99999;
      order: 99999;
    }
  }
`
export const orderLastNs = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-box-ordinal-group: 100000;
      -ms-flex-order: 99999;
      order: 99999;
    }
  }
`
export const outline = css`outline: 1px solid;`
export const outline0 = css`outline: 0;`
export const outline0L = css`
  @media screen and (min-width: 60em) {
    & {
      outline: 0;
    }
  }
`
export const outline0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      outline: 0;
    }
  }
`
export const outline0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      outline: 0;
    }
  }
`
export const outlineL = css`
  @media screen and (min-width: 60em) {
    & {
      outline: 1px solid;
    }
  }
`
export const outlineM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      outline: 1px solid;
    }
  }
`
export const outlineNs = css`
  @media screen and (min-width: 30em) {
    & {
      outline: 1px solid;
    }
  }
`
export const outlineTransparent = css`outline: 1px solid transparent;`
export const outlineTransparentL = css`
  @media screen and (min-width: 60em) {
    & {
      outline: 1px solid transparent;
    }
  }
`
export const outlineTransparentM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      outline: 1px solid transparent;
    }
  }
`
export const outlineTransparentNs = css`
  @media screen and (min-width: 30em) {
    & {
      outline: 1px solid transparent;
    }
  }
`
export const overflowAuto = css`overflow: auto;`
export const overflowAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow: auto;
    }
  }
`
export const overflowAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow: auto;
    }
  }
`
export const overflowAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow: auto;
    }
  }
`
export const overflowContainer = css`overflow-y: scroll;`
export const overflowHidden = css`overflow: hidden;`
export const overflowHiddenL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow: hidden;
    }
  }
`
export const overflowHiddenM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow: hidden;
    }
  }
`
export const overflowHiddenNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow: hidden;
    }
  }
`
export const overflowScroll = css`overflow: scroll;`
export const overflowScrollL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow: scroll;
    }
  }
`
export const overflowScrollM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow: scroll;
    }
  }
`
export const overflowScrollNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow: scroll;
    }
  }
`
export const overflowVisible = css`overflow: visible;`
export const overflowVisibleL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow: visible;
    }
  }
`
export const overflowVisibleM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow: visible;
    }
  }
`
export const overflowVisibleNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow: visible;
    }
  }
`
export const overflowXAuto = css`overflow-x: auto;`
export const overflowXAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-x: auto;
    }
  }
`
export const overflowXAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-x: auto;
    }
  }
`
export const overflowXAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-x: auto;
    }
  }
`
export const overflowXHidden = css`overflow-x: hidden;`
export const overflowXHiddenL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-x: hidden;
    }
  }
`
export const overflowXHiddenM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-x: hidden;
    }
  }
`
export const overflowXHiddenNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-x: hidden;
    }
  }
`
export const overflowXScroll = css`overflow-x: scroll;`
export const overflowXScrollL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-x: scroll;
    }
  }
`
export const overflowXScrollM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-x: scroll;
    }
  }
`
export const overflowXScrollNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-x: scroll;
    }
  }
`
export const overflowXVisible = css`overflow-x: visible;`
export const overflowXVisibleL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-x: visible;
    }
  }
`
export const overflowXVisibleM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-x: visible;
    }
  }
`
export const overflowXVisibleNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-x: visible;
    }
  }
`
export const overflowYAuto = css`overflow-y: auto;`
export const overflowYAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-y: auto;
    }
  }
`
export const overflowYAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-y: auto;
    }
  }
`
export const overflowYAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-y: auto;
    }
  }
`
export const overflowYHidden = css`overflow-y: hidden;`
export const overflowYHiddenL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-y: hidden;
    }
  }
`
export const overflowYHiddenM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-y: hidden;
    }
  }
`
export const overflowYHiddenNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-y: hidden;
    }
  }
`
export const overflowYScroll = css`overflow-y: scroll;`
export const overflowYScrollL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-y: scroll;
    }
  }
`
export const overflowYScrollM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-y: scroll;
    }
  }
`
export const overflowYScrollNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-y: scroll;
    }
  }
`
export const overflowYVisible = css`overflow-y: visible;`
export const overflowYVisibleL = css`
  @media screen and (min-width: 60em) {
    & {
      overflow-y: visible;
    }
  }
`
export const overflowYVisibleM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      overflow-y: visible;
    }
  }
`
export const overflowYVisibleNs = css`
  @media screen and (min-width: 30em) {
    & {
      overflow-y: visible;
    }
  }
`
export const pa0 = css`padding: 0;`
export const pa0L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 0;
    }
  }
`
export const pa0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 0;
    }
  }
`
export const pa0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 0;
    }
  }
`
export const pa1 = css`padding: 0.25rem;`
export const pa1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 0.25rem;
    }
  }
`
export const pa1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 0.25rem;
    }
  }
`
export const pa1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 0.25rem;
    }
  }
`
export const pa2 = css`padding: 0.5rem;`
export const pa2L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 0.5rem;
    }
  }
`
export const pa2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 0.5rem;
    }
  }
`
export const pa2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 0.5rem;
    }
  }
`
export const pa3 = css`padding: 1rem;`
export const pa3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 1rem;
    }
  }
`
export const pa3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 1rem;
    }
  }
`
export const pa3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 1rem;
    }
  }
`
export const pa4 = css`padding: 2rem;`
export const pa4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 2rem;
    }
  }
`
export const pa4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 2rem;
    }
  }
`
export const pa4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 2rem;
    }
  }
`
export const pa5 = css`padding: 4rem;`
export const pa5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 4rem;
    }
  }
`
export const pa5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 4rem;
    }
  }
`
export const pa5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 4rem;
    }
  }
`
export const pa6 = css`padding: 8rem;`
export const pa6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 8rem;
    }
  }
`
export const pa6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 8rem;
    }
  }
`
export const pa6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 8rem;
    }
  }
`
export const pa7 = css`padding: 16rem;`
export const pa7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding: 16rem;
    }
  }
`
export const pa7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding: 16rem;
    }
  }
`
export const pa7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding: 16rem;
    }
  }
`
export const pb0 = css`padding-bottom: 0;`
export const pb0L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 0;
    }
  }
`
export const pb0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 0;
    }
  }
`
export const pb0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 0;
    }
  }
`
export const pb1 = css`padding-bottom: 0.25rem;`
export const pb1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 0.25rem;
    }
  }
`
export const pb1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 0.25rem;
    }
  }
`
export const pb1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 0.25rem;
    }
  }
`
export const pb2 = css`padding-bottom: 0.5rem;`
export const pb2L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 0.5rem;
    }
  }
`
export const pb2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 0.5rem;
    }
  }
`
export const pb2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 0.5rem;
    }
  }
`
export const pb3 = css`padding-bottom: 1rem;`
export const pb3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 1rem;
    }
  }
`
export const pb3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 1rem;
    }
  }
`
export const pb3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 1rem;
    }
  }
`
export const pb4 = css`padding-bottom: 2rem;`
export const pb4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 2rem;
    }
  }
`
export const pb4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 2rem;
    }
  }
`
export const pb4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 2rem;
    }
  }
`
export const pb5 = css`padding-bottom: 4rem;`
export const pb5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 4rem;
    }
  }
`
export const pb5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 4rem;
    }
  }
`
export const pb5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 4rem;
    }
  }
`
export const pb6 = css`padding-bottom: 8rem;`
export const pb6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 8rem;
    }
  }
`
export const pb6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 8rem;
    }
  }
`
export const pb6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 8rem;
    }
  }
`
export const pb7 = css`padding-bottom: 16rem;`
export const pb7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-bottom: 16rem;
    }
  }
`
export const pb7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-bottom: 16rem;
    }
  }
`
export const pb7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-bottom: 16rem;
    }
  }
`
export const ph0 = css`
  padding-left: 0;
  padding-right: 0;
`
export const ph0L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 0;
      padding-right: 0;
    }
  }
`
export const ph0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 0;
      padding-right: 0;
    }
  }
`
export const ph0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 0;
      padding-right: 0;
    }
  }
`
export const ph1 = css`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`
export const ph1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  }
`
export const ph1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  }
`
export const ph1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  }
`
export const ph2 = css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`
export const ph2L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`
export const ph2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`
export const ph2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`
export const ph3 = css`
  padding-left: 1rem;
  padding-right: 1rem;
`
export const ph3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`
export const ph3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`
export const ph3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`
export const ph4 = css`
  padding-left: 2rem;
  padding-right: 2rem;
`
export const ph4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`
export const ph4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`
export const ph4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`
export const ph5 = css`
  padding-left: 4rem;
  padding-right: 4rem;
`
export const ph5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`
export const ph5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`
export const ph5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`
export const ph6 = css`
  padding-left: 8rem;
  padding-right: 8rem;
`
export const ph6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
`
export const ph6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
`
export const ph6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
`
export const ph7 = css`
  padding-left: 16rem;
  padding-right: 16rem;
`
export const ph7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 16rem;
      padding-right: 16rem;
    }
  }
`
export const ph7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 16rem;
      padding-right: 16rem;
    }
  }
`
export const ph7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 16rem;
      padding-right: 16rem;
    }
  }
`
export const pink = css`color: #ff80cc;`
export const pl0 = css`padding-left: 0;`
export const pl0L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 0;
    }
  }
`
export const pl0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 0;
    }
  }
`
export const pl0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 0;
    }
  }
`
export const pl1 = css`padding-left: 0.25rem;`
export const pl1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 0.25rem;
    }
  }
`
export const pl1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 0.25rem;
    }
  }
`
export const pl1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 0.25rem;
    }
  }
`
export const pl2 = css`padding-left: 0.5rem;`
export const pl2L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 0.5rem;
    }
  }
`
export const pl2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 0.5rem;
    }
  }
`
export const pl2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 0.5rem;
    }
  }
`
export const pl3 = css`padding-left: 1rem;`
export const pl3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 1rem;
    }
  }
`
export const pl3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 1rem;
    }
  }
`
export const pl3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 1rem;
    }
  }
`
export const pl4 = css`padding-left: 2rem;`
export const pl4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 2rem;
    }
  }
`
export const pl4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 2rem;
    }
  }
`
export const pl4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 2rem;
    }
  }
`
export const pl5 = css`padding-left: 4rem;`
export const pl5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 4rem;
    }
  }
`
export const pl5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 4rem;
    }
  }
`
export const pl5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 4rem;
    }
  }
`
export const pl6 = css`padding-left: 8rem;`
export const pl6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 8rem;
    }
  }
`
export const pl6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 8rem;
    }
  }
`
export const pl6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 8rem;
    }
  }
`
export const pl7 = css`padding-left: 16rem;`
export const pl7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-left: 16rem;
    }
  }
`
export const pl7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-left: 16rem;
    }
  }
`
export const pl7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-left: 16rem;
    }
  }
`
export const pointer = css`
  &:hover {
    cursor: pointer;
  }
`
export const pr0 = css`padding-right: 0;`
export const pr0L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 0;
    }
  }
`
export const pr0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 0;
    }
  }
`
export const pr0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 0;
    }
  }
`
export const pr1 = css`padding-right: 0.25rem;`
export const pr1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 0.25rem;
    }
  }
`
export const pr1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 0.25rem;
    }
  }
`
export const pr1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 0.25rem;
    }
  }
`
export const pr2 = css`padding-right: 0.5rem;`
export const pr2L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 0.5rem;
    }
  }
`
export const pr2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 0.5rem;
    }
  }
`
export const pr2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 0.5rem;
    }
  }
`
export const pr3 = css`padding-right: 1rem;`
export const pr3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 1rem;
    }
  }
`
export const pr3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 1rem;
    }
  }
`
export const pr3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 1rem;
    }
  }
`
export const pr4 = css`padding-right: 2rem;`
export const pr4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 2rem;
    }
  }
`
export const pr4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 2rem;
    }
  }
`
export const pr4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 2rem;
    }
  }
`
export const pr5 = css`padding-right: 4rem;`
export const pr5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 4rem;
    }
  }
`
export const pr5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 4rem;
    }
  }
`
export const pr5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 4rem;
    }
  }
`
export const pr6 = css`padding-right: 8rem;`
export const pr6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 8rem;
    }
  }
`
export const pr6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 8rem;
    }
  }
`
export const pr6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 8rem;
    }
  }
`
export const pr7 = css`padding-right: 16rem;`
export const pr7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-right: 16rem;
    }
  }
`
export const pr7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-right: 16rem;
    }
  }
`
export const pr7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-right: 16rem;
    }
  }
`
export const pre = css`
  overflow-x: auto;
  overflow-y: hidden;
  overflow: scroll;
  white-space: pre;
`
export const preL = css`
  @media screen and (min-width: 60em) {
    & {
      white-space: pre;
    }
  }
`
export const preM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      white-space: pre;
    }
  }
`
export const preNs = css`
  @media screen and (min-width: 30em) {
    & {
      white-space: pre;
    }
  }
`
export const pt0 = css`padding-top: 0;`
export const pt0L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 0;
    }
  }
`
export const pt0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 0;
    }
  }
`
export const pt0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 0;
    }
  }
`
export const pt1 = css`padding-top: 0.25rem;`
export const pt1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 0.25rem;
    }
  }
`
export const pt1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 0.25rem;
    }
  }
`
export const pt1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 0.25rem;
    }
  }
`
export const pt2 = css`padding-top: 0.5rem;`
export const pt2L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 0.5rem;
    }
  }
`
export const pt2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 0.5rem;
    }
  }
`
export const pt2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 0.5rem;
    }
  }
`
export const pt3 = css`padding-top: 1rem;`
export const pt3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 1rem;
    }
  }
`
export const pt3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 1rem;
    }
  }
`
export const pt3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 1rem;
    }
  }
`
export const pt4 = css`padding-top: 2rem;`
export const pt4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 2rem;
    }
  }
`
export const pt4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 2rem;
    }
  }
`
export const pt4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 2rem;
    }
  }
`
export const pt5 = css`padding-top: 4rem;`
export const pt5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 4rem;
    }
  }
`
export const pt5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 4rem;
    }
  }
`
export const pt5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 4rem;
    }
  }
`
export const pt6 = css`padding-top: 8rem;`
export const pt6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 8rem;
    }
  }
`
export const pt6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 8rem;
    }
  }
`
export const pt6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 8rem;
    }
  }
`
export const pt7 = css`padding-top: 16rem;`
export const pt7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 16rem;
    }
  }
`
export const pt7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 16rem;
    }
  }
`
export const pt7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 16rem;
    }
  }
`
export const purple = css`color: #5e2ca5;`
export const pv0 = css`
  padding-top: 0;
  padding-bottom: 0;
`
export const pv0L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`
export const pv0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`
export const pv0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`
export const pv1 = css`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`
export const pv1L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
`
export const pv1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
`
export const pv1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
`
export const pv2 = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const pv2L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`
export const pv2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`
export const pv2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`
export const pv3 = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
export const pv3L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`
export const pv3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`
export const pv3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`
export const pv4 = css`
  padding-top: 2rem;
  padding-bottom: 2rem;
`
export const pv4L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
`
export const pv4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
`
export const pv4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
`
export const pv5 = css`
  padding-top: 4rem;
  padding-bottom: 4rem;
`
export const pv5L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
`
export const pv5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
`
export const pv5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
`
export const pv6 = css`
  padding-top: 8rem;
  padding-bottom: 8rem;
`
export const pv6L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
`
export const pv6M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
`
export const pv6Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
`
export const pv7 = css`
  padding-top: 16rem;
  padding-bottom: 16rem;
`
export const pv7L = css`
  @media screen and (min-width: 60em) {
    & {
      padding-top: 16rem;
      padding-bottom: 16rem;
    }
  }
`
export const pv7M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      padding-top: 16rem;
      padding-bottom: 16rem;
    }
  }
`
export const pv7Ns = css`
  @media screen and (min-width: 30em) {
    & {
      padding-top: 16rem;
      padding-bottom: 16rem;
    }
  }
`
export const red = css`color: #ff4136;`
export const relative = css`position: relative;`
export const relativeL = css`
  @media screen and (min-width: 60em) {
    & {
      position: relative;
    }
  }
`
export const relativeM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      position: relative;
    }
  }
`
export const relativeNs = css`
  @media screen and (min-width: 30em) {
    & {
      position: relative;
    }
  }
`
export const right1 = css`right: -1rem;`
export const right1L = css`
  @media screen and (min-width: 60em) {
    & {
      right: -1rem;
    }
  }
`
export const right1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      right: -1rem;
    }
  }
`
export const right1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      right: -1rem;
    }
  }
`
export const right2 = css`right: -2rem;`
export const right2L = css`
  @media screen and (min-width: 60em) {
    & {
      right: -2rem;
    }
  }
`
export const right2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      right: -2rem;
    }
  }
`
export const right2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      right: -2rem;
    }
  }
`
export const right0 = css`right: 0;`
export const right0L = css`
  @media screen and (min-width: 60em) {
    & {
      right: 0;
    }
  }
`
export const right0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      right: 0;
    }
  }
`
export const right0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      right: 0;
    }
  }
`
export const rotate45 = css`
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`
export const rotate45L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
export const rotate45M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
export const rotate45Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
export const rotate90 = css`
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
`
export const rotate90L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`
export const rotate90M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`
export const rotate90Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`
export const rotate135 = css`
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
`
export const rotate135L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }
`
export const rotate135M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }
`
export const rotate135Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }
`
export const rotate180 = css`
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
`
export const rotate180L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
`
export const rotate180M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
`
export const rotate180Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
`
export const rotate225 = css`
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
`
export const rotate225L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-transform: rotate(225deg);
      transform: rotate(225deg);
    }
  }
`
export const rotate225M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-transform: rotate(225deg);
      transform: rotate(225deg);
    }
  }
`
export const rotate225Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-transform: rotate(225deg);
      transform: rotate(225deg);
    }
  }
`
export const rotate270 = css`
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
`
export const rotate270L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }
`
export const rotate270M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }
`
export const rotate270Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }
`
export const rotate315 = css`
  -webkit-transform: rotate(315deg);
  transform: rotate(315deg);
`
export const rotate315L = css`
  @media screen and (min-width: 60em) {
    & {
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
    }
  }
`
export const rotate315M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
    }
  }
`
export const rotate315Ns = css`
  @media screen and (min-width: 30em) {
    & {
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
    }
  }
`
export const sansSerif = css`
  font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
    'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
    sans-serif;
`
export const selfBaseline = css`
  -ms-flex-item-align: baseline;
  align-self: baseline;
`
export const selfBaselineL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-item-align: baseline;
      align-self: baseline;
    }
  }
`
export const selfBaselineM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-item-align: baseline;
      align-self: baseline;
    }
  }
`
export const selfBaselineNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-item-align: baseline;
      align-self: baseline;
    }
  }
`
export const selfCenter = css`
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
`
export const selfCenterL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
    }
  }
`
export const selfCenterM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
    }
  }
`
export const selfCenterNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
    }
  }
`
export const selfEnd = css`
  -ms-flex-item-align: end;
  align-self: flex-end;
`
export const selfEndL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-item-align: end;
      align-self: flex-end;
    }
  }
`
export const selfEndM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-item-align: end;
      align-self: flex-end;
    }
  }
`
export const selfEndNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-item-align: end;
      align-self: flex-end;
    }
  }
`
export const selfStart = css`
  -ms-flex-item-align: start;
  align-self: flex-start;
`
export const selfStartL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-item-align: start;
      align-self: flex-start;
    }
  }
`
export const selfStartM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-item-align: start;
      align-self: flex-start;
    }
  }
`
export const selfStartNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-item-align: start;
      align-self: flex-start;
    }
  }
`
export const selfStretch = css`
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;
`
export const selfStretchL = css`
  @media screen and (min-width: 60em) {
    & {
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch;
    }
  }
`
export const selfStretchM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch;
    }
  }
`
export const selfStretchNs = css`
  @media screen and (min-width: 30em) {
    & {
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch;
    }
  }
`
export const serif = css`font-family: georgia, times, serif;`
export const shadow1 = css`box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);`
export const shadow1L = css`
  @media screen and (min-width: 60em) {
    & {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow2 = css`box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);`
export const shadow2L = css`
  @media screen and (min-width: 60em) {
    & {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow3 = css`box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);`
export const shadow3L = css`
  @media screen and (min-width: 60em) {
    & {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow4 = css`box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);`
export const shadow4L = css`
  @media screen and (min-width: 60em) {
    & {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow5 = css`box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);`
export const shadow5L = css`
  @media screen and (min-width: 60em) {
    & {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadow5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
`
export const shadowHover = css`
  cursor: pointer;
  position: relative;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  &::after {
    content: '';
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
    border-radius: inherit;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
`
export const silver = css`color: #999;`
export const smallCaps = css`font-variant: small-caps;`
export const smallCapsL = css`
  @media screen and (min-width: 60em) {
    & {
      font-variant: small-caps;
    }
  }
`
export const smallCapsM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      font-variant: small-caps;
    }
  }
`
export const smallCapsNs = css`
  @media screen and (min-width: 30em) {
    & {
      font-variant: small-caps;
    }
  }
`
export const staticL = css`
  @media screen and (min-width: 60em) {
    & {
      position: static;
    }
  }
`
export const staticM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      position: static;
    }
  }
`
export const staticNs = css`
  @media screen and (min-width: 30em) {
    & {
      position: static;
    }
  }
`
export const strike = css`text-decoration: line-through;`
export const strikeL = css`
  @media screen and (min-width: 60em) {
    & {
      text-decoration: line-through;
    }
  }
`
export const strikeM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-decoration: line-through;
    }
  }
`
export const strikeNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-decoration: line-through;
    }
  }
`
export const stripeDark = css`
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const stripeLight = css`
  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
export const stripedLightGray = css`
  &:nth-child(odd) {
    background-color: #eee;
  }
`
export const stripedLightSilver = css`
  &:nth-child(odd) {
    background-color: #aaa;
  }
`
export const stripedMoonGray = css`
  &:nth-child(odd) {
    background-color: #ccc;
  }
`
export const stripedNearWhite = css`
  &:nth-child(odd) {
    background-color: #f4f4f4;
  }
`
export const systemSansSerif = css`font-family: sans-serif;`
export const systemSerif = css`font-family: serif;`
export const tc = css`text-align: center;`
export const tcL = css`
  @media screen and (min-width: 60em) {
    & {
      text-align: center;
    }
  }
`
export const tcM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-align: center;
    }
  }
`
export const tcNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-align: center;
    }
  }
`
export const times = css`font-family: times, serif;`
export const tj = css`text-align: justify;`
export const tjL = css`
  @media screen and (min-width: 60em) {
    & {
      text-align: justify;
    }
  }
`
export const tjM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-align: justify;
    }
  }
`
export const tjNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-align: justify;
    }
  }
`
export const tl = css`text-align: left;`
export const tlL = css`
  @media screen and (min-width: 60em) {
    & {
      text-align: left;
    }
  }
`
export const tlM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-align: left;
    }
  }
`
export const tlNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-align: left;
    }
  }
`
export const top1 = css`top: -1rem;`
export const top1L = css`
  @media screen and (min-width: 60em) {
    & {
      top: -1rem;
    }
  }
`
export const top1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      top: -1rem;
    }
  }
`
export const top1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      top: -1rem;
    }
  }
`
export const top2 = css`top: -2rem;`
export const top2L = css`
  @media screen and (min-width: 60em) {
    & {
      top: -2rem;
    }
  }
`
export const top2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      top: -2rem;
    }
  }
`
export const top2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      top: -2rem;
    }
  }
`
export const top0 = css`top: 0;`
export const top0L = css`
  @media screen and (min-width: 60em) {
    & {
      top: 0;
    }
  }
`
export const top0M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      top: 0;
    }
  }
`
export const top0Ns = css`
  @media screen and (min-width: 30em) {
    & {
      top: 0;
    }
  }
`
export const tr = css`text-align: right;`
export const trL = css`
  @media screen and (min-width: 60em) {
    & {
      text-align: right;
    }
  }
`
export const trM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-align: right;
    }
  }
`
export const trNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-align: right;
    }
  }
`
export const tracked = css`letter-spacing: 0.1em;`
export const trackedL = css`
  @media screen and (min-width: 60em) {
    & {
      letter-spacing: 0.1em;
    }
  }
`
export const trackedM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      letter-spacing: 0.1em;
    }
  }
`
export const trackedMega = css`letter-spacing: 0.25em;`
export const trackedMegaL = css`
  @media screen and (min-width: 60em) {
    & {
      letter-spacing: 0.25em;
    }
  }
`
export const trackedMegaM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      letter-spacing: 0.25em;
    }
  }
`
export const trackedMegaNs = css`
  @media screen and (min-width: 30em) {
    & {
      letter-spacing: 0.25em;
    }
  }
`
export const trackedNs = css`
  @media screen and (min-width: 30em) {
    & {
      letter-spacing: 0.1em;
    }
  }
`
export const trackedTight = css`letter-spacing: -0.05em;`
export const trackedTightL = css`
  @media screen and (min-width: 60em) {
    & {
      letter-spacing: -0.05em;
    }
  }
`
export const trackedTightM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      letter-spacing: -0.05em;
    }
  }
`
export const trackedTightNs = css`
  @media screen and (min-width: 30em) {
    & {
      letter-spacing: -0.05em;
    }
  }
`
export const truncate = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const truncateL = css`
  @media screen and (min-width: 60em) {
    & {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
export const truncateM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
export const truncateNs = css`
  @media screen and (min-width: 30em) {
    & {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
export const ttc = css`text-transform: capitalize;`
export const ttcL = css`
  @media screen and (min-width: 60em) {
    & {
      text-transform: capitalize;
    }
  }
`
export const ttcM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-transform: capitalize;
    }
  }
`
export const ttcNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-transform: capitalize;
    }
  }
`
export const ttl = css`text-transform: lowercase;`
export const ttlL = css`
  @media screen and (min-width: 60em) {
    & {
      text-transform: lowercase;
    }
  }
`
export const ttlM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-transform: lowercase;
    }
  }
`
export const ttlNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-transform: lowercase;
    }
  }
`
export const ttn = css`text-transform: none;`
export const ttnL = css`
  @media screen and (min-width: 60em) {
    & {
      text-transform: none;
    }
  }
`
export const ttnM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-transform: none;
    }
  }
`
export const ttnNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-transform: none;
    }
  }
`
export const ttu = css`text-transform: uppercase;`
export const ttuL = css`
  @media screen and (min-width: 60em) {
    & {
      text-transform: uppercase;
    }
  }
`
export const ttuM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-transform: uppercase;
    }
  }
`
export const ttuNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-transform: uppercase;
    }
  }
`
export const underline = css`text-decoration: underline;`
export const underlineHover = css`
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
export const underlineL = css`
  @media screen and (min-width: 60em) {
    & {
      text-decoration: underline;
    }
  }
`
export const underlineM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      text-decoration: underline;
    }
  }
`
export const underlineNs = css`
  @media screen and (min-width: 30em) {
    & {
      text-decoration: underline;
    }
  }
`
export const vBase = css`vertical-align: baseline;`
export const vBaseL = css`
  @media screen and (min-width: 60em) {
    & {
      vertical-align: baseline;
    }
  }
`
export const vBaseM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      vertical-align: baseline;
    }
  }
`
export const vBaseNs = css`
  @media screen and (min-width: 30em) {
    & {
      vertical-align: baseline;
    }
  }
`
export const vBtm = css`vertical-align: bottom;`
export const vBtmL = css`
  @media screen and (min-width: 60em) {
    & {
      vertical-align: bottom;
    }
  }
`
export const vBtmM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      vertical-align: bottom;
    }
  }
`
export const vBtmNs = css`
  @media screen and (min-width: 30em) {
    & {
      vertical-align: bottom;
    }
  }
`
export const vMid = css`vertical-align: middle;`
export const vMidL = css`
  @media screen and (min-width: 60em) {
    & {
      vertical-align: middle;
    }
  }
`
export const vMidM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      vertical-align: middle;
    }
  }
`
export const vMidNs = css`
  @media screen and (min-width: 30em) {
    & {
      vertical-align: middle;
    }
  }
`
export const vTop = css`vertical-align: top;`
export const vTopL = css`
  @media screen and (min-width: 60em) {
    & {
      vertical-align: top;
    }
  }
`
export const vTopM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      vertical-align: top;
    }
  }
`
export const vTopNs = css`
  @media screen and (min-width: 30em) {
    & {
      vertical-align: top;
    }
  }
`
export const vh25 = css`height: 25vh;`
export const vh25L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 25vh;
    }
  }
`
export const vh25M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 25vh;
    }
  }
`
export const vh25Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 25vh;
    }
  }
`
export const vh50 = css`height: 50vh;`
export const vh50L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 50vh;
    }
  }
`
export const vh50M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 50vh;
    }
  }
`
export const vh50Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 50vh;
    }
  }
`
export const vh75 = css`height: 75vh;`
export const vh75L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 75vh;
    }
  }
`
export const vh75M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 75vh;
    }
  }
`
export const vh75Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 75vh;
    }
  }
`
export const vh100 = css`height: 100vh;`
export const vh100L = css`
  @media screen and (min-width: 60em) {
    & {
      height: 100vh;
    }
  }
`
export const vh100M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      height: 100vh;
    }
  }
`
export const vh100Ns = css`
  @media screen and (min-width: 30em) {
    & {
      height: 100vh;
    }
  }
`
export const w10 = css`width: 10%;`
export const w10L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 10%;
    }
  }
`
export const w10M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 10%;
    }
  }
`
export const w10Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 10%;
    }
  }
`
export const w20 = css`width: 20%;`
export const w20L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 20%;
    }
  }
`
export const w20M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 20%;
    }
  }
`
export const w20Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 20%;
    }
  }
`
export const w25 = css`width: 25%;`
export const w25L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 25%;
    }
  }
`
export const w25M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 25%;
    }
  }
`
export const w25Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 25%;
    }
  }
`
export const w30 = css`width: 30%;`
export const w30L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 30%;
    }
  }
`
export const w30M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 30%;
    }
  }
`
export const w30Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 30%;
    }
  }
`
export const w33 = css`width: 33%;`
export const w33L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 33%;
    }
  }
`
export const w33M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 33%;
    }
  }
`
export const w33Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 33%;
    }
  }
`
export const w34 = css`width: 34%;`
export const w34L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 34%;
    }
  }
`
export const w34M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 34%;
    }
  }
`
export const w34Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 34%;
    }
  }
`
export const w40 = css`width: 40%;`
export const w40L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 40%;
    }
  }
`
export const w40M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 40%;
    }
  }
`
export const w40Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 40%;
    }
  }
`
export const w50 = css`width: 50%;`
export const w50L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 50%;
    }
  }
`
export const w50M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 50%;
    }
  }
`
export const w50Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 50%;
    }
  }
`
export const w60 = css`width: 60%;`
export const w60L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 60%;
    }
  }
`
export const w60M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 60%;
    }
  }
`
export const w60Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 60%;
    }
  }
`
export const w70 = css`width: 70%;`
export const w70L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 70%;
    }
  }
`
export const w70M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 70%;
    }
  }
`
export const w70Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 70%;
    }
  }
`
export const w75 = css`width: 75%;`
export const w75L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 75%;
    }
  }
`
export const w75M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 75%;
    }
  }
`
export const w75Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 75%;
    }
  }
`
export const w80 = css`width: 80%;`
export const w80L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 80%;
    }
  }
`
export const w80M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 80%;
    }
  }
`
export const w80Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 80%;
    }
  }
`
export const w90 = css`width: 90%;`
export const w90L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 90%;
    }
  }
`
export const w90M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 90%;
    }
  }
`
export const w90Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 90%;
    }
  }
`
export const w100 = css`width: 100%;`
export const w100L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 100%;
    }
  }
`
export const w100M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 100%;
    }
  }
`
export const w100Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 100%;
    }
  }
`
export const wAuto = css`width: auto;`
export const wAutoL = css`
  @media screen and (min-width: 60em) {
    & {
      width: auto;
    }
  }
`
export const wAutoM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: auto;
    }
  }
`
export const wAutoNs = css`
  @media screen and (min-width: 30em) {
    & {
      width: auto;
    }
  }
`
export const wThird = css`width: calc(100% / 3);`
export const wThirdL = css`
  @media screen and (min-width: 60em) {
    & {
      width: calc(100% / 3);
    }
  }
`
export const wThirdM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: calc(100% / 3);
    }
  }
`
export const wThirdNs = css`
  @media screen and (min-width: 30em) {
    & {
      width: calc(100% / 3);
    }
  }
`
export const wTwoThirds = css`width: calc(100% / 1.5);`
export const wTwoThirdsL = css`
  @media screen and (min-width: 60em) {
    & {
      width: calc(100% / 1.5);
    }
  }
`
export const wTwoThirdsM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: calc(100% / 1.5);
    }
  }
`
export const wTwoThirdsNs = css`
  @media screen and (min-width: 30em) {
    & {
      width: calc(100% / 1.5);
    }
  }
`
export const w1 = css`width: 1rem;`
export const w1L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 1rem;
    }
  }
`
export const w1M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 1rem;
    }
  }
`
export const w1Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 1rem;
    }
  }
`
export const w2 = css`width: 2rem;`
export const w2L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 2rem;
    }
  }
`
export const w2M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 2rem;
    }
  }
`
export const w2Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 2rem;
    }
  }
`
export const w3 = css`width: 4rem;`
export const w3L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 4rem;
    }
  }
`
export const w3M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 4rem;
    }
  }
`
export const w3Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 4rem;
    }
  }
`
export const w4 = css`width: 8rem;`
export const w4L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 8rem;
    }
  }
`
export const w4M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 8rem;
    }
  }
`
export const w4Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 8rem;
    }
  }
`
export const w5 = css`width: 16rem;`
export const w5L = css`
  @media screen and (min-width: 60em) {
    & {
      width: 16rem;
    }
  }
`
export const w5M = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      width: 16rem;
    }
  }
`
export const w5Ns = css`
  @media screen and (min-width: 30em) {
    & {
      width: 16rem;
    }
  }
`
export const washedBlue = css`color: #f6fffe;`
export const washedGreen = css`color: #e8fdf5;`
export const washedRed = css`color: #ffdfdf;`
export const washedYellow = css`color: #fffceb;`
export const white = css`color: #fff;`
export const white10 = css`color: rgba(255, 255, 255, 0.1);`
export const white20 = css`color: rgba(255, 255, 255, 0.2);`
export const white30 = css`color: rgba(255, 255, 255, 0.3);`
export const white40 = css`color: rgba(255, 255, 255, 0.4);`
export const white50 = css`color: rgba(255, 255, 255, 0.5);`
export const white60 = css`color: rgba(255, 255, 255, 0.6);`
export const white70 = css`color: rgba(255, 255, 255, 0.7);`
export const white80 = css`color: rgba(255, 255, 255, 0.8);`
export const white90 = css`color: rgba(255, 255, 255, 0.9);`
export const wsNormal = css`white-space: normal;`
export const wsNormalL = css`
  @media screen and (min-width: 60em) {
    & {
      white-space: normal;
    }
  }
`
export const wsNormalM = css`
  @media screen and (min-width: 30em) and (max-width: 60em) {
    & {
      white-space: normal;
    }
  }
`
export const wsNormalNs = css`
  @media screen and (min-width: 30em) {
    & {
      white-space: normal;
    }
  }
`

export const yellow = css`color: #ffd700;`
export const z0 = css`z-index: 0;`
export const z1 = css`z-index: 1;`
export const z2 = css`z-index: 2;`
export const z3 = css`z-index: 3;`
export const z4 = css`z-index: 4;`
export const z5 = css`z-index: 5;`
export const z999 = css`z-index: 999;`
export const z9999 = css`z-index: 9999;`
export const zInherit = css`z-index: inherit;`
export const zInitial = css`z-index: initial;`
export const zMax = css`z-index: 2147483647;`
export const zUnset = css`z-index: unset;`
