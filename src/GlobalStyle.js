import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.color.background};
        transition: 0.5s;
        letter-spacing: 0.05em;
    }
`;
