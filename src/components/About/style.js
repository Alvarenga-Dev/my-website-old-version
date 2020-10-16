import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem 2rem 4rem;
`;

export const Header = styled.header`
    .logo {
        margin-top: 2rem;
    }

    h1 {
        font-size: 2.6em;
        font-weight: 500;
        margin: 3rem 0 2rem;
    }

    h2 {
        font-size: 1.6em;
        font-style: bold;
        margin: 1rem 0;
    }

    @media only screen and (max-width: 1024px) {
        h1 {
            font-size: 2.2em;
        }

        h2 {
            font-size: 1.2em;
        }
    }
`;

export const Content = styled.section`
    p {
        font-size: 1.1em;
        line-height: 150%;
        margin: 1.2rem 0;
    }

    @media only screen and (max-width: 1024px) {
        font-size: .8em;
    }
`;