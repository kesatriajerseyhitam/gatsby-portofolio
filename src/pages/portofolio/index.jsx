import React, { useState } from 'react';

import {
  CategoryButton,
  CategoryButtonContainer,
  PageTitle,
} from './styled';

import Layout from '../../components/layout/index';
import SEO from '../../components/seo';

import { getProjectCategories } from '../../constant/projects';

const Portofolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('front');
  const categories = getProjectCategories();

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
    </Layout>
  );
};

export default Portofolio;
