import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import color from '../constant/color';

const {
  primaryBackground,
} = color;

const HeaderContainer = styled.div`
  background: ${primaryBackground};
  color: white;
  height: 20vh;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    Hallo mate
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
