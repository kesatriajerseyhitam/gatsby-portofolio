/* eslint-disable react/no-access-state-in-setstate */

import React from 'react';

import WebCard from '../../web-card';
import { getProjectsByCategory } from '../../../constant/projects';


const FrontEndSection = () => {
  const projects = getProjectsByCategory('front-end');

  return (
    <>
      {
        projects.map(({
          title, description, image, technology, slug,
        }) => (
          <WebCard
            description={description}
            image={image}
            key={slug}
            slug={slug}
            technology={technology}
            title={title}
          />
        ))
      }
    </>
  );
}

export default FrontEndSection;
