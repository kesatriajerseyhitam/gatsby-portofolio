/* eslint-disable react/no-access-state-in-setstate */

import React from 'react';

import WebCard from '../../web-card';
import { getSpecificProjects } from '../../../constant/projects';


const BackEndSection = () => {
  const projects = getSpecificProjects('back-end');

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
            technology={technology}
            title={title}
          />
        ))
      }
    </>
  );
};

export default BackEndSection;
