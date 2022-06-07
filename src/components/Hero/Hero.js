import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to my <br/>
                Portafolio
            </SectionTitle>
            <SectionText>
                <p>
                    I am a web developer and application developer with experience in both fields.
                </p>
                <p>
                    I have created this website so that we can get to know each other a little more in depth.
                </p>
            </SectionText>
            <Button><a style={{color: "white"}} href={'https://www.getmanfred.com/es/perfil/martipuigmartin'}>¿Quieres
                saber más?</a>
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
