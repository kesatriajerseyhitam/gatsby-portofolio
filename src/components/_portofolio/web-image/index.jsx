/* eslint-disable react/forbid-prop-types */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import noImage from '../../../images/no-image.jpg';

import {
  ChildImageContainer,
  ImageContainer,
  ImagePreviewContainer,
} from './styled';

const WebImage = ({ images }) => {
  const [imageToogled, setImageToogled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstImage, ...otherImages] = images;

  const closeImage = () => {
    setSelectedImage(null);
    setImageToogled(false);
  };

  const toogleImage = (image) => {
    console.log('hallo mate');
    setSelectedImage(image);
    setImageToogled(true);
  };

  return (
    <>
      <ImageContainer
        alt="project"
        onClick={() => toogleImage(firstImage || noImage)}
        src={firstImage || noImage}
      />
      {
        otherImages.length > 0
          ? (
            <ChildImageContainer
              length={otherImages.length}
            >
              {
                otherImages.map((image) => (
                  <ImageContainer
                    alt="project"
                    child
                    key={image}
                    onClick={() => toogleImage(image)}
                    src={image}
                  />
                ))
              }
            </ChildImageContainer>
          )
          : null
      }

      {
        imageToogled
          ? (
            <ImagePreviewContainer
              onClick={() => closeImage()}
            >
              <ImageContainer
                alt="project"
                src={selectedImage}
                style={{
                  width: '65%',
                }}
                preview
              />
            </ImagePreviewContainer>
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
