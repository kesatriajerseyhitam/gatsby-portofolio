import styled from 'styled-components';
import { defaultButton } from '../constant/styles';

const textStyle = `
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  text-align-last: left;
  text-align: justify;
`;

export const ProjectDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media(min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media(min-width: 1024px) {
    margin-bottom: 0;
    width: 48%;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;

  @media(min-width: 1024px) {
    width: 48%;
  }
`;


export const DescrtiptionContainer = styled.h5`
  ${textStyle};
  line-height: 2;
`;

export const ResponsibilitiesContainer = styled.div`
  ${textStyle};

  ul {
    li {
      list-style-type: square;
    }
  }
`;

export const ButtonContainer = styled.a`
  ${defaultButton}
`;
