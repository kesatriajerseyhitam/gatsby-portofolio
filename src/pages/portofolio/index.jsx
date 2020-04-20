/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  CategoryButton,
  CategoryButtonContainer,
  PageTitle,
} from '../../styled/portofolio-styled';

import BackEndSection from '../../components/_portofolio/back-end';
import FrontEndSection from '../../components/_portofolio/front-end';
import Layout from '../../components/layout';
import ProjectContainer from '../../components/mansory-project';
import SEO from '../../components/seo';

import { getProjectCategories } from '../../constant/projects';


const Portofolio = ({ location }) => {
  const [selectedCategory, setSelectedCategory] = useState('front-end');
  const categories = getProjectCategories();

  const category = location.state ? location.state.category : undefined;

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
