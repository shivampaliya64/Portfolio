import React from 'react';
import { DiFirebase, DiReact,DiZend,DiHtml5, DiCode, DiJavascript, DiCss3, DiAndroid, DiAngularSimple } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technical skills and expertise</SectionTitle>
    <SectionText>
      I've worked with a range a technologies covering from development to analytics. A few of them are as follows: 
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem"/>
          <DiAngularSimple size="3rem"/>
          <DiReact size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Development Skills</ListTitle>
          <ListParagraph>
            <br />
            HTML,<br />
            CSS, <br />
            JavaScript,<br/>
            React,<br/>
            Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
          <DiCode size="3rem"> </DiCode>
        </picture>
        <ListContainer>
          <ListTitle>Languages and Databases</ListTitle>
          <ListParagraph>
            C/C++,<br/>
            Java,<br/>
            Python,<br/>
            MySQL,<br/>
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Analytical Skills</ListTitle>
          <ListParagraph>
            <br/>
            Data Science, <br />
            Machine Learning, <br />
            Exploratory Data analytics, <br/>
            Statistical Modelling, <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
