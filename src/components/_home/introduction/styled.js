import styled from 'styled-components';
import { color, defaultButton } from '../../../constant/styles';

const {
  gradient,
  secondaryBackground,
} = color;

const borderRadius = '20px';

export const IntroductionContainer = styled.div`
  background: ${secondaryBackground};
  box-shadow: 0px 1px 10px 1px black;
  border-radius: ${borderRadius};
  display: flex;
  flex-wrap: wrap;

  @media(min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

export const Image = styled.img`
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  width: 100%;

  @media(min-width: 1024px) {
    border-top-left-radius: 0;
    border-top-right-radius: ${borderRadius};
    margin: 0;
    width: 45%;
  }
`;

export const BriefContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px 50px;
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    padding: 30px 50px;
    text-align: left;
    width: 55%;
  }

  @media(min-width: 1650px) {
    padding: 50px 50px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 40px;
  text-align: justify;
  text-align-last: left;
`;

export const LinksContainer = styled.div`
  ${defaultButton};
  cursor: initial;
  display: flex;
  justify-content: space-around;
  width: 100%;

  &:active {
    background: ${gradient};
  };

  @media(min-width: 1650px) {
    margin-top: 50px;
  }
`;

export const LinkContainer = styled.a`
  color: white;
  cursor: pointer;
  font-size: 30px;
  margin: 5px 0px;
  text-align: center;
  width: 33%;

  &:active {
    color: ${secondaryBackground}
  }


  @media (min-width: 1024px) {
    width: 15%;
  }
`;
