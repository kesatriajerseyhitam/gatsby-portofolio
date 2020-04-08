import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageContainer,
  Paragraph,
  ProjectInfoContainer,
  WebCardContainer,
} from './styled';

import TechLabel from '../tech-label';

const WebCard = ({
  title, description, image, technology,
}) => {
  const techs = technology.split(',');

  return (
    <WebCardContainer
      data-sal="slide-up"
      data-sal-easing="ease-out"
    >
      <ImageContainer src={image} alt="project" />
      <ProjectInfoContainer>
        <div>
          <h3 style={{ width: '100%' }}>
            { title }
          </h3>
          <Paragraph>
            { description }
          </Paragraph>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              techs.map((tech) => <TechLabel key={tech} technology={tech} />)
            }
          </div>
        </div>
      </ProjectInfoContainer>
    </WebCardContainer>
  );
};

WebCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
};

export default WebCard;
