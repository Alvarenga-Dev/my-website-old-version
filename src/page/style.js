import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Footer = styled.footer`
    p {
        text-align: center;
        height: 100%;
        padding: 2rem;
    }
`;