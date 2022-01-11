import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 100, text: 'Stack-overflow reputation'},
  { number: 1736, text: 'CodeChef ratings', },
  { number: 1284, text: 'Codeforces ratings', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <SectionText>
      <b>VIT Bhopal Game Jam competition</b> 
      <br/>
      Won a Game Jam competition in the inaugural year of college
      </SectionText>
      <SectionText>
      <b>CodeOdyssey Coding Competition</b> <br/>
      Secured 3rd position in CodeOdyessey coding competition hosted by VIT Bhopal
      </SectionText>
      <SectionText>
      <b>Google Hashcode</b> <br/>
      Secured a Rank under top 4500 globally in Google Hashcode (top 1500 teams in India)
      </SectionText>
      <SectionText>
      <b>CodeChef Ratings</b> <br/>
        Secured a rating of 1800+(rated 4*) at CodeChef(competitive coding platform)
      </SectionText>
      <SectionText>
      <b>Codeforces Ratings</b> <br/>
        Secured a rating of 1300+(rated pupil) at Codeforces(competitive coding platform)
      </SectionText>
      <SectionText>
      <b>Stackoverlow Reputation</b> <br/>
        Achieved a reputation of 100+ and various community support badges at stack overflow
      </SectionText>
      <SectionText>
      <b>Table Tennis</b> <br/>
      Led and won various table tennis competition organised by CBSE Clusters, District and regional tournaments
      </SectionText>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;