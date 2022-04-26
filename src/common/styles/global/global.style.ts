import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`;
