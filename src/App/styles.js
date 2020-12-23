import { createGlobalStyle, css } from 'styled-components';
import { IRON, SILVER } from 'global/colors';

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  body {
    font-family: Arial, sans-serif;
  }
  button {
    outline: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  html, body, #root {
    height: 100%;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${SILVER};
 }
 ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${SILVER};
 }
 ::placeholder { /* Most modern browsers support this now. */
  color: ${SILVER};
 }

 .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: ${IRON} transparent;
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background: transparent; 
    }
    ::-webkit-scrollbar-thumb {
      background: ${IRON}; 
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
 }

 form {
   width: 100%;
   box-sizing: border-box;
 }

 button {
   cursor: pointer;
 }
`;

export default GlobalStyles;