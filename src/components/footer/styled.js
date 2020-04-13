import styled from 'styled-components';
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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: ${containerGap};
  padding: 0px 10px;
  width: 100%;
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
  margin-top: ${containerGap};
  border-top: 1px solid white;

  h4 {
    color: white;
    padding: 20px 0;
    ${textCentering}

    @media(min-width: 1024px) {
      font-size: 17px;
      font-weight: 500;
    }
  }
`;


export const SomethingElse = {};
