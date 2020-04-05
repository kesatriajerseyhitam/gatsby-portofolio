import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import './layout.css';
import Header from '../header';
import Footer from '../footer';
import { color } from '../../constant/styles';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  background: ${color.primaryBackground};
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    <MainContainer>
      {children}
    </MainContainer>
    <Footer />
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
