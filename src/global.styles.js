import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body,
    #root {
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #e3f2fd;
    }

    * {
        box-sizing: border-box;
        font-family: 'Poppins', serif;
    }

`;