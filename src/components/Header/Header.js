import React from 'react';
import Link from 'next/link';

import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';

import {Container, IconNavBar, NavBarItems, NavLink, SocialIcons, Span, SocialMediaCol} from './HeaderStyles';

const Header = () => (
    <Container id='nav'>
        <IconNavBar>
            <Link href="/">
                <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                    <DiCssdeck size={30}/> <Span>Vin</Span>
                </a>
            </Link>
        </IconNavBar>
        <NavBarItems>
            <li>
                <Link href="#above">
                    <NavLink>About me</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
        </NavBarItems>
        <SocialMediaCol>
            <SocialIcons href='https://github.com/VinIsDev'>
                <AiFillGithub size={30}/>
            </SocialIcons>
            <SocialIcons href='https://twitter.com/ginesrodriguezz'>
                <AiFillTwitterCircle size={30}/>
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/gin%C3%A9s-rodriguez-sherstnova-901649230/'>
                <AiFillLinkedin size={30}/>
            </SocialIcons>
        </SocialMediaCol>
    </Container>
);

export default Header;
