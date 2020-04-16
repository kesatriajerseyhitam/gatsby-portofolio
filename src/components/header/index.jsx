import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React, { useState } from 'react';

import logo from '../../images/logo.png';
import { links } from '../../constant/links';
import {
  HeaderContainer,
  Image,
  LinkContainer,
  InlineLinkContainer,
  StyledIcon,
} from './styled';

import { color } from '../../constant/styles';

const { secondaryHighlight } = color;

const Header = () => {
  const [toogled, setToogled] = useState(false);

  return (
    <>
      {
        toogled ? (
          <LinkContainer>
            {
            links.map((link) => (
              <AniLink
                activeStyle={{ color: secondaryHighlight }}
                key={link.name}
                fade
                to={link.path}
              >
                <li>{link.name}</li>
              </AniLink>
            ))
          }
          </LinkContainer>
        ) : null
      }
      <HeaderContainer>
        <Image
          src={logo}
          alt="Logo"
        />
        <StyledIcon
          onClick={() => setToogled((prevState) => !prevState)}
        />
        <InlineLinkContainer>
          {
            links.map((link) => (
              <AniLink
                activeStyle={{ color: secondaryHighlight }}
                key={link.name}
                fade
                to={link.path}
              >
                <li>{link.name}</li>
              </AniLink>
            ))
          }
        </InlineLinkContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
