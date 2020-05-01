import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { color, padding } from '../../constant/styles';

const {
  primaryHighlight,
  secondaryBackground,
} = color;
const {
  mobileHorizontalPadding,
  webHorizontalPadding,
} = padding;

const containerGap = '15px';
const textCentering = `
  display: block;
  font-family: 'Roboto';
  text-align: center;
  margin: auto 0;
  width: 100%;
`;

export const FooterContainer = styled.div`
  background: ${secondaryBackground};
  padding: 20px ${mobileHorizontalPadding};
  margin-top: auto;

  @media (min-width: 1024px) {
    padding: 20px ${webHorizontalPadding};
  }
`;

export const FooterTitleContainer = styled.div`
  padding: 0 20px 15px 20px;
  border-bottom: 2px solid ${primaryHighlight};


  h2 {
    ${textCentering};
    color: ${primaryHighlight};
    font-weight: 800;
    letter-spacing: 5px;
  }
`;

export const FooterLinksContainer = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: ${containerGap};
  padding: 0px 10px;
  width: 100%;

  div {
    width:  100%;
  }

  .links-container {
    text-align: center;

    img {
      margin-bottom: 0;
      width: 50%;
    }

    .link-container {
      display: flex;
      flex-wrap: wrap;

      .link {
        display: flex;
        font-size: 20px;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px 0;
      }

      .icon {
        display: flex;
        font-size: 20px;
        flex-wrap: no-wrap;
        width: 100%;
        padding: 10px 0;
      }
    }
  }

  .offer {
    display: none;
  }

  @media(min-width: 1024px) {
    div {
      width:  50%;
    }

    .links-container {
      text-align: left;

      img {
        margin-bottom: 0;
        width: 30%;
      }

      .link-container {
        .icon {
          font-size: 30px;
        }
      }
    }

    .offer {
      display: flex;
      font-family: 'Roboto';
      flex-wrap: wrap;

      div {
        width: 100%;

        h1 {
          width: 100%;
        }
      }

    }
  }
`;

export const FooterLink = styled(AniLink)`
  color: white;
  font-family: 'Roboto';
  padding: 5px 0;
  width: 100%;

  &:hover {
    color: ${primaryHighlight};
  }
`;

export const LinkContainer = styled.a`
  color: white;
  cursor: pointer;
  font-size: 30px;
  margin: 10px 0px;
  text-align: center;
  width: 33%;

  &:hover {
    color: ${primaryHighlight}
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const FooterCreditContainer = styled.div`
  border-top: 1px solid white;
  padding-top: 20px;
  margin-top: 15px;

  h4 {
    color: white;
    ${textCentering}

    @media(min-width: 1024px) {
      font-size: 17px;
      font-weight: 500;
    }
  }
`;


export const SomethingElse = {};
