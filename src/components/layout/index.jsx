import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import './layout.css';
import Header from '../header';
import Footer from '../footer';
import { color, padding } from '../../constant/styles';
import background from '../../images/background.png';

const {
  mobileHorizontalPadding: hPadding,
} = padding;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  background: ${color.primaryBackground};
  background-image: url(${background});
  background-size: cover;
  background-position: center top;
  background-repeat: repeat-y;
  color: white;
  font-family: 'Roboto';
  min-height: 100vh;
  padding: 8vh ${hPadding};
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
