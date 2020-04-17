/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
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
  title, description, image, isHome, technology, slug,
}) => {
  const techs = technology.split(',');

  return (
    <WebCardContainer isHome={isHome || null}>
      <ImageContainer
        alt="project"
        isHome={isHome || null}
        src={image.length > 0 ? image[0] : noImage}
      />
      <ProjectInfoContainer isHome={isHome || null}>
        <div>
          <h3 style={{
            width: '100%',
            marginBottom: '20px',
          }}
          >
            { title }
          </h3>
          <Paragraph isHome={isHome || null}>
            { description }
          </Paragraph>
          <div style={
            isHome ? {
              minHeight: '85px',
              maxHeight: '85px',
            } : null
        }
          >
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
  isHome: PropTypes.any,
  slug: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
};

export default WebCard;
