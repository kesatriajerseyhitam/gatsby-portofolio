import styled from 'styled-components';
import { color, defaultButton } from '../../constant/styles';

const {
  secondaryBackground,
} = color;
const borderRadius = '10px';

export const WebCardContainer = styled.div`
  width: 100%;
  margin-top: 70px;

  @media(min-width: 1024px) {
    width: 49%;
  }

  @media(min-width: 1280px) {
    width: 32%;
  }
`;

export const ImageContainer = styled.img`
  border-radius: ${borderRadius};
  box-shadow: 0px 1px 10px 1px black;
  margin-bottom: 0;
  max-height: 165px;
  width: 100%;
`;

export const ProjectInfoContainer = styled.div`
  background-color: ${secondaryBackground};
  border-radius: ${borderRadius};
  box-shadow: 0px 1px 10px 1px black;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Roboto';
  padding: 40px 50px;
  width: 100%;

  &:hover {
    transform: translate(0, -20px);
    transition: all 1s ease-out;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 30px;
  text-align: justify;
  text-align-last: left;
  width: 100%;
`;


export const DetailButton = styled.button`
  ${defaultButton};
  box-shadow: 0px 1px 10px 1px black;
  margin-top: 40px;
  width: 100%;
`;
