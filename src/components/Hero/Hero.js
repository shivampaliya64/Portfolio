import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hola Amigos,
        <br/>
        Welcome to my world!
      </SectionTitle>
      <SectionText>
        Myself Shivam Paliya an enthusiastic learner, followed by tech developer who is always eager to prove himself. 
        <br/>I can collaborate on projects related to web development, Machine Learning and partly in game development too.
        And in case am not able to help, then help me learn them :)
      </SectionText>
      <Button onClick={()=>window.location = '#about'}>Learn More</Button>
      
    </LeftSection>
  </Section>
);
export default Hero;