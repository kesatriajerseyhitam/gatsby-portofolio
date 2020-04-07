import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { color } from '../constant/styles';

import {
  IntroductionContainer,
  Image,
  BriefContainer,
  Paragraph,
  Button,
} from './home/styled';

const {
  primaryHighlight,
} = color;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroductionContainer>
      <Image src="https://i.pinimg.com/564x/f1/10/85/f1108555c7bb610117df203af67246ce.jpg" alt="me" />
      <BriefContainer>
        <h4
          style={{
            color: primaryHighlight,
            marginBottom: '15px',
          }}
        >
          Brief Introduction
        </h4>
        <h3
          style={{
            marginBottom: '20px',
          }}
        >
          I am Software Engineer
        </h3>
        <Paragraph>
          Hi, You can call me Tama, 22 years old. I am
          Software Engineer currently working as Front End
          Engineer. My current tech-stack are Javascript,
          Dart, and Flutter. I do fullstack web and mobile
          development.
        </Paragraph>
        <Button
          onClick={() => alert('Under construction')}
        >
          About Me
        </Button>
      </BriefContainer>
    </IntroductionContainer>
  </Layout>
);

export default IndexPage;
