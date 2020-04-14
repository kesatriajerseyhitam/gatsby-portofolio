/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  CategoryButton,
  CategoryButtonContainer,
  PageTitle,
  ProjectContainer,
} from '../../styled/portofolio-styled';

import BackEndSection from '../../components/_portofolio/back-end';
import FrontEndSection from '../../components/_portofolio/front-end';
import Layout from '../../components/layout/index';
import SEO from '../../components/seo';

import { getProjectCategories } from '../../constant/projects';

const Portofolio = ({ location }) => {
  const [selectedCategory, setSelectedCategory] = useState('front-end');
  const categories = getProjectCategories();

  const { state: { category } } = location;

  const getCategoryItem = () => {
    switch (selectedCategory) {
      case 'front-end':
        return <FrontEndSection />;
      case 'back-end':
        return <BackEndSection />;
      default:
        return <FrontEndSection />;
    }
  };

  useEffect(() => {
    if (category) {
      setSelectedCategory(category.split(' ')[0].toLowerCase());
    }
  }, []);


  return (
    <Layout>
      <SEO title="Portofolio" />
      <PageTitle>
        Portofolio
      </PageTitle>
      <CategoryButtonContainer>
        {
          categories.map((item) => (
            <CategoryButton
              key={item}
              onClick={() => {
                setSelectedCategory(item.split(' ')[0].toLowerCase());
              }}
              selected={!!item.toLowerCase().includes(selectedCategory)}
            >
              { item }
            </CategoryButton>
          ))
        }
      </CategoryButtonContainer>
      <ProjectContainer>
        { getCategoryItem() }
      </ProjectContainer>
    </Layout>
  );
};

Portofolio.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Portofolio;
