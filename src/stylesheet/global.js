import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body {
        background: #F8F7FC;
        font-family: 'Raleway', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body::-webkit-scrollbar {
        width: .8em;
    }

    body::-webkit-scrollbar-track {
        background: #F8F7FC;
    }

    body::-webkit-scrollbar-thumb {
        background: #131313;
        background-size: 100%;
        border-radius: 1em;
    }

`;

export default GlobalStyle;
