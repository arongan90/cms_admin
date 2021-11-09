import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    body::-webkit-scrollbar {display: none;}
  }
  a {
    text-decoration: none;
  }
  input:focus {
    outline:none;
  }
  button {
    cursor: pointer;
  }
  table {
    padding: 0;
    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  th, td {
    padding: 0;
    background: inherit;
    border: none;
    vertical-align: middle;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;