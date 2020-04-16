import React from 'react';
import {
  IntroductionContainer,
  Image,
  BriefContainer,
  Paragraph,
  LinksContainer,
  LinkContainer,
} from './styled';

import { color } from '../../../constant/styles';
import { footerLinks as links } from '../../../constant/links';


const {
  primaryHighlight,
} = color;

const Introduction = () => (
  <IntroductionContainer>
    <Image src="https://i.pinimg.com/564x/f1/10/85/f1108555c7bb610117df203af67246ce.jpg" alt="me" />
    <BriefContainer>
      <h4
        style={{
          color: primaryHighlight,
          marginBottom: '20px',
        }}
      >
        Brief Introduction
      </h4>
      <h2
        style={{
          marginBottom: '20px',
        }}
      >
        I am Software Engineer
      </h2>
      <Paragraph>
        My name is
        {' '}
        <i>Raka Pratama,</i>
        {' '}
        you can call me
        {' '}
        <i>Tama</i>
        . I am professional Software Engineer. Have 2+ years experiences
        on developing website both Front-End and Back-End. Most technology
        I used is using Javascript, with a wide-range of frameworks. But,
        the one that I frequently used and my personal choice is React for
        Front-End and Express for Back-End. Beside of Javascript, I also
        use Dart and Go programming language. Kindly check my social media
        to know me more!
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
