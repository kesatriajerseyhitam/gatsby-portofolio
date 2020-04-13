import styled from 'styled-components';
import { color } from '../../constant/styles';

const {
  primaryHighlight,
  secondaryBackground,
} = color;

const defaultJobStyle = `
  font-size: 1rem;
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
  font-size: 6vw;
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
  font-size: .5rem;
  letter-spacing: .1rem;

  @media(min-width: 1024px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
  }
`;

export const IconContainer = styled.span`
  display: inline-block;
  font-size: .5rem;
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
  border: 2px white solid;
  color: white;
  cursor: pointer;
  padding: 2px 6px;
  font-size: .7rem;
  text-align: center;

  &:hover {
    border: 2px ${primaryHighlight} solid;
    color: ${primaryHighlight}
  }

  @media(min-width: 1024px) {
    font-size: 1.3rem;
    padding: 8px 10px;
  }
`;

export const AboutContainer = styled.div`
  background: ${secondaryBackground};
  border-radius: 1rem;
  box-shadow: 0px 1px 2px 1px black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  padding: 2rem 4rem;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    padding: 2rem 8rem;
  }
`;

export const AboutTitleLogo = styled.img`
  width: 20%;
  margin: 0 auto;

  @media(min-width: 1024px) {
    width: 10%;
  }
`;

export const AboutTitleContainer = styled.h1`
  color: ${primaryHighlight};
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }
`;

export const Divider = styled.div`
  border-top: 1px ${primaryHighlight} solid;
  margin: 10px auto;
  width: ${(props) => props.width};
`;

export const AboutDescription = styled.p`
  font-size: .8rem;
  font-weight: 400;
  margin: 20px 0;
  text-align: justify;
  text-align-last: center;

  @media(min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 25px;
  }
`;
