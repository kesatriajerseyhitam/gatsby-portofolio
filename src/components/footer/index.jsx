import React from 'react';

import {
  FooterContainer,
  FooterCreditContainer,
  FooterLinksContainer,
  FooterTitleContainer,
  LinkContainer,
} from './styled';

import { footerLinks as links } from '../../constant/links';

const Footer = () => (
  <FooterContainer>
    <FooterTitleContainer>
      <h2>
        { 'keep in touch'.toUpperCase() }
      </h2>
    </FooterTitleContainer>
    <FooterLinksContainer>
      {
        links.map((item) => (
          <LinkContainer href={item.path} target="_blank">
            { item.icon }
          </LinkContainer>
        ))
      }
    </FooterLinksContainer>
    <FooterCreditContainer>
      <h6>
        2020 &copy; Developed by
        {' '}
        <b>Raka Pratama</b>
        {' '}
        using
        {' '}
        <b>Gatsby.js</b>
      </h6>
    </FooterCreditContainer>
  </FooterContainer>
);

export default Footer;
