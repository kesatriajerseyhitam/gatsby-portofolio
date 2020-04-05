import styled from 'styled-components';
import { color, padding } from '../../constant/styles';

const {
  secondaryBackground,
  primaryHighlight,
} = color;
const {
  mobileHorizontalPadding,
} = padding;

const textCentering = `
  display: block;
  font-family: 'Roboto';
  text-align: center;
  width: 100%;
`;

export const FooterContainer = styled.div`
  background: ${secondaryBackground};
  padding: 30px ${mobileHorizontalPadding};
  margin-top: auto;
`;

export const FooterCredit = styled.div`
  margin-top: 30px;

  h6 {
    color: white;
    ${textCentering}
  }
`;

export const FooterTitleContainer = styled.div`
  padding: 5px 20px;
  border-bottom: 2px solid ${primaryHighlight};

  h2 {
    ${textCentering};
    color: ${primaryHighlight};
    font-weight: 800;
    letter-spacing: 5px;
  }
`;

export const SomethingElse = {};
