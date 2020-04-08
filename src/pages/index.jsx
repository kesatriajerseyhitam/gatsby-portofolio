import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowCircleDown } from 'react-icons/fa';

import Introduction from '../components/_home/introduction';
import Layout from '../components/layout';
import Projects from '../components/_home/projects';
import SEO from '../components/seo';

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

const IndexPage = () => {
  const pageDatas = [
    {
      title: 'Front-End Development',
      data: [
        {
          title: 'Crownmerce',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          description: 'I created this project as my study case, this is e-commerce application for fashion This is my study case project to learn react. I deep dive into react concept from basic theory to complex conxept.',
          technology: 'react,redux,context,graphQL,saga',
          type: 'web',
        },
        {
          title: 'Genflix',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          description: 'I support Front End team for some automatic login, and fix some bugs in this application. This application is a platform to stream a movie, and drama.',
          technology: 'react,redux',
          type: 'web',
        },
        {
          title: 'Cartalog',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          description: 'This application is about a web platform similar to e-comerce and forum realted to car stuff. I helped Front End team for fixing some bugs, and adding a feature or two..',
          technology: 'react,redux',
          type: 'web',
        },
      ],
    },
    {
      title: 'Back-End Development',
      data: [
        {
          title: 'Crownmerce',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          description: 'I created this project as my study case, this is e-commerce application for fashion This is my study case project to learn react. I deep dive into react concept from basic theory to complex conxept.',
          technology: 'node',
          type: 'web',
        },
        {
          title: 'Genflix',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          description: 'I support Front End team for some automatic login, and fix some bugs in this application. This application is a platform to stream a movie, and drama.',
          technology: 'node',
          type: 'web',
        },
        {
          title: 'Cartalog',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          description: 'This application is about a web platform similar to e-comerce and forum realted to car stuff. I helped Front End team for fixing some bugs, and adding a feature or two..',
          technology: 'node',
          type: 'web',
        },
      ],
    },
    {
      title: 'Mobile Development',
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <Introduction />
      <IconContainer>
        <FaArrowCircleDown className="moveDown" />
      </IconContainer>
      {
        pageDatas.map(({ data, title }) => (
          <Projects
            data={data}
            key={title}
            title={title}
          />
        ))
      }
    </Layout>
  );
};

export default IndexPage;
