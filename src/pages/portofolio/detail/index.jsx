/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaArrowCircleLeft } from 'react-icons/fa';

import {
  DescrtiptionContainer,
  DetailContainer,
  ImageContainer,
  ProjectDetailContainer,
  ResponsibilitiesContainer,
} from './styled';
import {
  PageTitle,
} from '../styled';

import Layout from '../../../components/layout/index';
import SEO from '../../../components/seo';
import TechLabel from '../../../components/tech-label';

import { getSingleProjectBySlug } from '../../../constant/projects';

const PortofolioDetail = ({ location }) => {
  const { state: { slug } } = location;
  const project = getSingleProjectBySlug(slug);

  return (
    <Layout>
      <SEO title={`${project.title} Detail`} />
      <AniLink
        fade
        to="/portofolio"
        style={{
          alignItems: 'center',
          color: 'white',
          display: 'flex',
          fontSize: '25px',
          marginBottom: '80px',
          width: '100%',
        }}
      >
        <FaArrowCircleLeft />
        <span style={{ marginLeft: '40px' }}>All projects</span>
      </AniLink>
      <PageTitle>
        {project.title}
      </PageTitle>
      <ProjectDetailContainer>
        <ImageContainer>Hallo mate</ImageContainer>
        <DetailContainer>
          <DescrtiptionContainer>
            {project.description}
          </DescrtiptionContainer>
          <ResponsibilitiesContainer>
            <h3>Resposibilities: </h3>
            <ul>
              {
                project.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)
              }
            </ul>
          </ResponsibilitiesContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <h3 style={{ width: '100%' }}>Tech used: </h3>
            {
              project.technology.split(',').map((tech) => <TechLabel key={tech} technology={tech} />)
            }
          </div>
        </DetailContainer>
      </ProjectDetailContainer>
    </Layout>
  );
};

PortofolioDetail.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PortofolioDetail;
