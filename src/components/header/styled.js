import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaBars } from 'react-icons/fa';
import { color, padding } from '../../constant/styles';

const {
  primaryHighlight,
  secondaryBackground,
  secondaryHighlight,
} = color;
const {
  mobileHeaderHorizontalPadding: hMobilePadding,
  webHorizontalPadding: hPadding,
} = padding;

const headerWeight = '87px';

const linkStyle = `
  color: ${primaryHighlight};
  display: block;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: capitalize;

  &:hover {
    color: ${secondaryHighlight};
  }
`;

export const HeaderContainer = styled.div`
  align-items: center;
  background: ${secondaryBackground};
  box-shadow: 0px 1px 10px 1px black;
  color: white;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 ${hMobilePadding};
  position: relative;

  @media(min-width: 768px) {
    height: 70px;
  }

  @media(min-width: 1024px) {
    height: ${headerWeight};
    padding: 0 ${hPadding};
  }
`;

export const Image = styled(AniLink)`
  display: flex;
  align-items: center;
  width: 20vw;

  img {
    width: 100%;
    margin-bottom: 0;

    @media(min-width: 768px) {
      width: 80%;
    }

    @media(min-width: 1024px) {
      width: 60%;
    }

    @media(min-width: 1360px) {
      width: 40%;
    }
  }

`;

export const InlineLinkContainer = styled.ul`
  display: none;
  width: 35vw;
  margin-top: 35px;

  a {
    ${linkStyle};
  }

  @media(min-width: 1024px) {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
  }

  @media(min-width: 1360px) {
    width: 23vw;
  }

`;

export const LinkContainer = styled.ul`
  background: ${secondaryBackground};
  display: flex;
  flex-wrap: wrap;
  left: 0;
  position: fixed;
  margin: 0;
  top: ${headerWeight};
  width: 100vw;

  a {
    ${linkStyle};
    margin: 8px 0;
    text-align: center;
    width: 100%;

    &:nth-child(1) {
      margin-top: 30px;
    }

    &:last-child {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const StyledIcon = styled(FaBars)`
  display: block;
  color: ${primaryHighlight};
  height: 20px;
  width: 20px;

  @media(min-width: 1024px) {
    display: none;
  }
`;
