import styled from 'styled-components';

export const Container = styled.div`
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 3rem;

    ul {
        list-style: none;
    }

    .projects {
        margin: 1.5rem 0;
    }

    .projects ul {
        padding: .5rem 0;
    } 

    .projects ul li {
        padding: .4rem 0;
    } 

    .projects ul li a {
        color: #39ADEE;
        font-weight: 600;
        text-decoration: none;
        transition: all .5s;

        &:hover {
            color: #0C84C8;
        }
    } 

    .social ul li{
        display: inline-block;
    }

    .social ul li a {
        color: #131313;
        font-size: 26px;
        padding-right: 1.4rem;
    }

    @media only screen and (max-width: 768px) {
        align-items: center;

        figure img {
            width: 200px;
        }

        .projects {
            display: none;
        }
        
        .social {
            margin: 1.5rem 0 0;
        }

        .social ul li a {
            padding: 1rem;
        }
    }
`;