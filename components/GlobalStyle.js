import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  
  body{
    font-size: 15px;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;