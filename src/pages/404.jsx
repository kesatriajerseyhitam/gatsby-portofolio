import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { color } from '../constant/styles';

const {
  primaryHighlight,
} = color;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  font-family: 'Roboto';

  @media(min-width: 1024px) {
    margin-top: 80px;
  }
`;

const Title = styled.h1`
  color: ${primaryHighlight};
  width: 100%;
  font-size: 70px;
  `;

const Message = styled.p`
  color: ${primaryHighlight};
  width: 100%;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <Container>
      <Title>NOT FOUND</Title>
      <Message>
        The page you are looking is might be under construction or under maintenance. That sadness...
        <br />
        Hey! Why dont you try to visit my social media page? LinkedIn maybe... or something? Cheers mate.
        {' '}
      </Message>
    </Container>
  </Layout>
);

export default NotFoundPage;
