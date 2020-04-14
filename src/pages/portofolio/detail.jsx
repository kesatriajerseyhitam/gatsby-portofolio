/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaArrowCircleLeft } from 'react-icons/fa';

import {
  ButtonContainer,
  DescrtiptionContainer,
  DetailContainer,
  ImageContainer,
  ProjectDetailContainer,
  ResponsibilitiesContainer,
} from '../../styled/portofolio-detail-styled';
import {
  PageTitle,
} from '../../styled/portofolio-styled';

import Layout from '../../components/layout/index';
import SEO from '../../components/seo';
import TechLabel from '../../components/tech-label';

import WebImage from '../../components/_portofolio/web-image';
import { getSingleProjectBySlug } from '../../constant/projects';


const PortofolioDetail = ({ location }) => {
  const slug = location.state ? location.state.slug : undefined;
  const project = getSingleProjectBySlug(slug);

  const renderImage = (type, images) => {
    switch (type) {
      case 'web':
        return <WebImage images={images} />;
      default:
        return <h3>Tidak ada data</h3>;
    }
  };

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
          marginBottom: '50px',
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
        <ImageContainer>
          {
            renderImage(project.type, project.image)
          }
        </ImageContainer>
        <DetailContainer>
          <h3>Project Description: </h3>
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
          {
            project.link
              ? (
                <div style={{ display: 'flex', width: '100%', margin: '40px auto' }}>
                  <ButtonContainer href={project.link} target="_blank">
                    Visit website
                  </ButtonContainer>
                </div>
              )
              : null
          }
        </DetailContainer>
      </ProjectDetailContainer>
    </Layout>
  );
};

PortofolioDetail.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PortofolioDetail;
