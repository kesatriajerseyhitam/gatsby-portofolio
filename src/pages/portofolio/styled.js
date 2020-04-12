import styled from 'styled-components';
import { color, defaultButton } from '../../constant/styles';

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
  letter-spacing: 3px;
  margin: 20px 0 40px 0;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media(min-width: 1024px) {
    padding: 0 0 50px 0;
  }
`;
