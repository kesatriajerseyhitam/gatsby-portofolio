import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageContainer,
  Paragraph,
  ProjectInfoContainer,
  WebCardContainer,
  DetailButton,
} from './styled';

import TechLabel from '../tech-label';

const WebCard = ({
  title, description, image, technology,
}) => {
  const techs = technology.split(',');

  return (
    <WebCardContainer>
      <ImageContainer src={image[0]} alt="project" />
      <ProjectInfoContainer>
        <div>
          <h3 style={{ width: '100%' }}>
            { title }
          </h3>
          <Paragraph>
            { description.length > 120 ? `${description.slice(0, 120)}...` : description }
          </Paragraph>
          <div style={{ minHeight: '90px', maxHeight: '90px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              { techs.map((tech) => <TechLabel key={tech} technology={tech} />) }
            </div>
          </div>
        </div>
        <DetailButton>
          See Detail
        </DetailButton>
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
