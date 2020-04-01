import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  graphql,
  useStaticQuery,
  // Link
} from "gatsby"
import Image from 'gatsby-image';
import {
  center,
  color
} from '../constant/styles';

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

const {
  secondaryBackground
} = color;

const HeaderContainer = styled.div`
  align-items: center;
  background: ${secondaryBackground};
  color: white;
  display: flex;
  height: 87px;
  padding: 0 5vw;
  position: relative;
`

const ImageContainer = styled.div`

`

const Header = (props) => {
  const { logo } = useStaticQuery(getLogo);

  return (
    <HeaderContainer>
      <ImageContainer>
        <Image fixed={logo.childImageSharp.fixed} />
      </ImageContainer>
    </HeaderContainer>
  )
}

export default Header
