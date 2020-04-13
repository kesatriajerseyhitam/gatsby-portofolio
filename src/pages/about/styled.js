import styled from 'styled-components';
import { color } from '../../constant/styles';

const {
  primaryHighlight,
} = color;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const ImageContainer = styled.img`
  padding: 0 13vw;
  width: 100vw;
  margin-bottom: 0;
`;

export const TitleContainer = styled.h1`
  color: ${primaryHighlight};
  margin-top: -15px;
  font-family: 'Roboto';
  font-size: 5vw;
  font-weight: 500;
  margin-bottom: 0;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    margin-top: -40px;
  }
`;

export const JobContainer = styled.h6`
  font-size: .5rem;
  font-weight: 100;
  letter-spacing: .3rem;
  margin-top: 5px;
  margin-bottom: .2rem;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const LinksListContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
  padding: 10px 10px;
  width: 70%;

  @media(min-width: 1024px) {
    width: 40%;
  }
`;

export const LinkContainer = styled.a`
  border: 1px white solid;
  color: white;
  cursor: pointer;
  padding: 8px 10px;
  font-size: 1rem;
  text-align: center;

  &:hover {
    border: 1px ${primaryHighlight} solid;
    color: ${primaryHighlight}
  }

  @media(min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
