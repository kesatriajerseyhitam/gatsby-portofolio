/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import {
  ProjectContainer,
  ProjectsContainer,
  TitleContainer,
  UpperButtonContainer,
  BottomButtonContainer,
} from './styled';

import WebCard from '../../web-card';

const Projects = ({ data, title }) => {
  const featuredData = data.filter((item) => (item.featured ? item : null));

  return (
    <ProjectsContainer>
      <TitleContainer>
        { title }
      </TitleContainer>
      <UpperButtonContainer
        fade
        to="/portofolio"
        state={{ category: title }}
      >
        See More
      </UpperButtonContainer>
      <ProjectContainer>
        {
          data
            ? (
              featuredData.map(({
                title: projectTitle, description, image, technology, type, slug,
              }) => (type === 'web'
                ? (
                  <WebCard
                    description={description}
                    image={image}
                    key={slug}
                    slug={slug}
                    technology={technology}
                    title={projectTitle}
                  />
                )
                : null))
            )
            : null
        }
        <BottomButtonContainer
          fade
          to="/portofolio"
          state={{ category: title }}
        >
          See More
        </BottomButtonContainer>
      </ProjectContainer>
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Projects;
