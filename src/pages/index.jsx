import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowCircleDown } from 'react-icons/fa';

import Introduction from '../components/_home/introduction';
import Layout from '../components/layout';
import Projects from '../components/_home/projects';
import SEO from '../components/seo';

import { projects } from '../constant/projects';

const moveDown = keyframes`
  from { transform: translateY(0); }
  to {transform: translateY(40px);}
`;

const IconContainer = styled.i`
  animation: ${moveDown} 1s alternate infinite;
  color: #303030;
  display: block;
  font-size: 10rem;
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <IconContainer>
      <FaArrowCircleDown className="moveDown" />
    </IconContainer>
    {
        projects.map(({ data, title }) => (
          <Projects
            data={data}
            key={title}
            title={title}
          />
        ))
      }
  </Layout>
);

export default Home;
