import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: rgb(255,0,255);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: grid;
    grid-template-areas: "header" "main";
    grid-template-rows: 15vh 85vh;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: rgb(101,118,142);
    background: radial-gradient(circle, rgba(101,118,142,1) 0%, rgba(71,90,117,1) 33%, rgba(32,40,51,1) 100%);
    /* height: 100vh; */
    background-repeat: no-repeat;
    background-position: center;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
