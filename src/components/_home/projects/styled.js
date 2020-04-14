import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { color, defaultButton } from '../../../constant/styles';

const {
  primaryHighlight,
} = color;

export const ProjectsContainer = styled.div`
  border-bottom: 1px solid ${primaryHighlight};
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 40px 0;

  @media(min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const TitleContainer = styled.h3`
  color: ${primaryHighlight};
  font-family: 'Roboto';
  font-size: 25px;
  letter-spacing: 2px;
  margin-bottom: 0;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    text-align: left;
    width: 50%;
    padding: 0;
  }
`;

export const UpperButtonContainer = styled(AniLink)`
  ${defaultButton};
  width: 20%;
  display: none;
  float: right;

  @media(min-width: 1024px) {
    display: block;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;

  @media(min-width: 1024px) {
    margin-top: 40px;
  }
`;

export const BottomButtonContainer = styled(AniLink)`
  ${defaultButton};
  margin-top: 40px;
  width: 100%;

  @media(min-width: 1024px) {
    display: none;
  }
`;
