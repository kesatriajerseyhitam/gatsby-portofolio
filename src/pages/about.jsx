import React from 'react';
import {
  FaEnvelope,
  FaMapMarker,
  FaPhone,
} from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  AboutContantainer,
  ImageContainer,
  DescriptionContainer,
} from '../styled/about-styled';

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutContantainer>
      <DescriptionContainer>
        <h2>Hi Mate!</h2>
        <p>
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
          use Dart and Go programming language.
        </p>
      </DescriptionContainer>
      <ImageContainer />
      <ImageContainer />
      <ImageContainer />
    </AboutContantainer>
  </Layout>
);


export default About;
