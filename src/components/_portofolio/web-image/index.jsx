/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../../../images/no-image.jpg';

import {
  ChildImageContainer,
  ImageContainer,
} from './styled';

const WebImage = ({ images }) => {
  const [firstImage, ...otherImages] = images;

  return (
    <>
      <ImageContainer
        alt="project"
        src={firstImage || noImage}
      />
      {
        otherImages.length > 0
          ? (
            <ChildImageContainer>
              Hallo mate
            </ChildImageContainer>
          )
          : null
      }
    </>
  );
};

WebImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default WebImage;
