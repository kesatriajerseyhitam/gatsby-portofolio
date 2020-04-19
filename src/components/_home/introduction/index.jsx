import React from 'react';
import {
  IntroductionContainer,
  Image,
  BriefContainer,
  Paragraph,
  LinksContainer,
  LinkContainer,
} from './styled';

import { footerLinks as links } from '../../../constant/links';


const Introduction = () => (
  <IntroductionContainer>
    <Image />
    <BriefContainer>
      <h2>
        Me? has been called Tama for a long time.
      </h2>
      <h4>
        Software Engineer... (they said)
      </h4>
      <Paragraph>
        Hi, I drink sweet coffe without sugar with 4 block of ice and low fat milk.
        I build web and mobile application, with TV as a my second monitor. Love to
        build robust, simple application. Some people titled me as a
        {' '}
        <span>
          Software
          Engineer
        </span>
        , some people titled me as a
        {' '}
        <span>Full-Stack Engineer</span>
        , some people titled me as
        {' '}
        <span>Senior Front-End Engineer</span>
        . But I love to titled my self as Full-Time Paradise Striver
        <br />
        <br />
        In my free time, I do ruin photo composition with photoshop, combine the with
        other photos. And then I do learn
        {' '}
        <span>
          <i><b>HUMAN</b></i>
          {' '}
          language
        </span>
        . I do speak my native Bahasa Indonesia, Sundanese, English, Korean, and Arabic.
        Hey? lets have a conversation with my non-native language. Be my language buddy.
        Connect with me below!!
      </Paragraph>
      <LinksContainer>
        {
          links.map((item) => (
            <LinkContainer key={item.path} href={item.path} target="_blank">
              { item.icon }
            </LinkContainer>
          ))
        }
      </LinksContainer>
    </BriefContainer>
  </IntroductionContainer>
);

export default Introduction;
