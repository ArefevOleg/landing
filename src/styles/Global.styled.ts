import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    body {
        margin: 0;
        font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        line-height: 1.2;
        background-color: rgba(23, 23, 23, 1);
        min-width: 360px; // обязательно!!!!
    }

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`