import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { color } from '../../constant/styles';

const {
  primaryHighlight,
  secondaryBackground,
  secondaryHighlight,
} = color;

const headerWeight = '87px';

export const HeaderContainer = styled.div`
  align-items: center;
  background: ${secondaryBackground};
  box-shadow: 0px 1px 10px 1px black;
  color: white;
  display: flex;
  height: ${headerWeight};
  justify-content: space-between;
  padding: 0 8vw;
  position: relative;
`;

export const StyledIcon = styled(FaBars)`
  display: block;
  color: ${primaryHighlight};
  height: 30px;
  width: 30px;

`;

export const LinkContainer = styled.ul`
  background: ${secondaryBackground};
  display: flex;
  flex-wrap: wrap;
  left: 0;
  position: fixed;
  margin: 0;
  top: ${headerWeight};
  width: 100vw;

  a {
    color: ${primaryHighlight};
    display: block;
    font-family: 'Passion One', cursive;
    font-size: 24px;
    letter-spacing: 5px;
    margin: 8px 0;
    text-align: center;
    text-transform: capitalize;
    width: 100%;

    &:hover {
      color: ${secondaryHighlight};
    }

    &:nth-child(1) {
      margin-top: 30px;
    }

    &:last-child {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`