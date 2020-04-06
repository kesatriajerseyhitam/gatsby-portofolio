import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from 'react-icons/fa';

export const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'blog',
    path: '/blog',
  },
  {
    name: 'portofolio',
    path: '/portofolio',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

export const footerLinks = [
  {
    icon: <FaGithubSquare />,
    path: 'https://github.com/kesatriajerseyhitam',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://linkedin.com/in/prauliyatama',
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/prauliyatama/',
  },
  {
    icon: <FaFacebookSquare />,
    path: 'https://web.facebook.com/prauliyatama',
  },
  {
    icon: <FaTwitterSquare />,
    path: 'https://twitter.com/prauliyatama',
  },
];