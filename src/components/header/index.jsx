import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import React from "react"
import {
  graphql,
  useStaticQuery,
} from "gatsby"

import links from '../../constant/links'
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
  const { logo } = useStaticQuery(getLogo);

  return (
    <>
      <LinkContainer>
        {
          links.map((link, index) =>
            <AniLink fade to={link.path}>
              <li key={index}>{link.name}</li>
            </AniLink>
          )
        }
      </LinkContainer>
      <HeaderContainer>
        <Image fixed={logo.childImageSharp.fixed} />
        <StyledIcon />
        <InlineLinkContainer>
          {
            links.map((link, index) =>
              <AniLink fade to={link.path}>
                <li key={index}>{link.name}</li>
              </AniLink>
            )
          }
        </InlineLinkContainer>
      </HeaderContainer>
    </>
  )
}

export default Header
