import styled from 'styled-components';
import { color, defaultButton } from '../../../constant/styles';

const {
  gradient,
  primaryHighlight,
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

export const Image = styled.div`
  background-image: url("https://i.pinimg.com/564x/f1/10/85/f1108555c7bb610117df203af67246ce.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  height: 350px;
  overflow: hidden;
  width: 100%;

  @media(min-width: 768px) {
    height: 500px;
  }

  @media(min-width: 1024px) {
    height: auto;
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

  h2 {
    margin-bottom: 20px;

    @media(min-width: 1024px) {
      margin-right: 100px;
    }
  }

  h4 {
    color: ${primaryHighlight};
    margin-bottom: 20px;
  }

  span {
    color: ${primaryHighlight};
  }

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
  font-size: 20px;
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
