import styled from 'styled-components';
import { color } from '../constant/styles';

const {
  primaryHighlight,
} = color;

export const AboutContantainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  width: 100%;

  @media(min-width: 1024px) {
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
`;

export const ImageContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 1px 3px 1px black;
  height: 70px;

  @media(min-width: 1024px) {
    height: 200px;
  }
`;

export const DescriptionContainer = styled.div`
  grid-column: 1/4;

  text-align: justify;
  text-align-last: left;
  width: 100%;

  h2 {
    /* color: ${primaryHighlight}; */
    font-family: 'Roboto';
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 10px;

    @media (min-width: 1024px) {
      font-size: 60px;
      margin-bottom: 30px;
    }
  }

  p {
    /* color: ${primaryHighlight}; */
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    font-size: 10px;
    font-weight: 100;
    margin-bottom: 0;

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 50px;
    text-align: justify;
    text-align-last: center;
  }
`;
