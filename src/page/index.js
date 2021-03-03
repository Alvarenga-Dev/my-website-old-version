import React, { Fragment } from 'react';
import About from '../components/About';
import Profile from '../components/Profile';

import { Container, Footer } from './style';

const Page = () => (
    <Fragment>
        <Container>
            <About />
            <Profile />
        </Container>
        <Footer>
            <p>Copyright © {new Date().getFullYear()} | Design by Lucas Alvarenga<span role="img" aria-label="Raio">⚡</span></p>
        </Footer>
    </Fragment>
);

export default Page;
