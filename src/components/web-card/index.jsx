import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../../images/no-image.jpg';

import {
  ImageContainer,
  Paragraph,
  ProjectInfoContainer,
  WebCardContainer,
  DetailButton,
} from './styled';

import TechLabel from '../tech-label';

const WebCard = ({
  title, description, image, technology, slug,
}) => {
  const techs = technology.split(',');

  return (
    <WebCardContainer>
      <ImageContainer src={image.length > 0 ? image[0] : noImage} alt="project" />
      <ProjectInfoContainer>
        <div>
          <h3 style={{ width: '100%', minHeight: '50px' }}>
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
        <DetailButton
          fade
          to="/portofolio/detail"
          state={{ slug }}
        >
          See Detail
        </DetailButton>
      </ProjectInfoContainer>
    </WebCardContainer>
  );
};

WebCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(String).isRequired,
  slug: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
};

export default WebCard;
