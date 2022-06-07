import React from 'react';

import {
    AiOutlineMail,
    AiOutlinePhone
} from 'react-icons/ai';

import {
    CompanyContainer,
    FooterWrapper,
    LinkList,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

import {presentYear} from '../../utils/utils';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>
                    <span>
                        {`Vin - Web Developer and Application Developer - ${presentYear}`}
                    </span>
                    </Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <a  style={{color: "white"}} href='mailto:ginesrodriguezz15@gmail.com'>
                        <AiOutlineMail size={30}/>
                    </a>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
