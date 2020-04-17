import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { color, defaultButton } from '../../constant/styles';


const {
  secondaryBackground,
} = color;
const borderRadius = '10px';

export const WebCardContainer = styled.div`
  ${(props) => (props.isHome ? '' : `
    break-inside: avoid;
    margin: 0 0 20px;
    overflow: hidden;
  `)}
`;

export const ImageContainer = styled.img`
  border-radius: ${borderRadius};
  box-shadow: 0px 1px 10px 1px black;
  margin-bottom: 0;
  ${(props) => (props.isHome ? 'min-height: 190px' : '')};
  width: 100%;

  @media(min-width: 1550px) {
    ${(props) => (props.isHome ? 'min-height: 220px' : '')};
  }
`;

export const ProjectInfoContainer = styled.div`
  background-color: ${secondaryBackground};
  border-radius: ${borderRadius};
  ${(props) => (props.isHome ? 'box-shadow: 0px 1px 10px 1px black;' : '')};
  display: flex;
  flex-wrap: wrap;
  font-family: 'Roboto';
  padding: 30px 40px;
  width: 100%;

  &:hover {
    transform: translate(0, -20px);
    transition: all 1s ease-out;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 5px;
  ${(props) => (props.isHome ? 'min-height: 90px;' : '')};
  text-align: justify;
  width: 100%;
`;


export const DetailButton = styled(AniLink)`
  ${defaultButton};
  margin-top: 40px;
  width: 100%;
`;
