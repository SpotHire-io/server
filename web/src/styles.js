import { css, injectGlobal } from "emotion";

export const animateAll = css`transition: all 0.15s ease-in;`;

export const f5 = css`font-size: 1rem;`;

export const inputReset = css`
  -webkit-appearance: none;
  -moz-appearance: none;
`;


export const animationImageCheckboxEnter = css`
  &,
  & .Checkbox_box {
    position: absolute;
    left: 0;
    top: 0;

    transform: scale(0) !important;
  }
`;

export const animationImageCheckboxEnterActive = css`
  &,
  & .Checkbox_box {
    transform: scale(1) !important;
    transition: transform 150ms ease-in !important;
  }
`;

export const animationImageCheckboxLeave = css`
  &,
  & .Checkbox_box {
    position: absolute;
    left: 0;
    top: 0;

    transform: scale(1) !important;
  }
`;

export const animationImageCheckboxLeaveActive = css`
  &,
  & .Checkbox_box {
    transform: scale(0) !important;
    transition: transform 150ms ease-in !important;
  }
`;

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
`;
export const animateShadow = css`transition: box-shadow 0.15s;`;
export const animationShiftTabEnter = css`
  &,
  & + li.shift-tab--new-shift {
    transform: translateY(-100%);
    z-index: 0;
  }
`;
export const animationShiftTabEnterActive = css`
  &,
  & + li.shift-tab--new-shift {
    transform: translateX(0);
    transition: transform 100ms ease-in;
    z-index: 0;
  }
`;
export const appSans = css`@extend ff-app-sans;`;
export const appSerif = css`font-family: Georgia, serif;`;
export const bTeal = css`border-color: #5ab6b2;`;
export const bgTeal = css`background-color: #5ab6b2;`;
export const button = css`
  border: 0;
  font-family: "Source Sans Pro", "Avenir Next", "Avenir",
    -system-sans-serif, sans-serif;
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
`;
export const buttonIconMinus = css`
  &:before {
    content: "–";
  }
`;
export const buttonIconPlus = css`
  &:before {
    content: "+";
  }
`;
export const buttonLeft = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
export const buttonMiddle = css`
  border-radius: 0;
  border-left-width: 0;
  border-right-width: 0;
`;
export const buttonNegative = css`
  background: rgb(231, 4, 15);
  color: #ffffff;
  &:hover {
    background: rgb(221, 0, 5);
  }
`;
export const buttonNeutral = css`
  background: #777777;
  color: #ffffff;
  &:hover {
    background: rgb(111, 111, 111);
  }
`;
export const buttonStandard = css`
  background: rgb(84, 119, 166);
  color: #ffffff;
  &:hover {
    background: rgb(76, 111, 158);
  }
`;
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
`;
export const buttonPositive = css`
  background: rgb(19, 119, 82);
  color: #ffffff;
  &:hover {
    background: rgb(11, 111, 74);
  }
`;
export const buttonRight = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
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
`;
export const dateInput = css`
  @extend input-box;
  border: 0;
`;
export const dateInputDisplayText = css`padding: 0;`;
export const dateInputDisplayTextHasInput = css`color: #333333;`;
export const dayPicker = css`@extend ff-app-sans;`;
export const dayPickerWeekHeader = css`
  margin-top: -0.85rem; /* fix overlap with calendar items */
`;
export const h6 = css`height: 32rem;`;
export const hoverBTeal = css`
  &:hover,
  &:focus {
    border-color: #5ab6b2;
  }
`;
export const hoverBWhite40 = css`
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
`;
export const hoverBgTeal = css`
  &:hover,
  &:focus {
    background-color: #5ab6b2;
  }
`;
export const hoverBl = css`
  &:hover {
    border-left-style: solid;
  }
`;
export const hoverBr = css`
  &:hover {
    border-right-style: solid;
  }
`;
export const hoverNoUnderline = css`
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
export const hoverTeal = css`
  &:hover,
  &:focus {
    color: #5ab6b2;
  }
`;
export const maxH1 = css`max-height: 1rem;`;
export const maxH2 = css`max-height: 2rem;`;
export const maxH3 = css`max-height: 4rem;`;
export const maxH4 = css`max-height: 8rem;`;
export const maxH5 = css`max-height: 16rem;`;
export const maxH6 = css`max-height: 32rem;`;
export const maxH7 = css`max-height: 48rem;`;
export const maxH8 = css`max-height: 64rem;`;
export const maxH9 = css`max-height: 96rem;`;
export const noSelect = css`user-select: none;`;
export const rbcAgendaContent = css`
  overflow: auto;
  & > table {
    border-collapse: collapse;
  }
`;
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
`;
export const rbcEvent = css`
  background-color: #5ab6b2;
  border-radius: 0.125rem;
`;
export const rbcAltBg = css`
  & .${rbcEvent} {
    z-index: 1;
    background-color: #777777;
  }
`;
export const rbcDaySlot = css`
  & .${rbcEvent} {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;
export const rcTimePicker = css`width: 100%;`;
export const rcTimePickerInput = css`
  height: auto;
  @extend ff-app-sans;
  @extend input-box;
`;
export const rcTimePickerPanelInner = css`
  @extend ff-app-sans;
  @extend input-box;
  padding: 0;
  margin-top: 2px;
`;
export const rcTimePickerPanelInput = css`
  @extend ff-app-sans;
  border-width: 0;
`;
export const rcTimePickerPanelInputWrap = css`padding: 0.5rem;`;
export const rcTimePickerPanelSelect = css`
  font-size: 0.875rem;
  & li {
    padding-left: 0.75rem;
  }
`;
export const reactableHeaderSortAsc = css`
  th&:after {
    position: relative;
    top: -1px;
    left: 7px;
  }
  th&:after {
    content: "\\25BC";
    font-size: 9px; /* Looks larger than the other, so bump the font-size a px */
  }
`;
export const reactableHeaderSortDesc = css`
  th&:after {
    position: relative;
    top: -1px;
    left: 7px;
  }
  th&:after {
    content: "\\25B2";
    font-size: 10px;
  }
`;
export const reactModalBodyOpen = css`overflow: hidden;`;
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
`;
export const shInsetShadow1 = css`
  box-shadow: inset 0px 0px 20px 2px rgba(0, 0, 0, 0.2);
`;
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
`;
export const shModalFull = css`
  left: 4rem;
  right: 4rem;
  bottom: 4rem;
  max-height: 100%;
`;
export const shModalOverlay = css`
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;
export const shRebassCheckboxMr0 = css`
  & .Checkbox_box {
    margin-right: 0 !important;
  }
`;
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
`;
export const shShadow1 = css`
  box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 0.2);
`;
export const shShadow2 = css`
  box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.2);
`;
export const singleDatePicker = css`width: 100%;`;
export const singleDatePickerPickerPortal = css`
  z-index: 11; /* above react-modal */
`;
export const singleDatePickerInput = css`border-color: #cccccc;`;
export const tableLayoutFixed = css`table-layout: fixed;`;
export const teal = css`color: #5ab6b2;`;
export const transparent = css`color: transparent;`;
export const w15 = css`width: 15%;`;

