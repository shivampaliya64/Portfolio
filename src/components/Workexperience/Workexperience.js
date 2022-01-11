import React from 'react';
import { DiFirebase, DiReact,DiZend,DiHtml5, DiCode, DiJavascript, DiCss3, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './workexperienceStyles';

const Workexperience=()=>(
    <Section id="experience">

        <SectionTitle>Work Experience</SectionTitle>
        <List>
            <SectionText>Developer Intern</SectionText>
            Bajaj Finserv: 01/22 - currently working<br/><br/>
            Software developer intern expected to be developing APIs, working on frameworks and handle website<br/>
            Currently Working on tech Angular stack for frontend development and dot net for backend part
        </List>
        <List>
            <SectionText>Business Analytics Intern</SectionText>
            Pentarch Ventures: 06/21 - 07/21 <br/>
            Analysed the industrial, company, and market data, conducted research and contributed in
            building database for the company <br/>
            Successfully analysed data information of over 200 companies and came up with
            effective suggestions to enhance the productivity and growth of the company
        </List>
        <List>
            <SectionText>Instructor </SectionText>
            Cipher Schools: 07/21 - 08/21 <br/>
            Mentored a batch of 70+ University students, and taught them C++ programming
            language, from scratch to advanced topics like data structures and algorithms OOP
            concept, conducted regular mock quizzes to check their understanding.<br/>
            Managed regular practice sessions as well to clear their doubts.
        </List>
        <List>
            <SectionText>Technical Analyst</SectionText>
            CodeChef VIT Bhopal: 11/20- 06/21<br/>
            Core committee member (Technical analyst) at CodeChef VIT Bhopal campus chapter<br/>
            Hosted Successfully various coding competitions for the college students and shared DSA related resources to help them for their placement season.
        </List>
    </Section>
);
export default Workexperience;