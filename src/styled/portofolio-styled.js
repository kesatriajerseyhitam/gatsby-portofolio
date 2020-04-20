import styled from 'styled-components';
import { color, defaultButton } from '../constant/styles';

const {
  primaryHighlight,
} = color;

const unselectedButton = `
  ${defaultButton};
  background: transparent;
`;

export const PageTitle = styled.h1`
  color: ${primaryHighlight};
  font-family: 'Roboto';
  font-size: 50px;
  letter-spacing: 2px;
  margin: 20px 0 30px 0;
  text-align: center;

  @media(min-width: 1024px) {
    font-size: 70px;
    text-align: left;
  }
`;

export const CategoryButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;

  @media(min-width: 1024px) {
    justify-content: start;
  }
`;

export const CategoryButton = styled.button`
  ${(props) => (props.selected ? defaultButton : unselectedButton)};
  margin: 10px 0;
  width: 100%;

  &:first-child{
    margin-top: 0px;
  }

  &:last-child{
    margin-bottom: 0px;
  }

  @media(min-width: 1024px) {
    margin: 0 10px;
    width: auto;

    &:first-child{
      margin-left: 0px;
    }

    &:last-child{
      margin-right: 0px;
    }
  }
`;

export const ProjectContainer = styled.div`
  columns: 1;
  column-gap: 20px;
  height: 100%;
  width: 100%;

  @media(min-width: 720px) {
    columns: 2;
  }

  @media(min-width: 1024px) {
    columns: 3;
  }
`;
