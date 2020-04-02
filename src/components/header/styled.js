import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { color } from '../../constant/styles';

const {
  primaryHighlight,
  secondaryBackground,
  secondaryHighlight,
} = color;

const headerWeight = '87px';

const linkStyle = `
  color: ${primaryHighlight};
  display: block;
  font-family: 'Passion One', cursive;
  letter-spacing: 5px;
  text-transform: capitalize;

  &:hover {
    color: ${secondaryHighlight};
  }
`;

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

export const InlineLinkContainer = styled.ul`
  display: none;
  width: 45vw;
  margin-top: 30px;

  a {
    ${linkStyle};
    font-size: 18px;
  }

  @media(min-width: 1024px) {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
  }
`

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
    ${linkStyle};
    font-size: 20px;
    margin: 8px 0;
    text-align: center;
    width: 100%;

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

export const StyledIcon = styled(FaBars)`
  display: block;
  color: ${primaryHighlight};
  height: 30px;
  width: 30px;

  @media(min-width: 1024px) {
    display: none;
  }
`;

