import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from '../header'
import { color } from '../../constant/styles';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MainContainer = styled.main`
  background: ${ color.primaryBackground };
  height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainer>
      <Header/>
      <MainContainer>
        {children}
      </MainContainer>
      <div>
        Ini footer
      </div>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
