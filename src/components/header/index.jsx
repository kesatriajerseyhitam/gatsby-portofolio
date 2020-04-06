import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Image from 'gatsby-image';
import React, { useState } from 'react';
import {
  graphql,
  useStaticQuery,
} from 'gatsby';

import { links } from '../../constant/links';
import {
  HeaderContainer,
  LinkContainer,
  InlineLinkContainer,
  StyledIcon,
} from './styled';

const getLogo = graphql`
  query {
    logo: file(relativePath:{eq: "logo.png"}) {
      childImageSharp {
        fixed(width: 130, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;


const Header = () => {
  const [toogled, setToogled] = useState(false);
  const { logo } = useStaticQuery(getLogo);

  return (
    <>
      {
        toogled ? (
          <LinkContainer>
            {
            links.map((link) => (
              <AniLink fade to={link.path}>
                <li key={link.name}>{link.name}</li>
              </AniLink>
            ))
          }
          </LinkContainer>
        ) : null
      }
      <HeaderContainer>
        <Image fixed={logo.childImageSharp.fixed} />
        <StyledIcon
          onClick={() => setToogled((prevState) => !prevState)}
        />
        <InlineLinkContainer>
          {
            links.map((link) => (
              <AniLink fade to={link.path}>
                <li key={link.name}>{link.name}</li>
              </AniLink>
            ))
          }
        </InlineLinkContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
