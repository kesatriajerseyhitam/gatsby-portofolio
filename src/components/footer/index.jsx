import React from 'react';
import {
  FooterContainer,
  FooterTitleContainer,
  FooterCredit,
} from './styled';

const Footer = () => (
  <FooterContainer>
    <FooterTitleContainer>
      <h2>
        { 'keep in touch'.toUpperCase() }
      </h2>
    </FooterTitleContainer>
    <FooterCredit>
      <h6>
        2020 &copy; Developed by
        {' '}
        <b>Raka Pratama</b>
        {' '}
        using
        {' '}
        <b>Gatsby.js</b>
      </h6>
    </FooterCredit>
  </FooterContainer>
);

export default Footer;
