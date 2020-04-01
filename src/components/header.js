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
import { FaBars } from 'react-icons/fa';

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
  primaryHighlight,
  secondaryBackground
} = color;

const HeaderContainer = styled.div`
  align-items: center;
  background: ${secondaryBackground};
  color: white;
  display: flex;
  height: 87px;
  justify-content: space-between;
  padding: 0 8vw;
  position: relative;
`;

const StyledIcon = styled(FaBars)`
  display: block;
  color: ${primaryHighlight};
  height: 30px;
  width: 30px;
`;

const Header = (props) => {
  const { logo } = useStaticQuery(getLogo);

  return (
    <HeaderContainer>
      <Image fixed={logo.childImageSharp.fixed} />
      <StyledIcon />
    </HeaderContainer>
  )
}

export default Header
