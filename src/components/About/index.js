import React from 'react';

import { Container, Header, Content } from './style';

import logo from '../../assets/my-logo.png';

const About = () => (
        <Container>
            <Header>
                <img src={logo} alt="Minha Logo é formada por uma letra 'L' e uma letra 'A' com tonalidade azul-claro." /> 
                <h1>Desenvolvedor Android e criador de conteúdo nas horas vagas. <span role="img" aria-label="Mão">✌🏻</span></h1>
                <h2>Quem sou eu? <span role="img" aria-label="Cara pensativa">🤔</span></h2>
            </Header>

            <Content>
                <p>Olá, me chamo Lucas Alvarenga, sou desenvolvedor Android apaixonado pelo meu trabalho.</p>

                <p>Tenho contato com a área de programação desde dos meus 13 anos e, assim, pude ter contato com o desenvolvimento mobile e web, mas sempre gostei do desenvolvimento Android nativo com Java e Kotlin. Dessa forma, me concentrei em aprender as principais arquiteturas, bibliotecas e boas práticas de codificação. Sou um Dev que ama ter um código organizado para fácil manutenção e entendimento.</p>

                <p>Atualmente, sou Desenvolvedor Android na Bornlogic que é uma empresa de tecnologia com foco em performance em anunciantes digitais e sendo parceira de Negócios e AdTech do Facebook, Google e Tableau.</p>

                <p>Desde do começo da minha trajetória, criei o perfil @alvarenga.dev no instagram com o intuito de compartilhar conhecimento e ajudar outros a começarem com o “pé direito”.</p>
            </Content>
        </Container>
)

export default About;
