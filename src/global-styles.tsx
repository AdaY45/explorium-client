import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #ADFF33;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Commissioner', sans-serif;
        background-color: #EEEEEA;
    }
`;