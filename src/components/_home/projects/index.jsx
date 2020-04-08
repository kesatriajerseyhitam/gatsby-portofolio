/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import {
  ProjectContainer,
  ProjectsContainer,
  TitleContainer,
  BottomButtonContainer,
} from './styled';

import WebCard from '../../web-card';

const Projects = ({ data, title }) => (
  <ProjectsContainer>
    <TitleContainer>
      { title }
    </TitleContainer>
    <ProjectContainer>
      {
        data
          ? (
            data.map(({
              title: projectTitle, description, image, technology, type,
            }) => (type === 'web'
              ? (
                <WebCard
                  title={projectTitle}
                  description={description}
                  image={image}
                  technology={technology}
                />
              )
              : null))
          )
          : null
      }
      <BottomButtonContainer>
        See More
      </BottomButtonContainer>
    </ProjectContainer>
  </ProjectsContainer>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Projects;
