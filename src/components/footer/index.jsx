import React from 'react';
import { color } from '../../constant/styles'

import {
  FooterContainer,
  FooterCreditContainer,
  FooterLinksContainer,
  FooterLink,
} from './styled';

import image from '../../images/logo.png';
import { footerLinks as socials, links } from '../../constant/links';

const { primaryHighlight } = color;

const Footer = () => (
  <FooterContainer>
    <FooterLinksContainer>
      <div className="links-container">
        <img src={image} alt="logo" />
        <div className="link-container">
          <div className="link">
            {
              links.map((link) => (
                <FooterLink fade to={link.path}>
                  { link.name.toUpperCase() }
                </FooterLink>
              ))
            }
          </div>
          <div className="icon">
            {
              socials.map((social) => (
                <FooterLink fade to={social.path}>
                  { social.icon }
                </FooterLink>
              ))
            }
          </div>
        </div>
      </div>
      <div className="offer">
        <div>
          <h1>Let's work with me!</h1>
          <p>
            Thanks for visit my website, and if you have a project and need a Front-End Developer,
            Back-End Developer or even Full-Stack developer. Feel free to contact me. I would be
            very happy to help you with your project. You can email me at
            {' '}
            <span style={{ color: primaryHighlight }}>
              mgf.prauliyatama@gmail.com
            </span>
            .
          </p>
        </div>
      </div>
    </FooterLinksContainer>
    <FooterCreditContainer>
      <h4>
        2020 &copy; Developed by
        {' '}
        <b>Raka Pratama</b>
        {' '}
        using
        {' '}
        <b>Gatsby.js</b>
      </h4>
    </FooterCreditContainer>
  </FooterContainer>
);

export default Footer;
