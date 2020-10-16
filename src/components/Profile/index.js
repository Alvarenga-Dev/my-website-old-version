import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import { Container } from './style'

import photo from '../../assets/my-photo.png';

const Profile = () => (
    <Container>
            <figure>
                <img src={photo} alt="Esse sou eu: um cara de cabelo preto, que usa um óculos preto com um estilo retro, de olhos castanhos bem escuros e com uma pela de tonalidade branca. Na foto utilizo uma camisa social da cor vinho." />
            </figure>

            <div className="projects">
                <h2>Projetos</h2>
                <ul>
                    <li><a href="https://github.com/Alvarenga-Dev/Time-to-Sleep" target="_blank" rel="noopener noreferrer" title="Time to Sleep">Time to Sleep <FiExternalLink /></a></li>
                    <li><a href="https://github.com/Alvarenga-Dev/Movie-Reviews" target="_blank" rel="noopener noreferrer" title="Movie Reviews">Movie Reviews <FiExternalLink /></a></li>
                    <li><a href="https://github.com/Alvarenga-Dev/Favorite-Movies" target="_blank" rel="noopener noreferrer" title="Favorites Movie">Favorites Movie <FiExternalLink /></a></li>
                    <li><a href="https://github.com/Alvarenga-Dev/Alva-Messenger" target="_blank" rel="noopener noreferrer" title="Alva Messenger">Alva Messenger <FiExternalLink /></a></li>
                </ul>
            </div>

            <div className="social"> 
                <ul>
                    <li><a href="https://www.instagram.com/alvarenga.dev/" target="_blank" rel="noopener noreferrer" title="Instagram"> <FaInstagram /> </a></li>
                    <li><a href="https://www.linkedin.com/in/llucasallvarenga/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> <FaLinkedin /> </a></li>
                    <li><a href="https://github.com/Alvarenga-Dev" target="_blank" rel="noopener noreferrer" title="Github"> <FaGithub /> </a></li>
                </ul>
            </div>
        </Container>
)

export default Profile;
