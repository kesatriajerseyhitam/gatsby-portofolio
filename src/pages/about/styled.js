import styled from 'styled-components';
import { color } from '../../constant/styles';

const {
  primaryHighlight,
} = color;

const defaultJobStyle = `
  font-size: .5rem;
  font-weight: 100;
  letter-spacing: .3rem;
  margin-top: 5px;
  margin-bottom: .2rem;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

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

  @media(min-width: 1024px) {
    margin-top: -20px;
    width: 50vw;
  }
`;

export const TitleContainer = styled.h1`
  color: ${primaryHighlight};
  margin-top: -5px;
  font-family: 'Roboto';
  font-size: 4vw;
  font-weight: 500;
  margin-bottom: 0;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    margin-top: -10px;
  }
`;

export const JobContainer = styled.h6`
  ${defaultJobStyle};
`;

export const ContactContainer = styled.h6`
  ${defaultJobStyle};
  font-size: .2rem;
  letter-spacing: .1rem;

  @media(min-width: 1024px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
  }
`;

export const IconContainer = styled.span`
  display: inline-block;
  font-size: .3rem;
  margin: 0 .4rem;

  @media(min-width: 1024px) {
    font-size: 1.1rem;
    margin: 0 1rem;
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
  padding: 2px 6px;
  font-size: .7rem;
  text-align: center;

  &:hover {
    border: 1px ${primaryHighlight} solid;
    color: ${primaryHighlight}
  }

  @media(min-width: 1024px) {
    font-size: 1.3rem;
    padding: 8px 10px;
  }
`;
